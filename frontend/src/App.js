import './App.css';
import CategoryList from './category/List';
import ProductList from './product/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category">
          <CategoryList />
        </Route>
        <Route path="/product/:categoryId">
          <ProductList />
        </Route>
        <Route path="/">
          <Redirect to="/category" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
