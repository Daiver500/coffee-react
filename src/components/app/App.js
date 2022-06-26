import '../../styles/style.scss';
import Main from "../pages/main"
import Catalog from "../pages/catalog"
import Goods from "../pages/goods"
import {  BrowserRouter,  Routes,  Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/goods" element={<Goods/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
