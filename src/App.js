import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Components/Layout/Navbar';
import Categoria from './Components/Layout/Categoria';
import Home from './Components/Pages/Home';
import Carrinho from "./Components/Pages/Carrinho";

function App() {
  return (
    <Router>
			<Navbar />
      <Categoria />
      <Routes>
        <Route path="/" element= {< Home />}/>
        <Route path="/Carrinho" element= {< Carrinho />}/>
      </Routes>
		</Router>
  );
}

export default App;
