import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (newItem) => setItems([...items, newItem]);

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((e) => e.id !== id));
  };

  const handleDeleteList = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed) setItems([])
  }

  const handleToggleItem = (id) => {
    setItems((items) => 
    items.map((item) =>
      item.id === id ? {...item, packed: !item.packed} : item)
    );

  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList initialItems={items} onDeleteItems={handleDeleteItem} onToggleItem={handleToggleItem} onDeleteList={handleDeleteList} />
      <Stats items={items}/>
    </div>
  );
}

export default App;
