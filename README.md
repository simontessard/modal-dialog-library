# modal-dialog-library

A library of React components created using `create-react-app`.

## Installation

Install my-project with npm

```bash
  npm install modal-dialog-library
```

## Usage/Examples

You can style the modal with style prop :

- content
- logo,
- title,
- closeContainer,
- button

```javascript
import { Modal } from 'modal-dialog-library'

function App() {
const text = React.createElement('p', 'Hello, this is a test text !')
  return
  <Modal
  isOpen={true}
  children={text}
  titleText="Confirmed !"
  closeText="Close"
  style={{ title: { fontSize: '20px' }}}>
}
```

## Author

- [@simontessard](https://www.github.com/simontessard)
