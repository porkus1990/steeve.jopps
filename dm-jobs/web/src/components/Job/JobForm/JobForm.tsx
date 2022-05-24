import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms';

import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import JobCategory from 'src/components/JobCategory/JobCategory';
import JobTag from 'src/components/JobTag/JobTag';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

const JobForm = (props) => {
  const [jobCategory, setJobCategory] = useState<string[]>([]);
  const [jobTags, updateTags] = useState<number[]>([]);

  const handleTagClick = (id) => {
    if (!jobTags.includes(id)) {
      updateTags([...jobTags, id]);
    } else {
      updateTags(jobTags.filter((t) => t !== id));
    }
  };

  const handleChange = (event: SelectChangeEvent<typeof jobCategory>) => {
    const {
      target: { value },
    } = event;
    setJobCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const onSubmit = (data) => {
    const dataWithCategories = {
      data,
      jobCategory,
      jobTag: jobTags,
    };
    props.onSave(dataWithCategories, props?.job?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.job?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.job?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.job?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="longitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Longitude
        </Label>

        <TextField
          name="longitude"
          defaultValue={props.job?.longitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="longitude" className="rw-field-error" />

        <Label
          name="latitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Latitude
        </Label>

        <TextField
          name="latitude"
          defaultValue={props.job?.latitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="latitude" className="rw-field-error" />

        <Label
          name="threeWords"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Three words
        </Label>

        <TextField
          name="threeWords"
          defaultValue={props.job?.threeWords}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="threeWords" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <TextField
          name="status"
          defaultValue={props.job?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="timeout"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timeout
        </Label>

        <DatetimeLocalField
          name="timeout"
          defaultValue={formatDatetime(props.job?.timeout)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="timeout" className="rw-field-error" />

        <Label
          name="additionalAddressInformation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Additional address information
        </Label>

        <TextField
          name="additionalAddressInformation"
          defaultValue={props.job?.additionalAddressInformation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError
          name="additionalAddressInformation"
          className="rw-field-error"
        />
        <JobCategory handleChange={handleChange} value={jobCategory} />
        <JobTag handleClick={handleTagClick} tags={jobTags} />
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default JobForm;
