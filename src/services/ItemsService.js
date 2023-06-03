
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
        if(data.lista[0][item][0]!=null){

          let keys_submenu= Object.keys(data.lista[0][item][0]);
          var new_submenu=keys_submenu.map((itemsub, j) => { 
            let elementoSubMenu={
                title:itemsub,
                url:'/'
            }
              return elementoSubMenu;
          });

        }
        let elementoMenu={
          title:item,
          url:'/',
          submenu: new_submenu
        }
        
         return elementoMenu;
     
    });



     
      return new_menu;
     
    
    }
}