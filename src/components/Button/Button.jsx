import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="submit" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
