export default function Item(props) {
  const { item, onDeleteItems, onToggleItem } = props

  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
