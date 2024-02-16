import CountryItem from "./CountryItem";
import PropTypes from "prop-types";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import { useCities } from "../contexts/CitiesContext";

CountriesList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div>
      <ul className={styles.cityList}>
        {countries.map((country) => (
          <CountryItem city={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
}
