import '../app/App.scss';
import Main from "../main/main"
import Footer from "../footer/footer"
import {  BrowserRouter,  Routes,  Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
