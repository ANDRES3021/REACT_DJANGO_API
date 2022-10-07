import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home.js"
import { LoginPage } from "./pages/Home/LoginPage.js";
import { Getjoke } from "./pages/Getjoke/Getjoke.js";
import { Header } from './components/Header.js';
import { PrivateRoute } from './utils/PrivateRouts.js'
import { AuthProvider } from './context/AuthContext.js'

// const Public = () => <div>public</div>;


function App() {
  return (
      <div className="App">
        <AuthProvider>
          <switch>
          <Header/>
          
            <Routes>
                
                <Route path="/" element={<PrivateRoute/>}>
                <Route exact path='/' element={<Home/>}/>
                </Route>
                <Route path="/loginPage" element={<LoginPage />} exact />
                <Route path="/getjoke" element={<Getjoke />} exact />
                
            </Routes>
            </switch>
        </AuthProvider> 
      </div>
  );
}
export default App;