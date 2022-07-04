import { useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Typography,
} from '@mui/material';

import { useAuth } from '@redwoodjs/auth';

import UserAddressEditCell from 'src/components/User/UserAddressEditCell';

const GET_USER_ADDRESSES_QUERY = gql`
  query userAddressesByUserAuthProfile($userAuthId: String!) {
    userAddresses: userAddressesByUserAuth(userAuthId: $userAuthId) {
      id
      number
      street
      town
      zipCode
    }
  }
`;

export const Empty = () => <>empty</>;

const UserAddresses = () => {
  const { currentUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const currentUserId = currentUser?.sub;
  const [open, setOpen] = useState(false);
  const [editAddressId, setAddressEditId] = useState(0);

  const [loadAddresses, { called, data }] = useLazyQuery(
    GET_USER_ADDRESSES_QUERY
  );
  let tryCounter = 0;

  useEffect(() => {
    if (!called && tryCounter < 4) {
      loadAddresses({
        variables: {
          userAuthId: currentUserId,
        },
      });
      tryCounter++;
    }
  }, [called, currentUserId, loadAddresses]);

  if (!data) {
    return <p>no addresses</p>;
  }

  if (data && data.userAddresses && !addresses.length) {
    setAddresses(data.userAddresses);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCallback = async (updatedAddress) => {
    let updated = [...addresses];

    const replaceIndex = updated.findIndex((el) => el.id === updatedAddress.id);

    updated.splice(replaceIndex, 1);
    updated.push(updatedAddress);
    updated = updated.sort((a, b) => (a.id < b.id ? 1 : -1));
    console.log(addresses);
    setAddresses(updated);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const edit = async (id) => {
    await setAddressEditId(id);
    handleClickOpen();
  };

  if (!addresses.length) {
    return (
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        Your do not have any addresses at the moment
      </Typography>
    );
  }

  return (
    <>
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        Your addresses
      </Typography>
      <UserAddressEditCell
        id={editAddressId}
        open={open}
        callback={handleCloseCallback}
        handleClose={handleClose}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="medium">
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Town</TableCell>
              <TableCell sx={{ color: 'white' }}>Street</TableCell>
              <TableCell sx={{ color: 'white' }}>Number</TableCell>
              <TableCell sx={{ color: 'white' }}>Zipcode</TableCell>
              <TableCell sx={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((address) => (
              <TableRow
                key={address.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {address.town}
                </TableCell>
                <TableCell>{address.street}</TableCell>
                <TableCell>{address.number}</TableCell>
                <TableCell>{address.zipCode}</TableCell>
                <TableCell>
                  <Button onClick={() => edit(address.id)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserAddresses;
