import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import Form from './components/Form'
import './index.css';

const App = () => {
  return (
    <div>
      <div>
        <Form />
        <List />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
