export const fetchBenches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/benches',
    errors: (err) => console.log(err)
  })
);
