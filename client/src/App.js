import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
