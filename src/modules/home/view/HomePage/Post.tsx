import React from 'react';
import Heart from '@/lib/shadcn-components/ui/heart-icon.svg';

const posts = [
  { id: 1, username: 'User1', text: 'This is the first post.' },
  { id: 2, username: 'User2', text: 'Another text-only post here.' },
  { id: 3, username: 'User3', text: 'Just some random text for the third post.' },
];

const Post = () => {
  return (
    <div >
      {posts.map((post) => (
        <div key={post.id} >
          <h3>{post.username}</h3>
          <p>{post.text}</p>
          <div >
            <span>Heart</span>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
