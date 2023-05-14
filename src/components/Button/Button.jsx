import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="submit" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;
