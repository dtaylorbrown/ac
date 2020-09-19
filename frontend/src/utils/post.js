export const post = (endpoint, body, cb) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  fetch(endpoint, config)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log('get err', err))
}
