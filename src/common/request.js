import fetch from 'isomorphic-fetch';

export default function request(query, variables) {
  return fetch('/graphql', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    }),
  }).then((response) => {
    if (response.errors) {
      throw response.errors;
    } else {
      return response.json();
    }
  });
}
