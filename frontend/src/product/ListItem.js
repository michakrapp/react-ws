import './ListItem.css';

export default function ListItem({ product, onDelete }) {
  return (
    <div className="product-item">
      <div>
        {product.title} {product.price} €
      </div>
      <button onClick={() => onDelete(product)}>löschen</button>
    </div>
  );
}
