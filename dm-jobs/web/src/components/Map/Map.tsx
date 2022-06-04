import { useMutation } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';
import { toast } from '@redwoodjs/web/toast';
import * as classes from './Map.css';
import {
  What3wordsAddress,
  What3wordsAutosuggest,
  What3wordsSymbol,
} from '@what3words/react-components';
import JobsCell from '../Job/JobsCell';

const CREATE_JOB_MUTATION = gql`
  mutation CreateJobMutation($input: CreateJobInput!) {
    createJob(input: $input) {
      id
    }
  }
`;

const CREATE_JOB_USER_MUTATION = gql`
  mutation CreateJobUserMutation($input: CreateJobUserInput!) {
    createJobUser(input: $input) {
      id
    }
  }
`;

export const Map = () => {
  const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION, {
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { currentUser } = useAuth();
  const [createJobUser] = useMutation(CREATE_JOB_USER_MUTATION);
  const [value, setValue] = React.useState('');
  const [coordinates, setCoordinates] = React.useState(null);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  let map;
  if (google.maps?.Map) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 51.52086, lng: -0.195499 },
      zoom: 13,
      mapTypeId: 'roadmap',
    });
  }

  const onCoordinatesChanged = React.useCallback(async ({ detail }) => {
    console.log(currentUser);
    const input = {
      additionalAddressInformation: 'additional',
      title: 'title',
      description: 'desc',
      price: 123,
      longitude: detail.coordinates.lng.toString(),
      latitude: detail.coordinates.lat.toString(),
      threeWords: value,
      status: 'pending',
    };
    setCoordinates(detail.coordinates);
    const { data: job } = await createJob({
      variables: {
        input,
      },
    });
    console.log(job);
    createJobUser({
      variables: {
        input: {
          jobId: job.createJob.id,
          userId: currentUser.sub,
        },
      },
    });
  }, []);

  return (
    <div className={classes.map}>
      <JobsCell />
      <What3wordsAutosuggest
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
      </What3wordsAutosuggest>

      <What3wordsAddress words={value} />
      {JSON.stringify(coordinates)}
    </div>
  );
};

export default Map;
