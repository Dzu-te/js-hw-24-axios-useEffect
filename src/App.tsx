import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import { ShoppingItem } from "./types/ShoppingItem";
import UrlPlacwholder from "./Urls/UrlPlacwholder";


function App() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    setItems([
      { id: 1, product: "Apple", isChecked: false },
      { id: 2, product: "Banana", isChecked: false },
      { id: 3, product: "Orange", isChecked: false },
    ]);
  }, []);

  const addItem = (item: ShoppingItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const checkItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id !== id ? item : { ...item, isChecked: true }
      )
    );
  };

  const uncheckItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id !== id ? item : { ...item, isChecked: false }
      )
    );
  };

  return (
    <div>
      <InputForm addItem={addItem} />
      <List items={items} functions={{ removeItem, checkItem, uncheckItem }} />
      <UrlPlacwholder/>
    </div>
  );
}

export default App;
