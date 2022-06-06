import {
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { useEffect, useRef, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { createMarker } from 'src/components/General/MapHelper/createMarker';
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

  const mapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const priceRef = useRef<HTMLInputElement>();
  const longitudeRef = useRef<HTMLInputElement>();
  const latitudeRef = useRef<HTMLInputElement>();
  const threeWordsRef = useRef<HTMLInputElement>();
  const timeoutRef = useRef<HTMLInputElement>();
  const statusRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();
  const additionalAddressInformationRef = useRef<HTMLInputElement>();

  const map = useRef<google.maps.Map>(null);
  const searchService = useRef<google.maps.places.PlacesService>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    // eslint-disable-next-line no-new
    map.current = new google.maps.Map(mapRef.current, {
      center: { lat: 48.123, lng: 11.123 },
      zoom: 15,
      mapTypeId: 'roadmap',
    });

    searchService.current = new google.maps.places.PlacesService(map.current);
  }, []);

  const searchAddress = () => {
    const address = addressRef.current.value;
    if (searchService) {
      searchService.current.findPlaceFromQuery(
        { query: address, fields: ['name', 'geometry'] },
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
              createMarker(map.current, results[i]);
            }

            console.log(results);

            map.current.setCenter(results[0]!.geometry!.location!);
          }
        }
      );
    }
  };

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
  const onSubmit = () => {
    const dataWithCategories = {
      title: titleRef.current.value,
      price: parseInt(priceRef.current.value),
      description: descriptionRef.current.value,
      longitude: longitudeRef.current.value,
      latitude: latitudeRef.current.value,
      threeWords: threeWordsRef.current.value,
      status: statusRef.current.value,
      timeout: timeoutRef.current?.value ?? null,
      additionalAddressInformation:
        additionalAddressInformationRef.current.value,
      categories: [...jobCategory],
      tags: [...jobTags],
    };
    if (!dataWithCategories.timeout) {
      delete dataWithCategories.timeout;
    }
    props.onSave(dataWithCategories, props?.job?.id);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          New job
        </Typography>

        <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="title"
                id="title"
                label="Jobtitle"
                defaultValue={props.job?.title}
                required
                inputRef={titleRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                multiline
                maxRows={5}
                name="description"
                id="description"
                label="Description"
                defaultValue={props.job?.description}
                className="rw-input"
                inputRef={descriptionRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="Address"
                id="address"
                label="Addresse"
                className="rw-input"
                inputRef={addressRef}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={searchAddress}
              >
                Search location
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div
                ref={mapRef}
                style={{
                  height: '500px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="price"
                id="price"
                label="Price"
                defaultValue={props.job?.price}
                required
                inputRef={priceRef}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="threeWords"
                id="threeWords"
                label="threeWords"
                defaultValue={props.job?.threeWords}
                required
                inputRef={threeWordsRef}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="longitude"
                id="longitude"
                label="longitude"
                defaultValue={props.job?.longitude}
                required
                inputRef={longitudeRef}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="latitude"
                id="laitude"
                label="laitude"
                defaultValue={props.job?.latitude}
                required
                inputRef={latitudeRef}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="status"
                id="status"
                label="status"
                defaultValue={props.job?.status}
                required
                inputRef={statusRef}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="timeout"
                id="timeout"
                label="timeout"
                defaultValue={formatDatetime(props.job?.timeout)}
                inputRef={timeoutRef}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="additionalAddressInformation"
                id="additionalAddressInformation"
                label="additionalAddressInformation"
                defaultValue={props.job?.additionalAddressInformation}
                inputRef={additionalAddressInformationRef}
              />
            </Grid>
            <Grid item xs={6}>
              <JobCategory handleChange={handleChange} value={jobCategory} />
            </Grid>
            <Grid item xs={12}>
              <JobTag handleClick={handleTagClick} tags={jobTags} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Submit new job
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default JobForm;
