import { useEffect, useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  });

  return <div>{visible ? <List /> : ''} </div>;
}

export default App;
