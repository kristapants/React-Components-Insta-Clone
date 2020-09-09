import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  console.log(post)
  return (
    <div className='post-border'>
      <PostHeader
        thumbnailUrl={post.thumbnailUrl}
        username={post.username}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection 
        likePost={likePost}
        numberOfLikes={post.likes}
        postId={post.id}
      />
      {/* Comments also wants its props! */}
      <Comments 
        comments={post.comments}
      />
    </div>
  );
};

export default Post;
