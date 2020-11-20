import { useState, useEffect } from 'react';
const data = [
  {
    id: 1,
    title: 'Baumarkt',
  },
  {
    id: 2,
    title: 'Garten',
  },
  {
    id: 3,
    title: 'Haustier',
  },
];

export default function List() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(data);
    }, 1000);
  }, []);

  if (categories.length === 0) {
    return <div>No results found</div>;
  } else {
    return categories.map((category) => (
      <div key={category.id}>{category.title}</div>
    ));
  }
}
