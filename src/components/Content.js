import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

let Content = () =>{
let [item, setItem] = useState([
    {
 id:1,
 checked: false,
 item: "item1" 
    },{
id:2,
checked: false,
item: "item2"
    },{
id:3,
checked: false,
item: "item3"
    }]
)

let handleClick = (id) =>{
let newList = item.map((item) => item.id === id ? { ...item, checked : !item.checked } : item);
console.log(id);
setItem(newList);
}

let handleDelete = (id) =>{
 let list = item.filter((item) => item.id !== id);
 setItem(list);
}



return(
<main>
<ul>
    { item.length ? (item.map((item)=>(
      <li className="item" key={item.id}><input type="checkbox" onChange={() => handleClick(item.id)} checked={item.checked}/>
      <label style={item.checked ? { textDecoration: 'line-through'} : null} onDoubleClick={() => handleClick(item.id)}>{item.item}</label>
      <FaTrashAlt 
      role="button"
      tabIndex="0"
      onClick={() => handleDelete(item.id)}
      />
      </li>
    ))) : (<p>the list is empty</p>)
    } 
</ul>
</main>
);

}

export default Content;
