import ListItem from './ListItem';
import useList from '../shared/useList';

export default function List() {
  const { items: products, handleDelete } = useList(
    'http://localhost:3001/products/',
  );

  if (products.length === 0) {
    return <div>No results found</div>;
  } else {
    return products.map((category) => (
      <ListItem key={category.id} product={category} onDelete={handleDelete} />
    ));
  }
}
