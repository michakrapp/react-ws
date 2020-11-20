import React from 'react';

import './App.css';
import List from './List';
import MyClass from './MyClass';

function App() {
  const name = 'Lisa';

  function handleClick() {
    console.log('you clicked');
  }

  const a = ['a', 'b', 'c'];

  let content = <div>No content</div>;
  if (a.length > 0) {
    content = a.map((item) => <div key={Math.random()}>{item}</div>);
  }

  return <div>{content}</div>;

  return (
    <>
      <List name={name} handleClick={handleClick} />
      <MyClass />

      {a.map((item) => (
        <div key={Math.random()}>{item}</div>
      ))}
    </>
  );
}

export default App;
