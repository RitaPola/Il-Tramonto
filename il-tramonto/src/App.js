
import './App.css';
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Container } from '@mui/material';
import logo from '../../il-tramonto/src/shared/assets/navbarAssets/logo.png'

function App() {
  return (
    <>
    <NavbarComponent img={logo} text1={'Home'} text2={"Chi Siamo"} text3={"Cosa Facciamo"}/>
    <Container maxWidth="sm">
      
    </Container>
    </>
  );
}

export default App;
