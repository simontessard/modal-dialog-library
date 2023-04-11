import React from 'react'
import ReactDOM from 'react-dom/client'

import { Modal } from './lib/Modal/Modal'

const root = ReactDOM.createRoot(document.getElementById('root'))
const text = React.createElement('p', { className: 'red' }, 'Hello, this is a test text !')

root.render(
  <React.StrictMode>
    <Modal isOpen={true} children={text} titleText="Title" closeText="Close" />
  </React.StrictMode>
)
