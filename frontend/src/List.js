import ListItem from './ListItem';
import useCategories from './useCategories';

export default function List() {
  const { categories, handleDelete } = useCategories();

  if (categories.length === 0) {
    return <div>No results found</div>;
  } else {
    return categories.map((category) => (
      <ListItem key={category.id} category={category} onDelete={handleDelete} />
    ));
  }
}
