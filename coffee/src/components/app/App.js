import '../app/App.scss';
import Main from "../main/main"
import Catalog from "../catalog/catalog"
import Goods from "../goods/goods"
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
