import './App.css';
import Header from "./component/Header"
import Footer from './component/Footer'
import Home from './component/Home'
import AllCountries from'./component/AllCountries'
import MyRecords from './component/MyRecords'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Header />
       <Routes>
      
        <Route 
          exact path="/"
          element={  <Home />}
        >
        </Route>
        
        <Route 
          exact path="/AllCountries"
          element={ <AllCountries />}
        >
        </Route>
        
         <Route 
          exact path="/MyRecords"
          element={ <MyRecords />}
        >
        </Route> 
        
        </Routes>
        <Footer /> 
        </Router>
        </>
  );
}

export default App;