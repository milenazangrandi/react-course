import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

CountryItem.propTypes = {
  city: PropTypes.object,
};

function CountryItem({ city }) {
  return (
    <li className={styles.countryItem}>
      <span>{city.emoji}</span>
      <span>{city.country}</span>
    </li>
  );
}

export default CountryItem;
