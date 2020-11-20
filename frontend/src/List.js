import { useState, useEffect } from 'react';
import ListItem from './ListItem';

export default function List() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/categories');
      const data = await response.json();
      setCategories(data);
    })();
  }, []);

  async function handleDelete(category) {
    const response = await fetch(
      `http://localhost:3001/categories/${category.id}`,
      { method: 'DELETE' },
    );
    if (response.status === 200) {
      setCategories((prevCategories) => {
        return prevCategories.filter((cat) => cat.id !== category.id);
      });
    }
  }

  if (categories.length === 0) {
    return <div>No results found</div>;
  } else {
    return categories.map((category) => (
      <ListItem key={category.id} category={category} onDelete={handleDelete} />
    ));
  }
}
