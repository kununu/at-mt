import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/TestPlan/List'
import Form from './components/TestPlan/Form'
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
