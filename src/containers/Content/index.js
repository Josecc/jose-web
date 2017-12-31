import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getPosts} from 'reducers/posts';
import Post from 'components/Post';

require('./index.scss');

const Content = ({postData}) => {
  return (
    <div className="app-Content">
      {postData.map(post => (
        <Post key={post.id} {...post}/>
      ))}
    </div>
  );
};

Content.propTypes = {
  postData: PropTypes.array
};

const mapStateToProps = (state) => ({
  postData: getPosts(state.posts)
});


export default connect(
  mapStateToProps
)(Content);
