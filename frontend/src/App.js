import useVisibility from './useVisibility';
import './App.css';
import List from './List';

function App() {
  const isVisible = useVisibility();
  return <div>{isVisible ? <List /> : ''}</div>;
}

export default App;
