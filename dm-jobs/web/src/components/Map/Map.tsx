import * as classes from './Map.css';
import {
  What3wordsAddress,
  What3wordsAutosuggest,
  What3wordsSymbol,
} from '@what3words/react-components';

export const Map = () => {
  const [value, setValue] = React.useState('');
  const [coordinates, setCoordinates] = React.useState(null);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onCoordinatesChanged = React.useCallback(({ detail }) => {
    setCoordinates(detail.coordinates);
  }, []);

  return (
    <div className={classes.map}>
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
