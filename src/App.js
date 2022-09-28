import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import PersonalDetails from "./view/components/PersonalDetails/PersonalDetails";

function App() {
  return (
    <BrowserRouter>
    <PersonalDetails/>
    </BrowserRouter>
  );
}

export default App;
