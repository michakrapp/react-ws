export default function ListItem({ category, onDelete }) {
  return (
    <div>
      <div>{category.title}</div>
      <button onClick={() => onDelete(category)}>löschen</button>
    </div>
  );
}
