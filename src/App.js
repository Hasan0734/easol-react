import './App.css';
import Clients from './components/Clients/Clients';
import Dopechat from './components/Dopechat/Dopechat';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowWorks from './components/HowWorks/HowWorks';
import MobileApp from './components/MobileApp/MobileApp';
import Services from './components/Services/Services';
function App() {
  return (

    <div>
      <Header/>
      <Dopechat/>
      <Services/>
      <HowWorks/>
      <Clients/>
      <MobileApp/>
      <Footer/>
    </div>
  );
}

export default App;
