import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {post} from 'constants/InlineSVGs';

import {getPosts} from 'reducers/posts';
import Post from 'components/Post';

require('./index.scss');

const Content = ({postData}) => {
  if (postData.length == 0)
    return (
      <div className="app-Content">
        <span dangerouslySetInnerHTML={post} />
        <span dangerouslySetInnerHTML={post} />
        <span dangerouslySetInnerHTML={post} />
      </div>
    );
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
