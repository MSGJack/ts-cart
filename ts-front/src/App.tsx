import "./App.css";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingcart";
import { Routes, Route } from "react-router-dom";
import { Store } from "./page/store";
import { Home } from "./page/homes";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;

