import { MetaTags } from '@redwoodjs/web';
import { useLazyQuery } from '@apollo/client';
import { useAuth } from '@redwoodjs/auth';
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const GET_USER_ADDRESSES_QUERY = gql`
  query userAddressesByUserAuth($userAuthId: String!) {
    userAddresses: userAddressesByUserAuth(userAuthId: $userAuthId) {
      id
      number
      street
      zipCode
    }
  }
`;

const UserProfilePage = () => {
  const { currentUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const currentUserId = currentUser.sub;

  const [a, { loading, data }] = useLazyQuery(GET_USER_ADDRESSES_QUERY);

  console.log(a);

  useEffect(() => {
    a({
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

      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Account overview
        </Typography>
        {addresses.map((address) => (
          <div key={address.id}>
            {address.street} {address.number} {address.zipCode}
          </div>
        ))}
      </Container>
    </>
  );
};

export default UserProfilePage;
