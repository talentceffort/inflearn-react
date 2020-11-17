import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './Button'

function Container() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <LikeButton/>
      <div style={{ marginTop: 20}}>
        <span>현재 카운트: </span>
        <span style={{ marginRight: 20}}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  )
}

const domContainer = document.getElementById('root');

ReactDOM.render(React.createElement(Container), domContainer);