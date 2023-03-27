import Navbar from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, Routes, Route} from "react-router-dom"
import Home from "./components/home/index"
import ItemListContainer from "./components/itemListContainer"
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/products" element={<ItemListContainer/>}></Route>
      </Routes>
    </div>
  )
}

export default App