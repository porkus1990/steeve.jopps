import { MetaTags } from '@redwoodjs/web';
import { useLazyQuery } from '@apollo/client';
import { useAuth } from '@redwoodjs/auth';
import {
  Button,
  CssBaseline,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableBody,
} from '@mui/material';
import { useEffect, useState } from 'react';
import UserAddressEditCell from 'src/components/User/UserAddressEditCell/UserAddressEditCell';

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

const UserProfilePage = () => {
  const { currentUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const currentUserId = currentUser.sub;
  const [open, setOpen] = useState(false);
  const [editAddressId, setAddressEditId] = useState(0);

  const [loadAddresses, { loading, data }] = useLazyQuery(
    GET_USER_ADDRESSES_QUERY
  );

  useEffect(() => {
    loadAddresses({
      variables: {
        userAuthId: currentUserId,
      },
    });
  }, []);

  if (loading) return <p>Loading ... replace me with a spinner</p>;

  if (data && data.userAddresses && !addresses.length) {
    setAddresses(data.userAddresses);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const edit = async (id) => {
    await setAddressEditId(id);
    handleClickOpen();
  };

  return (
    <>
      <MetaTags title="Account overview" />
      <CssBaseline />
      <UserAddressEditCell
        id={editAddressId}
        open={open}
        handleClose={handleClose}
      />
      <Typography component="h1" variant="h5">
        Account overview
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Town</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Zipcode</TableCell>
              <TableCell>Edit</TableCell>
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

export default UserProfilePage;
