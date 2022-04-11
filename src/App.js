import DeezerInfo from "./Components/DezzerInfo/DeezerInfo";
import Tarjetas from "./Components/Tarjetas/Tarjetas";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
          <Header/>
      <main>
          <section class="card-container">
            <Tarjetas />
            
          </section>
        </main>
          <Footer/>  
      </div>
  );
}

export default App;
