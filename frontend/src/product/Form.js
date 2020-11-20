import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const category = 2;
  const initialProduct = {
    title: '',
    price: '',
    category,
    description: '',
  };

  const [product, setProduct] = useState(initialProduct);

  function handleChange(e) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  }

  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (response.status === 201) {
      history.push('/product/2');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">speichern</button>
    </form>
  );
}
