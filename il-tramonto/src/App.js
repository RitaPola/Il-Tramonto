
import './App.css';
import './sass/style.scss'
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Container } from '@mui/material';
import logo from '../../il-tramonto/src/shared/assets/navbarAssets/il-tramonto-logo.png'
import OverlayComponent from './shared/design/overlayComponent/OverlayComponent.jsx';

function App() {
  return (
    <>
    <OverlayComponent texth1='IL TRAMONTO' texth2='PRESS CLICK'/>
    <NavbarComponent img={logo} text0={'IL TRAMONTO'} text1={'Home'} text2={"Chi Siamo"} text3={"Cosa Facciamo"}/>
    <Container maxWidth="sm">
      
    </Container>
    </>
  );
}

export default App;
