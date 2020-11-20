import { useState, useEffect } from 'react';

export default function useList(url) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
    })();
  }, [url]);

  async function handleDelete(item) {
    const response = await fetch(`${url}${item.id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setItems((prevItems) => {
        return prevItems.filter((i) => i.id !== item.id);
      });
    }
  }

  return { items, handleDelete };
}
