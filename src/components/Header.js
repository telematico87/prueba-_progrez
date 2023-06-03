import Navbar from './Navbar';
import logo from '../images/Tu-PruTec.svg';
import arrow from '../images/Arrow Down.svg';

const Header = () => {
  return (
    <header>
      
      <div className="nav-area1">

          <div className='logo'>
              <img src={logo}           
                        />
          </div>
          <div className='perfil'>
            <div className='usuario'>
               <span>Nombre Usuario</span>
            </div>

            <div className='flecha'>
            <img src={arrow} 
                    
                    />
            </div>
           
          </div>
    

        </div>
    
        <Navbar />
      
    </header>
    
  );
};

export default Header;
