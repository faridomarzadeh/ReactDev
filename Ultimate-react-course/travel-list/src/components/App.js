import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function clearItems() {
    const confirmed = window.confirm("Delete All Items, Do you confirm ?");

    if (confirmed) setItems([]);
  }
  function handleDeleteItems(id) {
    setItems(items.filter((itm) => itm.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((itm) => {
        if (itm.id === id) {
          return { ...itm, packed: !itm.packed };
        } else {
          return itm;
        }
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
