export default function ListItem({ product, onDelete }) {
  return (
    <div>
      <div>
        {product.title} {product.price} €
      </div>
      <button onClick={() => onDelete(product)}>löschen</button>
    </div>
  );
}
