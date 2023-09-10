import { BrowserRouter, Routes, Route} from "react-router-dom";
import Ejemplo from "./paginas/ejemplo.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Ejemplo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
