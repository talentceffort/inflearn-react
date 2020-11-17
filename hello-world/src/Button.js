import React from 'react';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  
  return (
    <button onClick={() => setLiked(!liked)}>{text}</button>
  )
}

export default LikeButton