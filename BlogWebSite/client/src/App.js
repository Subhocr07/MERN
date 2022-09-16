import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BlogSetup from "./components/BlogSetup.jsx"
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/blogsetup" element={<BlogSetup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
