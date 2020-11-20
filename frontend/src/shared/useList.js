import { useState, useEffect, useRef } from 'react';

export default function useList(url, filter) {
  const [items, setItems] = useState([]);

  const urlRef = useRef(url);
  const filterRef = useRef(filter);

  useEffect(() => {
    (async () => {
      let reqUrl = urlRef.current;
      if (filterRef.current && filterRef.current.category) {
        reqUrl = `${reqUrl}?category=${filterRef.current.category}`;
      }
      const response = await fetch(reqUrl);
      const data = await response.json();
      setItems(data);
    })();
  }, [urlRef, filterRef]);

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
