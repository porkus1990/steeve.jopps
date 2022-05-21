import type {
  FindJobCategoryQuery,
  FindJobCategoryQueryVariables,
  JobCategory,
} from 'types/graphql';
import * as React from 'react';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const QUERY = gql`
  query FindJobCategoryQuery {
    jobCategories {
      id
      type
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({
  error,
}: CellFailureProps<FindJobCategoryQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ jobCategories }: CellSuccessProps<JobCategory>) => {
  const { t } = useTranslation();
  const [jobCategory, setJobCategory] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof jobCategory>) => {
    const {
      target: { value },
    } = event;
    setJobCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="category-select">{t('categorySelect')}</InputLabel>
        <Select
          id="categories"
          labelId="category-select"
          multiple
          value={jobCategory}
          onChange={handleChange}
          input={<OutlinedInput label={t('categorySelect')} />}
        >
          {jobCategories.map((category) => (
            <MenuItem key={category.id} value={category.type}>
              {t(category.type)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
