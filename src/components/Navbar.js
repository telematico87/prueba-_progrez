
import MenuItems from './MenuItems';
import { useState, useEffect, useRef } from 'react';
import { ItemsService } from '../services/ItemsService';


const Navbar = () => {

  const [item, setItem] = useState(null);

  useEffect(() => {

    const itemservice = new ItemsService();
 
    itemservice.getMenu().then(data=> {
      setItem(data);
     })

  }, []);


  return (
    <nav>
      <ul className="menus">
        {item!=null?item.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        }):''}
      </ul>
    </nav>
  );
};

export default Navbar;
