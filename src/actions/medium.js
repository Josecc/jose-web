export function fetchPosts() {
  return fetch(process.env.POST_API_LINK, { mode: 'cors' }).then(res => {
    console.log({ res })
    return res.json();
  });
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
