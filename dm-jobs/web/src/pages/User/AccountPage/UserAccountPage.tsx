import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';

import {
  CreateUserInformationInput,
  CreateUserAddressInput,
} from 'types/graphql';

const CREATE_NAME_MUTATION = gql`
  mutation CreateUserInformation($input: CreateUserInformationInput!) {
    createUserInformation(input: $input) {
      id
    }
  }
`;

const GET_CURRENT_USER_INFO_QUERY = gql`
  query userInfoByAuthId($userAuthId: String!) {
    userInformation: userInformationAuthId(userAuthId: $userAuthId) {
      id
      firstName
      lastName
    }
  }
`;

const CREATE_USER_ADDRESS_MUTATION = gql`
  mutation CreateUserAddress($input: CreateUserAddressInput!) {
    createUserAddress(input: $input) {
      id
    }
  }
`;

const GET_USER_ADDRESSES_QUERY = gql`
  query userAddressesByUserAuth($userAuthId: String!) {
    userAddresses: userAddressesByUserAuth(userAuthId: $userAuthId) {
      id
    }
  }
`;

const UserAccountPage = () => {
  const { currentUser } = useAuth();
  const currentUserId = currentUser.sub;

  const userInformationData = useQuery(GET_CURRENT_USER_INFO_QUERY, {
    variables: {
      userAuthId: currentUserId,
    },
  });

  const userAddresses = useQuery(GET_USER_ADDRESSES_QUERY, {
    variables: {
      userAuthId: currentUserId,
    },
  });

  console.log(userAddresses);

  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();

  const [createUserInfo] =
    useMutation<CreateUserInformationInput>(CREATE_NAME_MUTATION);

  const [createUserAddress] = useMutation<CreateUserAddressInput>(
    CREATE_USER_ADDRESS_MUTATION
  );

  const townRef = useRef<HTMLInputElement>();
  const streetRef = useRef<HTMLInputElement>();
  const numberRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();

  const submitBasicUserInfo = async () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    if (!firstName || !lastName) {
      console.error('both names required');
    }

    const resp = await createUserInfo({
      variables: {
        input: {
          firstName,
          lastName,
          userAuthId: currentUserId,
        },
      },
    });

    console.log(resp);
  };

  const submitUserAddress = async () => {
    const street = streetRef.current.value;
    const town = townRef.current.value;
    const number = numberRef.current.value;
    const zipCode = zipCodeRef.current.value;

    if (!street || !town || !number || !zipCode) {
      return;
    }

    const resp = createUserAddress({
      variables: {
        input: {
          town,
          street,
          number,
          zipCode,
          userAuthId: currentUserId,
        },
      },
    });

    console.log(resp);
  };

  const onSubmitName = () => {
    submitBasicUserInfo();
  };

  const onSubmitAddress = () => {
    submitUserAddress();
  };

  return (
    <>
      <MetaTags title="Account settings" />
      <CssBaseline />

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Basic account information
          </Typography>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  disabled={
                    userInformationData?.data?.userInformation?.firstName
                      ? true
                      : true
                  }
                  fullWidth
                  id="firstName"
                  label="Firstname"
                  name="firstName"
                  inputRef={firstNameRef}
                  value={
                    userInformationData?.data?.userInformation?.firstName ?? ''
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  disabled={
                    !!userInformationData?.data?.userInformation?.lastName
                  }
                  fullWidth
                  id="lastName"
                  label="Lastname"
                  name="lastName"
                  inputRef={lastNameRef}
                  value={
                    userInformationData?.data?.userInformation?.lastName ?? ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  disabled={
                    userInformationData?.data?.userInformation?.firstname ||
                    userInformationData?.data?.userInformation?.lastName
                  }
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={onSubmitName}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Additional account information
          </Typography>
          <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="town"
                  label="Town"
                  name="town"
                  inputRef={townRef}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  inputRef={streetRef}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="House number"
                  name="number"
                  inputRef={numberRef}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="zipCode"
                  label="Zip code"
                  name="zipCode"
                  inputRef={zipCodeRef}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={onSubmitAddress}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default UserAccountPage;
