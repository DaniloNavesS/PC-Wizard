import Carrosel from '../header/carrosel';
import HeaderGeral from '../header/header';
import './tela1.css';
function Tela1() {
    return (
        <div>
            <HeaderGeral/>
            <div className='centralizar'>
            <Carrosel/>
            </div>
            
        </div>

    );
  }
export default Tela1;