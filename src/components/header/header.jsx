import header from '../../img/header.jpg';
import logo from '../../img/logo.png';
import Cutheader from '../../img/cut-header.svg';
import '../header/header.css';


export const Header = () => {

  return (
    <>
    <div className="container-header">
      <img className='img-header' src={header} alt='pisina-header' />
      <div className='header-components'>
        <nav className='logo-and-menu'>
          <img className='img-logo' src={logo} alt='logo' />
          <ul className='menu'>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Contactenos</a></li>
            <li><a href="">Galeria</a></li>
          </ul>
        </nav>
        <div className='text-header'>
          <h1 className='title-header'>AQUAVISIONS PISCINAS</h1>
          <h4 className='sub-title-header'>Donde Tus Sueños Se Sumergen En La Realidad</h4>
          <p className='paragraph-header'>AquaVisions Piscinas es una empresa especializada en brindar soluciones integrales para la creación, remodelación y diseño personalizado de piscinas.</p>
          <button>Obtener más información</button>
        </div>
      </div>
    </div>
    </>
  );
};
