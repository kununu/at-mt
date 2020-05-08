import React from 'react';
import List from './components/TestPlan/TestPlanList'
import Form from './components/TestPlan/TestPlanForm'
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


  export default App
