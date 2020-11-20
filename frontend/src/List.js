import { useState, useEffect } from 'react';

export default function List() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/categories');
      const data = await response.json();
      setCategories(data);
    })();
    return () => {
      console.log('UNMOUNT');
    };
  }, []);

  if (categories.length === 0) {
    return <div>No results found</div>;
  } else {
    return categories.map((category) => (
      <div key={category.id}>{category.title}</div>
    ));
  }
}
