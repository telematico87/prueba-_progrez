
import img_isotopico from '../images/Isotipo.svg';
import img_private from '../images/Private-CEO.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer" >


        <div className="isotopico"><img src={img_isotopico} />  </div>
        <div className="private">  <span>©   2023 Progrez All rights reserved</span></div>
        <div className="isotopico"> <img src={img_isotopico} /></div>

    </div>
  </footer> 
    
  );
};

export default Footer;
