import '../app/App.scss';
import Main from "../main/main"
import Catalog from "../catalog/catalog"
import {  BrowserRouter,  Routes,  Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
