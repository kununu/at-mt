import React, {useState} from 'react'
import TestCase from './TestCase'
import TestCaseForm from './TestCaseForm'
import TestCaseList from './TestCaseList'
import './testCase.css'

const TestCaseContainer = () => {
  const [state, setState] = useState({
    page: 'list',
    id: 0,
    testCase: {}
  })

  const viewComponent = (option, id=0, testCase = {}) => {
    setState({
      page: option,
      id:id,
      testCase: testCase
    })
  }

  switch (state.page) {
    case 'form':
      return [<TestCaseForm
        viewList={() => viewComponent('list')}
        testCase={state.testCase}/>]
    case 'list':
      return [<TestCaseList
        viewForm={viewComponent}
        viewFullCase={viewComponent} />]
    case 'fullCase':
      return [<TestCase
        viewList={() => viewComponent('list')}
        id={state.id}/>]
    default:
      return null
  }
}

export default TestCaseContainer
