import React from 'react';

export default({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Title here {post}</div>
      </div>
    </div>
  )
}