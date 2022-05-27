import type {
  FindUserAddressEditQuery,
  FindUserAddressEditQueryVariables,
} from 'types/graphql';
import { useRef } from 'react';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({
  error,
}: CellFailureProps<FindUserAddressEditQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({
  userAddressEdit,
  open,
  handleClose,
}: CellSuccessProps<any>) => {
  const townRef = useRef<HTMLInputElement>();
  const streetRef = useRef<HTMLInputElement>();
  const numberRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();
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
                  value={userAddressEdit.town}
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
                  value={userAddressEdit.street}
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
                  value={userAddressEdit.number}
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
                  value={userAddressEdit.zipCode}
                  id="zipCode"
                  label="Zipcode"
                  name="zipCode"
                  inputRef={zipCodeRef}
                />
              </Grid>
            </Grid>
          </Box>
          <DialogActions>
            <Button onClick={() => handleClose()}>Update</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
