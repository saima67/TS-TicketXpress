import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

export default App;
