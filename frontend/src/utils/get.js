export const get = (endpoint, cb) => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log('get err', err))
}
