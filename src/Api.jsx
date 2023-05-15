import axios from 'axios';

const options = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '34850720-57991e278d678856824bddd81',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = (query, page) => {
  const { BASE_URL, API_KEY, image_type, orientation, per_page } = options;
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${image_type}&orientation=${orientation}&page=${page}&per_page=${per_page}`
  );
};
