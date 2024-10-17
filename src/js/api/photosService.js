import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

async function getPhotos(query) {
  const res = await axios.get('search/photos', {
    params: {
      query,
    },
  });

  return res.data;
}

export { getPhotos };
