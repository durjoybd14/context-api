import './App.css';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import React, { createContext, useState } from 'react';

export const categoryContext = createContext();




function App() {
  const [count, setCount] = useState(0)

  return (
    <categoryContext.Provider value={[count, setCount]}>
      <p>App js: {count}</p>
      <Home></Home>
      <Category></Category>
    </categoryContext.Provider>
  );
}

export default App;
