import React from 'react';
import './app.css'
import { Form } from './Components/Form';
import { Header } from './Components/Header';

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <Form />
      </div>
    </>
  );
}

export default App;
