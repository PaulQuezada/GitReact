import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./paginas/login.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Principal from "./paginas/principal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>
          <Route index element={<Principal/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
