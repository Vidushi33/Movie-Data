import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowNames from './Components/ShowNames';
import Summary from './Components/Summary';
import {Routes,Route, BrowserRouter} from "react-router-dom";

function App() {
  const data ="hello"
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element = {<ShowNames /> } />
            <Route path = "/summary" element = {<Summary/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
