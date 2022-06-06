import { JobCategory as JobCategoryType } from '@prisma/client';
import { Chip, ListItem, Paper, Tooltip } from '@mui/material';

const JobCategoryFilter = ({ filter }) => {
  const categories = Object.values(JobCategoryType);
  return (
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
      {categories.map((jc) => (
        <ListItem key={jc} style={{ width: 'fit-content' }}>
          <Tooltip title={jc}>
            <Chip label={jc} onClick={() => filter(jc)} />
          </Tooltip>
        </ListItem>
      ))}
    </Paper>
  );
};

export default JobCategoryFilter;
