import { ColorRing } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader({ visible }) {
  return (
    <ColorRing
      visible={visible}
      height="65"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
}

Loader.propTypes = {
  visible: PropTypes.string,
};
