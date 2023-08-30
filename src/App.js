import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Setting from "./pages/seettings/setting";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
   <Topbar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
         <Route path="/write" element={ <Write/>}></Route>
         <Route path="/contact" element={<Single/>}></Route>
         <Route path="/logout" element={<Setting/>}></Route>

     </Routes>
   
   
   
   
   </Router>
    </>
  );
}

export default App;
