import { useState, useEffect } from 'react';

export default function List(props) {
  const [state, setState] = useState({ name: 'Klaus' });

  useEffect(() => {
    setTimeout(() => {
      setState({ name: 'Peter' });
    }, 1000);
  }, []);

  console.log('RENDER');

  function handleClick() {
    console.log(state.name);
  }

  return (
    <div onClick={props.handleClick}>
      <h1>{props.name}</h1>
      My List {state.name}
    </div>
  );
}
