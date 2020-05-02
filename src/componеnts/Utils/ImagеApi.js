import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const KEY = '14760825-e730b99d3ea41b1e2e75ad068';
const getImages = ({ query, page }) => {
  return axios.get(
    `${BASEURL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default getImages;
