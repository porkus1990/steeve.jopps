import type { FindJobTagQuery, FindJobTagQueryVariables } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import { Chip, ListItem, Paper, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const QUERY = gql`
  query FindJobTagQuery {
    jobTags {
      id
      name
      description
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({
  error,
}: CellFailureProps<FindJobTagQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({
  jobTags,
}: CellSuccessProps<FindJobTagQueryVariables>) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>Tags</h2>
      <p>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            width: 'fit-content',
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {jobTags.map((tag) => (
            <ListItem key={tag.id} style={{ width: 'fit-content' }}>
              <Tooltip title={tag.description}>
                <Chip label={t(tag.name)} color="primary" />
              </Tooltip>
            </ListItem>
          ))}
        </Paper>
      </p>
    </div>
  );
};
