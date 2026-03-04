import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/footer";
import Banner from "./Components/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <Footer></Footer>
    </>
  );
}

export default App;
