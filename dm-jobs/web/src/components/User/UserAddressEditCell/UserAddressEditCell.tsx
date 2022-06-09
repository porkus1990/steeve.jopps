import { useRef } from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
} from '@mui/material';
import type {
  FindUserAddressEditQuery,
  FindUserAddressEditQueryVariables,
} from 'types/graphql';

import {
  CellSuccessProps,
  CellFailureProps,
  useMutation,
} from '@redwoodjs/web';

export const QUERY = gql`
  query FindUserAddressEditQuery($id: Int!) {
    userAddressEdit: userAddress(id: $id) {
      id
      number
      street
      town
      zipCode
    }
  }
`;

const UPDATE_USER_ADDRESS_QUERY = gql`
  mutation UpdateUserAddress($id: Int!, $input: UpdateUserAddressInput!) {
    updateUserAddress(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => '';

export const Failure = ({
  error,
}: CellFailureProps<FindUserAddressEditQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({
  userAddressEdit,
  open,
  callback,
  handleClose,
}: CellSuccessProps<any>) => {
  const townRef = useRef<HTMLInputElement>();
  const streetRef = useRef<HTMLInputElement>();
  const numberRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();

  const [updateUserAddress] = useMutation(UPDATE_USER_ADDRESS_QUERY);

  if (!userAddressEdit) {
    return '';
  }

  const onUpdate = async () => {
    const input = {
      town: townRef.current.value,
      street: streetRef.current.value,
      number: numberRef.current.value,
      zipCode: zipCodeRef.current.value,
    };

    const resp = await updateUserAddress({
      variables: {
        id: userAddressEdit.id,
        input,
      },
    });

    console.log(resp);
    await callback({
      ...input,
      id: userAddressEdit.id,
    });

    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>Edit address</DialogContentText>
          <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={userAddressEdit.town}
                  id="town"
                  label="Town"
                  name="town"
                  inputRef={townRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={userAddressEdit.street}
                  id="street"
                  label="Street"
                  name="street"
                  inputRef={streetRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={userAddressEdit.number}
                  id="number"
                  label="Number"
                  name="number"
                  inputRef={numberRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={userAddressEdit.zipCode}
                  id="zipCode"
                  label="Zipcode"
                  name="zipCode"
                  inputRef={zipCodeRef}
                />
              </Grid>
            </Grid>
          </Box>
          <DialogActions>
            <Button onClick={() => onUpdate()}>Update</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
