import ListItem from './ListItem';
import useList from '../shared/useList';

export default function List() {
  const { items: categories, handleDelete } = useList(
    'http://localhost:3001/categories/',
  );

  if (categories.length === 0) {
    return <div>No results found</div>;
  } else {
    return categories.map((category) => (
      <ListItem key={category.id} category={category} onDelete={handleDelete} />
    ));
  }
}
