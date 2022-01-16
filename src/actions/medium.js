export function fetchPosts() {
  return fetch(process.env.POST_API_LINK, { mode: 'no-cors' }).then(res => {return res.json();});
}

export function setPosts(posts) {
  return {
    type: 'POSTS_RECEIVED',
    posts
  };
}

export function initialPosts() {
  return dispatch => {
    return fetchPosts().then(
      posts => dispatch(setPosts(posts))
    );
  };
}
