import 'bootstrap/dist/css/bootstrap.min.css';
import '../StylesHomepage.css';
import NewHeader from '../component/NewHeader';
import Home from '../component/Home';
import Discover from '../component/Discover'
import Aboutus from '../component/Aboutus';
import Contactus from '../component/Contactus'
import NewFooter from '../component/NewFooter';

function App() {
  return (
    <>
      <NewHeader />
      <Home />
      <Discover />
      <Aboutus />
      <Contactus />
      <NewFooter />
    </>
  );
}

export default App;