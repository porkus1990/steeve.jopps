import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

type JobLayoutProps = {
  children: React.ReactNode;
};

const JobsLayout = ({ children }: JobLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.jobs()} className="rw-link">
            Jobs
          </Link>
        </h1>
        <Link to={routes.newJob()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Job
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default JobsLayout;
