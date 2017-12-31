const initialState = [];

export function getPosts(state = initialState, action = {}) {
  switch (action.type) {
  case 'POSTS_RECEIVED': {
    return action.posts.reduce((acc, curr) => {
      acc.push({
        title: curr.title,
        content: curr.content,
        link: curr.link,
        author: curr.creator,
        id: curr.guid,
        description: curr.content.split(/<p>|<\/p>/)[1],
      });
      return acc;
    }, []);
  }
  default:
    return state;
  }
}
