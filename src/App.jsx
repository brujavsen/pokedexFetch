import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./layout/Index"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
              <Route path="/" element={<Home/>}></Route>
              <Route path="favorites" element={<Favorites/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;