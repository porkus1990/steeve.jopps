import HomePage from './HomePage';

export const generated = () => {
  window.google = () => {
    return {
      maps: {
        Map: () => {},
      },
    };
  };
  return <HomePage />;
};

export default { title: 'Pages/HomePage' };
