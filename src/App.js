import './App.css';
import './assets/style/stylesheet.scss'
import Menu from './components/Menu'
import Container from '@mui/material/Container';
import AlbumBanner from './components/AlbumBanner'
import Tabs from './components/Tabs'


function App() {
  return (
    <div className="App">
      <Menu />
      <div className='ContainerOuter'>
        <Container maxWidth="lg" className='MainContainer'>
          <AlbumBanner />
        </Container>
      </div>
      <Container maxWidth="lg" className='Container'>
        <div className='DescriptionSection'>
          <Tabs />
        </div>
      </Container>
    </div>
  );
}

export default App;
