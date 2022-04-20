import Tarjetas from "./Components/Tarjetas/Tarjetas";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Tarjetas />
      <Footer/>  
    </div>
  );
}

export default App;
