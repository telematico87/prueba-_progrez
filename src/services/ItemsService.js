
import { API_URL } from "../helpers/constants";
import { TOKEN } from "../helpers/constants";
export class ItemsService {


    async getMenu() {
        
      
      const response = await fetch("servicio.json", {
          headers: {
            'Accept': 'application/json',
            "Authorization":TOKEN
          }
                
        });

 
      const data = await response.json();

  
      let keys=Object.keys(data.lista[0]);
   
      /**Preparar */
      var new_menu=keys.map((item, i) => {
        var sub_menu=data.lista[0][item][0].submenu;
      
       if(sub_menu!=null){
          let keys_submenu= Object.keys(sub_menu);
 
          var new_submenu=keys_submenu.map((itemsub, j) => { 
            let elementoSubMenu={
                title:sub_menu[itemsub][0].nombre_item,
                url:sub_menu[itemsub][0].url,
            }
            return elementoSubMenu;
          });
          

        }
      
        let elementoMenu={
          title:data.lista[0][item][0].nombre_item,
          url:data.lista[0][item][0].url,
          submenu: new_submenu
        }
        
         return elementoMenu;
     
    });



     
      return new_menu;
     
    
    }
}