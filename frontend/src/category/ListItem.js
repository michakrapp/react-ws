import './ListItem.css';

export default function ListItem({ category, onDelete }) {
  return (
    <div className="listItem">
      <div>{category.title}</div>
      <button onClick={() => onDelete(category)}>löschen</button>
    </div>
  );
}
