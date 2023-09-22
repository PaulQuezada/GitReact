import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./paginas/login.jsx";
import Signin from "./paginas/signin.jsx";
import Dashboard from "./paginas/dashboard.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Principal from "./paginas/principal.jsx";
import Getpremium from "./paginas/getpremium.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route path="signin" element={<Signin/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="premium" element={<Getpremium/>}/>
          <Route index element={<Principal/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
