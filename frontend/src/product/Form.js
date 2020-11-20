import { useState } from 'react';

export default function Form() {
  const initialProduct = {
    title: '',
    price: '',
  };

  const [product, setProduct] = useState(initialProduct);

  const [value, setValue] = useState('');

  return (
    <div>
      Value:
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
}
