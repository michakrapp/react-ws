import './ListItem.css';
import { Link } from 'react-router-dom';

export default function ListItem({ category, onDelete }) {
  return (
    <div className="listItem">
      <Link to={`/product/${category.id}`}>{category.title}</Link>
      <button onClick={() => onDelete(category)}>löschen</button>
    </div>
  );
}
