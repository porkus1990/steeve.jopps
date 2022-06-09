import * as React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { JobCategory as JobCategoryType } from '@prisma/client';
import { useTranslation } from 'react-i18next';

const JobCategory = ({ handleChange, value }) => {
  const { t } = useTranslation();
  const jobCategories = Object.values(JobCategoryType);

  return (
    <FormControl sx={{ m: 1, width: '100%', padding: 0, margin: 0 }}>
      <InputLabel id="category-select">{t('categorySelect')}</InputLabel>
      <Select
        fullWidth
        id="categories"
        labelId="category-select"
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={t('categorySelect')} />}
      >
        {jobCategories.map((category) => (
          <MenuItem key={category} value={category}>
            {t(category)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default JobCategory;
