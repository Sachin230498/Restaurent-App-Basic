import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
    ... new Set (
         Menu.map((curElem) => {
          return curElem.category  
})
),
"All"
]
console.log(uniqueList);


const Restaurent = () => {

const  [menuData, setmenuData] = useState(Menu)
const [menuList, setMenuList]  = useState(uniqueList)
// console.log(menuData);

const filteritem = (category) =>  {

    if(category==="All"){
        setmenuData(Menu)
        return;
    }    

    const updatedList= Menu.filter((curElem) => {
        return curElem.category === category;
    })
    setmenuData(updatedList);
}

  return (
         <div>
      
            <Navbar filteritem={filteritem} menuList={menuList} />      
            <MenuCard menuData={menuData} />
        </div>
  );
};


export default Restaurent

