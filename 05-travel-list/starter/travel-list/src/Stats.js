export default function Stats({items}) {
  if(!items.length) return (
  <p className="stats">
    <em>
    Start adding some items to your packing list. 🚀
    </em>
  </p>
  )

  const totalItems = items.length
  const packedItems = items.filter(item => item.packed).length
  const packedP = Math.round(packedItems*100/totalItems)

  return (
    <footer className="stats">
      <em>{
      packedP === 100 ? `You got everything ready to go! ✈️` 
      :`💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${packedP}%)`
      }</em>
    </footer>
  );
}
