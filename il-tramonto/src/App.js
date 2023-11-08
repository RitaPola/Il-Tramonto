
import './App.css';
import './sass/style.scss';
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Grid } from '@mui/material';
import logo from './shared/assets/img/il-tramonto-logo.png';
import OverlayComponent from './shared/design/overlayComponent/OverlayComponent.jsx';
import CarouselComponent from './shared/design/carouselComponent/CarouselComponent.jsx';
import ChiSiamoComponent from './shared/design/chiSiamoComponent/ChiSiamoComponent.jsx';
import ImageListComponent from './shared/design/imageListComponent/ImageListComponent.jsx';

function App() {
  
  return (
    <>
    <OverlayComponent texth1='IL TRAMONTO'/>
    <NavbarComponent img={logo} text0={'IL TRAMONTO'} text1={'Home'} text2={"Chi Siamo"} text3={"La casa"} text4={"Contatti"}/>
    <CarouselComponent icon='arrow-left' icon2='arrow-right'/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ChiSiamoComponent
          text='CHI SIAMO'
          text1='Antico casale finemente ristrutturato all’interno di un borgo antico del XVI secolo nella
          campagna umbra di Collazzone in provincia di Perugia. La sua posizione panoramica
          affaccia sulla Media Valle del Tevere e la centralità della zona permette di effettuare gite
          verso le città di Todi, Perugia, Orvieto, Spoleto, Gubbio, Assisi, Spello e Bevagna ed al
          particolare Teatro della Concordia a Monte Castello di Vibio il teatro attivo più piccolo del
          mondo.'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageListComponent />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
