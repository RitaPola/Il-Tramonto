
import './App.css';
import './sass/style.scss';
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Container } from '@mui/material';
import logo from './shared/assets/img/il-tramonto-logo.png';
import OverlayComponent from './shared/design/overlayComponent/OverlayComponent.jsx';
import CarouselComponent from './shared/design/carouselComponent/CarouselComponent.jsx';

function App() {
  return (
    <>
    <OverlayComponent texth1='IL TRAMONTO' texth2='PRESS CLICK'/>
    <NavbarComponent img={logo} text0={'IL TRAMONTO'} text1={'Home'} text2={"La casa"} text3={"Contatti"}/>
    <CarouselComponent icon='arrow-left' icon2='arrow-right'/>
    
    <Container maxWidth="sm">
      
    </Container>
    </>
  );
}

export default App;
