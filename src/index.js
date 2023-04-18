import React from 'react'
import ReactDOM from 'react-dom/client'

import { Modal } from './lib/components/Modal'

const root = ReactDOM.createRoot(document.getElementById('root'))
const text = React.createElement('p', { className: 'red' }, 'Hello, this is a test text !')

root.render(
  <React.StrictMode>
    <Modal
      isOpen={true}
      children={text}
      titleText="Title"
      closeText="Close"
      style={{ content: { padding: '2rem' }, title: { fontSize: '50px' } }}
    />
  </React.StrictMode>
)
