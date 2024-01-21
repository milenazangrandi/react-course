import { useState } from "react";
import Item from "./Item";

export default function PackingList(props) {
  const { initialItems, onDeleteItems, onToggleItem, onDeleteList} = props
  const [sortBy, setSortBy] = useState('input')
  let sortedItems;
  if(sortBy === 'input') sortedItems = initialItems

  if(sortBy === 'description') sortedItems = initialItems.slice().sort((a, b) => a.description.localeCompare(b.description))

  if(sortBy === 'packed') sortedItems = initialItems.slice().sort((a,b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            item={item}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <div className="actions">
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>            
            <option value='packed'>Sort by packed status</option>            
          </select>
      <button onClick={onDeleteList}>Clear list</button>
      </div>
    </div>
  );
}
