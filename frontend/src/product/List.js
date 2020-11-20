import ListItem from './ListItem';
import useList from '../shared/useList';
import { useParams, useHistory, Link } from 'react-router-dom';

export default function List() {
  const { categoryId } = useParams();

  const { items: products, handleDelete } = useList(
    'http://localhost:3001/products/',
    {
      category: categoryId,
    },
  );

  const history = useHistory();

  if (products.length === 0) {
    return <div>Keine Produkte gefunden</div>;
  } else {
    return (
      <div>
        {products.map((category) => (
          <ListItem
            key={category.id}
            product={category}
            onDelete={handleDelete}
          />
        ))}
        <Link to="/product/form">NEU!</Link>
        <button
          onClick={() => {
            history.push('/product/form');
          }}
        >
          NEU!
        </button>
      </div>
    );
  }
}
