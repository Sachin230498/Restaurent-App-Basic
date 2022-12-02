import React from 'react'


const Navbar = ({filteritem, menuList}) => {
  return (
    <div>
    <nav className='navbar'>
    <div className='btn-group'>

    {menuList.map((curElem) => {
          return (
            <button className='btn-group__item' onClick={()=>filteritem(curElem)}>
               {curElem}
            </button>
          )
        })}
    </div>
  </nav>
    </div>
  )
}

export default Navbar


//   <button className='btn-group__item' onClick={()=>filteritem("breakfast")}>
// Breakfast</button>

// <button className='btn-group__item' onClick={()=>filteritem("lunch")}
// >Lunch</button>
// <button className='btn-group__item' onClick={()=>filteritem("evening")}>
// Evening</button>
// <button className='btn-group__item' onClick={()=>filteritem("dinner")}>
// Dinner</button>