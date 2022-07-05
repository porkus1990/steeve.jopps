import { useEffect, useRef, useState } from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
  Button,
  Box,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MobileStepper,
  SelectChangeEvent,
  TextField,
  Typography,
  OutlinedInput,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { JobState as JobStateType } from '@prisma/client';
import SwipeableViews from 'react-swipeable-views';

import { navigate, routes } from '@redwoodjs/router';

import { createMarker } from 'src/components/General/MapHelper/createMarker';
import { threeWordsFromCoords } from 'src/components/General/MapHelper/threeWords';
import JobCategory from 'src/components/JobCategory/JobCategory';
import JobTag from 'src/components/JobTag/JobTag';

const JobForm = (props) => {
  const [jobCategory, setJobCategory] = useState<string[]>([]);
  const [jobTags, updateTags] = useState<number[]>([]);

  const mapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const priceRef = useRef<HTMLInputElement>();
  const timeoutRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();
  const additionalAddressInformationRef = useRef<HTMLInputElement>();
  const searchAddressButtonRef = useRef<HTMLButtonElement>();

  const map = useRef<google.maps.Map>(null);
  const searchService = useRef<google.maps.places.PlacesService>(null);

  const [longitude, setLongitude] = useState<string>(null);
  const [latitude, setLatitude] = useState<string>(null);
  const [threeWords, setThreeWords] = useState<string>(null);

  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );
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
              createMarker(
                map.current,
                results[i],
                async (marker: google.maps.Marker) => {
                  const lng = marker?.position?.lng();
                  const lat = marker?.position?.lat();
                  setLongitude(lng);
                  setLatitude(lat);

                  const threeWords = await threeWordsFromCoords({
                    lat,
                    lng,
                  });
                  setThreeWords(threeWords.words);
                }
              );
            }

            console.log(results);

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

  const handleChangeAddress = () => {
    searchAddressButtonRef?.current?.focus();
  };

  const onSubmit = () => {
    let timeout;
    if (timeoutRef.current?.value) {
      timeout = new Date(timeoutRef!.current!.value).toISOString();
    }
    const dataWithCategories = {
      title: titleRef.current.value,
      price: parseFloat(priceRef.current.value),
      description: descriptionRef.current.value,
      longitude: longitude.toString(),
      latitude: latitude.toString(),
      threeWords,
      status: JobStateType.pending,
      timeout: timeout ?? null,
      additionalAddressInformation:
        additionalAddressInformationRef.current.value,
      categories: [...jobCategory],
      tags: [...jobTags],
    };
    if (!dataWithCategories.timeout) {
      delete dataWithCategories.timeout;
    }
    try {
      props.onSave(dataWithCategories, props?.job?.id);

      // wait for job to exist in db
      setTimeout(() => {
        navigate(routes.pickJob());
      }, 600);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChangeDateTime = (newValue: Date | null) => {
    setValue(newValue);
  };
  const formdata = [
    <FormControl key="title" fullWidth>
      <TextField
        fullWidth
        name="title"
        id="title"
        label="Jobtitle"
        defaultValue={props.job?.title}
        required
        inputRef={titleRef}
      />
    </FormControl>,
    <FormControl key="description" fullWidth>
      <TextField
        fullWidth
        name="description"
        id="description"
        label="JobDescription"
        defaultValue={props.job?.description}
        required
        inputRef={descriptionRef}
      />
    </FormControl>,
    <FormControl key="price" fullWidth>
      <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
      <OutlinedInput
        id="outlined-adornment-price"
        endAdornment={<InputAdornment position="end">€</InputAdornment>}
        label="Price"
        inputRef={priceRef}
      />
    </FormControl>,
    <FormControl key="timeout" fullWidth>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          onChange={handleChangeDateTime}
          value={value}
          id="timeout"
          label="timeout"
          inputRef={timeoutRef}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>,
    <FormControl key="additional-info" fullWidth>
      <TextField
        fullWidth
        name="additionalAddressInformation"
        id="additionalAddressInformation"
        label="additionalAddressInformation"
        defaultValue={props.job?.additionalAddressInformation}
        inputRef={additionalAddressInformationRef}
      />
    </FormControl>,
    <FormControl key="category" fullWidth>
      <JobCategory handleChange={handleChange} value={jobCategory} />
    </FormControl>,
    <FormControl key="tags" fullWidth>
      <JobTag handleClick={handleTagClick} tags={jobTags} />
    </FormControl>,
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = formdata.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    if (!mapRef.current) return;
    map.current = new google.maps.Map(mapRef.current, {
      center: { lat: 48.123, lng: 11.123 },
      zoom: 15,
      mapTypeId: 'roadmap',
    });

    searchService.current = new google.maps.places.PlacesService(map.current);
  }, []);

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
              <FormControl key="address" fullWidth sx={{ m: 1 }}>
                <TextField
                  name="Address"
                  id="address"
                  label="Addresse"
                  className="rw-input"
                  inputRef={addressRef}
                  onChange={handleChangeAddress}
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={searchAddress}
                  ref={searchAddressButtonRef}
                >
                  Search location
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl key="address-map" fullWidth sx={{ m: 1 }}>
                <div
                  ref={mapRef}
                  style={{
                    height: '500px',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <SwipeableViews
                axis="x"
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                sx={{ m: 1 }}
              >
                {formdata.map((component, index) => {
                  return <p key={index}>{component}</p>;
                })}
              </SwipeableViews>

              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeft />
                    Back
                  </Button>
                }
              />
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
