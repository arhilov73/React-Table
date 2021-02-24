import React from 'react';

const Posts = ({ posts, loading }) => {
  // Data is loading
  if (loading) {
    return (
      <tbody>
        <tr id="loading">
          <td>
            Loading...
          </td>
        </tr>
      </tbody>
    )
  } else {
    // Data loaded
    return (
      <tbody className='list-group mb-4'>
        {posts.map(post => (
          <tr>
            <td key={post.id + 300} className='list-group-item'>{post.id}</td>
            <td key={post.id} className='list-group-item'>
              {post.firstName} {post.lastName}
            </td>
            <td key={post.id + 100} className='list-group-item'>
              {post.email}
            </td>
            <td key={post.id + 200} className='list-group-item'>
              {post.phone}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  
};

export default Posts;
