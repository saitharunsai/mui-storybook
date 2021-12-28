import React from 'react'

import { Widget } from './gadgets/counter/Widget'

function Counter() {
  return (
    <div>
      <Widget />
      <p>
        Edit <code>src/Counter.tsx</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="Index-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="Index-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="Index-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="Index-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </div>
  )
}

export default Counter
