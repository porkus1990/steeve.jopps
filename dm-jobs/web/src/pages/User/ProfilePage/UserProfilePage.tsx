import { MetaTags } from '@redwoodjs/web';
import { useLazyQuery } from '@apollo/client';
import { useAuth } from '@redwoodjs/auth';
import {
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

  if (loading) return <p>Loading ...</p>;

  if (data && data.userAddresses && !addresses.length) {
    setAddresses(data.userAddresses);
  }

  console.log(data);

  return (
    <>
      <MetaTags title="Account overview" />
      <CssBaseline />

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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserProfilePage;
