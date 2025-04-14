import "../styles/ListItem.css";

function ListItem({ id, product, isChecked, removeItem, checkItem, uncheckItem }: {
  id: number;
  product: string;
  isChecked: boolean;
  removeItem: (id: number) => void;
  checkItem: (id: number) => void;
  uncheckItem: (id: number) => void;
}) {

  const handleClick = () => {
    removeItem(id);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      checkItem(id);
    } else {
      uncheckItem(id);
    }
  }


  return (
    <li className="list-item" data-id={id}>
      <input type="checkbox" defaultChecked={isChecked} onChange={handleChange}/>
      <span className="product-text">{product}</span>
      <button onClick={handleClick}>Remove item</button>
    </li>
  );
}

export default ListItem;
