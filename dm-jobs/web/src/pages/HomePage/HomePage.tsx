import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';
import { Map } from '../../components/Map';

const HomePage = () => {
  const { isAuthenticated, logOut } = useAuth();
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <Map />
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      {isAuthenticated ? (
        <div>
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <div>not logged in</div>
      )}
    </>
  );
};

export default HomePage;
