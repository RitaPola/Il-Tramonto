
import './App.css';
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Container } from '@mui/material';


function App() {
  return (
    <>
    <Container maxWidth="sm">
      <NavbarComponent li1={'home'} li2={'Chi Siamo'} li3={'Cosa facciamo'}/>
    </Container>
    </>
  );
}

export default App;
