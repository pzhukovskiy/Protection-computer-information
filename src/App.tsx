import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Lab_1 from "./components/Lab_1";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Mainpage/>}/>  
            <Route path="Lab_1" element={<Lab_1/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;