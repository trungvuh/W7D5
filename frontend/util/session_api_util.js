export const signup = (data) => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {data}
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
