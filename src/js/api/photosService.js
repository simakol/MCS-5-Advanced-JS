// const BASE_URL = 'https://api.unsplash.com';
// const ENDPOINT = 'search/photos';
// const API_KEY = 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

//* v1
// function getPhotos(query) {
//   return fetch(`${BASE_URL}/${ENDPOINT}?client_id=${API_KEY}&query=${query}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

//* v2
// function getPhotos(query) {
//   const params = new URLSearchParams({
//     client_id: API_KEY,
//     query,
//   });

//   return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

//* v3
// function getPhotos(query) {
//   return fetch(`${BASE_URL}/${ENDPOINT}?query=${query}`, {
//     headers: {
//       Authorization: `Client-ID ${API_KEY}`,
//     },
//   }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

//* v3 with axios
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

async function getPhotos(query) {
  //* v1
  // const res = await axios.get('search/photos', {
  //   params: {
  //     query,
  //     client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  //   },
  // });
  // return res.data;

  //* v2
  const res = await axios.get('search/photos', {
    params: {
      query,
    },
  });

  return res.data;
}

export { getPhotos };
