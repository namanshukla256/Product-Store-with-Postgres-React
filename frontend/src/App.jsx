import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App () {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;