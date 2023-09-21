import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./paginas/login.jsx";
import Signin from "./paginas/signin.jsx";
import Dashboard from "./paginas/dashboard.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Principal from "./paginas/principal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route path="signin" element={<Signin/>}/>
          <Route path="login" element={<Login/>}/>
          <Route index element={<Principal/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
