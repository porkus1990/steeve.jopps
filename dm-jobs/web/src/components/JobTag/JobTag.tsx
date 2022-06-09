import { Chip, ListItem, Paper, Tooltip } from '@mui/material';
import { JobTag as JobTagType } from '@prisma/client';
import { useTranslation } from 'react-i18next';

const JobTag = ({ handleClick, tags }) => {
  const { t } = useTranslation();
  const jobTagValues = Object.values(JobTagType);

  return (
    <div>
      <h2>Tags</h2>
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
        {jobTagValues.map((tag) => (
          <ListItem key={tag} style={{ width: 'fit-content' }}>
            <Tooltip title={tag}>
              <Chip
                label={t(tag)}
                color={tags.includes(tag) ? 'success' : 'primary'}
                onClick={() => handleClick(tag)}
              />
            </Tooltip>
          </ListItem>
        ))}
      </Paper>
    </div>
  );
};

export default JobTag;
