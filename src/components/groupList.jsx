const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
  if (!Array.isArray(items)){
  return (
    <ul className="list-group">
      {Object.keys(items).map(key => (
        <li
          className={"list-group-item" + (items[key] === selectedItem ? ' active' : '')}
          key={items[key][valueProperty]}
          style={{fontFamily: 'Anton, sans-serif'}}
          onClick={() => onItemSelect(items[key])}
          role='button'
        >
          {items[key][contentProperty]}
        </li>
      ))}
    </ul>
  )}
    return (
      <ul className="list-group">
        {items.map(item => (
          <li
            className={"list-group-item" + (item === selectedItem ? ' active' : '')}
            key={item[valueProperty]}
            style={{fontFamily: 'Anton, sans-serif'}}
            onClick={() => onItemSelect(item)}
            role='button'
          >
            {item[contentProperty]}
          </li>
        ))}
      </ul>
    )
}

export default GroupList

