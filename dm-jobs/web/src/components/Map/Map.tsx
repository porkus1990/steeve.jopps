import {
  What3wordsAddress,
  What3wordsAutosuggest,
} from '@what3words/react-components';
import JobsCell, { QUERY } from '../Job/JobsCell';

import { useAuth } from '@redwoodjs/auth';
import { CellSuccessProps, useMutation, useQuery } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import './Map.css';
import { FindJobs, Job } from 'types/graphql';

// const CREATE_JOB_MUTATION = gql`
//   mutation CreateJobMutation($input: CreateJobInput!) {
//     createJob(input: $input) {
//       id
//     }
//   }
// `;

// const CREATE_JOB_USER_MUTATION = gql`
//   mutation CreateJobUserMutation($input: CreateJobUserInput!) {
//     createJobUser(input: $input) {
//       id
//     }
//   }
// `;

export const Map = () => {
  const { data } = useQuery<CellSuccessProps<FindJobs>>(QUERY);

  // const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION, {
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });
  const mapRef = React.useRef<HTMLDivElement>(null);

  // const { currentUser } = useAuth();
  // const [createJobUser] = useMutation(CREATE_JOB_USER_MUTATION);
  // const [value, setValue] = React.useState('');
  // const [coordinates, setCoordinates] = React.useState(null);
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   setValue(event.currentTarget.value);
  // };

  React.useEffect(() => {
    if (!mapRef.current) return;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 48, lng: 10 },
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    (data?.jobsNotPicked || []).map((openJob) => {
      new google.maps.Marker({
        position: { lat: Number(openJob.latitude), lng: Number(openJob.longitude) },
        map,
        title: "Job",
      });
    });
  }, [mapRef.current]);
  // const onCoordinatesChanged = React.useCallback(async ({ detail }) => {
  //   console.log(currentUser);
  //   const input = {
  //     additionalAddressInformation: 'additional',
  //     title: 'title',
  //     description: 'desc',
  //     price: 123,
  //     longitude: detail.coordinates.lng.toString(),
  //     latitude: detail.coordinates.lat.toString(),
  //     threeWords: value,
  //     status: 'pending',
  //   };
  //   setCoordinates(detail.coordinates);
  //   const { data: job } = await createJob({
  //     variables: {
  //       input,
  //     },
  //   });
  //   console.log(job);
  //   createJobUser({
  //     variables: {
  //       input: {
  //         jobId: job.createJob.id,
  //         userId: currentUser.sub,
  //       },
  //     },
  //   });
  // }, []);

  return (
      <div ref={mapRef} style={{ height: '500px'}} />
  );
};


{/* <What3wordsAutosuggest
        return_coordinates
        onCoordinates_changed={onCoordinatesChanged}
        api_key="O29MMPI1"
        n_focus_results={5}
      >
        <input
          placeholder="e.g. ///filled.count.soap"
          id="w3w"
          type="text"
          value={value}
          onChange={onChange}
        />
      </What3wordsAutosuggest> */}
