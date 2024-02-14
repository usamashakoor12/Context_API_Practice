import { useContext } from 'react'
import React from 'react';
import './App.css'
import Counter from './Components/Counter'
import { countContext } from './COntext/Context'

function App() {

  const countState = useContext(countContext)

  return (
    <>
    <h1>Counter {countState.counter}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </>
    
  )
}

export default App
