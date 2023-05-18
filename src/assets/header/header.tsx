import logo from './logo_ds/LOGO.png';
import './header.css';

function HeaderGeral() {
    return (
        <div id="div-header">
            <img id="logo-header" src={logo} alt="maguinho" />
            <div id='div-header-dois'>
            <a href='#'>INICÍO</a>
            <a href='#'>SOBRE NÓS</a>
            <a href='#'>SOBRE CPUS</a>
            </div>
           
            
        </div>

    );
  }
export default HeaderGeral;