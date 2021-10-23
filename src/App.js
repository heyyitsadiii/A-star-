import logo from './logo.svg';
import './App.css';
import Header from "./My Components/Header";
import { About } from "./My Components/About";
import { Footer } from "./My Components/Footer";

function App() {
  return (
    <>
      <Header title="MyToDosList" searchBar= {false}/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;