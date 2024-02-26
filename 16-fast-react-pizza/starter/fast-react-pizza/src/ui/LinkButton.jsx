import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'hover:underline text-sm text-blue-500 hover:text-blue-600';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}{' '}
    </Link>
  );
}
