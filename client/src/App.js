import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Cart from "./components/Cart/Cart";
import TemplateProvider from "./template/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
