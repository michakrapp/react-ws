import ListItem from './ListItem';
import useList from '../shared/useList';
import { useParams } from 'react-router-dom';

export default function List() {
  const { categoryId } = useParams();

  const { items: products, handleDelete } = useList(
    'http://localhost:3001/products/',
    {
      category: categoryId,
    },
  );

  if (products.length === 0) {
    return <div>Keine Produkte gefunden</div>;
  } else {
    return products.map((category) => (
      <ListItem key={category.id} product={category} onDelete={handleDelete} />
    ));
  }
}
