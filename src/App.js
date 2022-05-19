
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/about';
import CarouselContainer from './components/carouselcontainer';
import ContactForm from './components/contact';
import Footer from './components/footer'
import Header from './components/header';
import Profiles from './components/profiles';
import Team from './components/team';

function App() {
  return (
    <div className="App">
       
      <Header/> 
      <CarouselContainer/>
      <About/>
      <Team/>
      <Profiles/>
      <ContactForm/>
      <Footer/>
       
    </div>
  );
}

export default App;
