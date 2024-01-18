
import './App.css';
import './sass/style.scss';
import NavbarComponent from './shared/design/navBarComponent/NavbarComponent.jsx';
import { Grid } from '@mui/material';
import logo from './shared/assets/img/il-tramonto-logo.png';
import OverlayComponent from './shared/design/overlayComponent/OverlayComponent.jsx';
import CarouselComponent from './shared/design/carouselComponent/CarouselComponent.jsx';
import ImageListComponent from './shared/design/imageListComponent/ImageListComponent.jsx';
import TheHomeComponent from './shared/design/theHomeComponent/TheHomeComponent.jsx';
import Description from './shared/design/description/Description.jsx';
function App() {
  return (
    <>
    <OverlayComponent texth1='IL TRAMONTO' icon='plane'/>
    <NavbarComponent img={logo} text0={'IL TRAMONTO'} text1={'Home'} text2={"Chi Siamo"} text3={"La casa"} text4={"Contatti"}/>
    <CarouselComponent icon='arrow-left' icon2='arrow-right'/>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Description
        text={"CHI SIAMO"}
        text1={"Antico casale finemente ristrutturato all’interno di un borgo antico del XVI secolo nella campagna umbra di Collazzone in provincia di Perugia. La sua posizione panoramica affaccia sulla Media Valle del Tevere e la centralità della zona permette di effettuare gite verso le città di Todi, Perugia, Orvieto, Spoleto, Gubbio, Assisi, Spello e Bevagna ed al particolare Teatro della Concordia a Monte Castello di Vibio il teatro attivo più piccolo del mondo."}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageListComponent />
      </Grid>
      <Grid item xs={12} md={6}>
        <TheHomeComponent/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Description 
        text={"LO SPAZIO"}
        text1={"All’esterno tre livelli di giardino, dove al primo si trova una terrazza panoramica con unforno a legna e barbecue ed una area pranzo, al secondo la piscina restaurata sul modello di antico lavatoio, ed al terzo una zona polivalente. Un ampio portico al piano terra ed un terrazzo al primo piano completano la possibilità di godere della vista di tutta la zona circostante. All’interno al piano terra si trova il salone con un angolo bar e camino, la zona pranzo, la cucina ed il bagno, mentre al primo piano ci sono quattro camere matrimoniali (una ha possibilità di due letti singoli all’occorrenza) uno studio con connessione WiFi ed altrobagno.Posto ideale per rilassarsi con tutta la famiglia/amici.Tutti gli spazi sia esterni che interni sono a disposizione degli ospiti. Possibilità di prendere lezioni di equitazione presso un maneggio in zona ed anche di assaggiare i vini locali per la presenza di due cantine (a pagamento e su richiesta almomento delle prenotazione) Personal Trainer per momenti di ginnastica o relax sia sul prato che in piscina, possibilità di trekking nelle zone circostanti (a pagamento e su richiesta al momento della prenotazione) Nel caso di prenotazioni per i mesi invernali le spese di riscaldamento si pagano a fine soggiorno."}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
