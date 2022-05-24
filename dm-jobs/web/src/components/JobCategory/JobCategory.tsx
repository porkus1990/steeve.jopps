import { JobCategory as JobCategoryType } from '@prisma/client';
import * as React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const JobCategory = ({ handleChange, value }) => {
  const { t } = useTranslation();
  const jobCategories = Object.values(JobCategoryType);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="category-select">{t('categorySelect')}</InputLabel>
        <Select
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
    </div>
  );
};

export default JobCategory;
