// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  userAddressEdit: {
    id: 42,
    town: 'Storybook',
    street: 'story street',
    number: '1337',
    zipCode: '12345',
  },
  open: true,
  callback: () => {},
  handleClose: () => {},
});
