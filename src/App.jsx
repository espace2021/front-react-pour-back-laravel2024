import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Listarticles from './components/articles/Listarticles';
import Insertarticle from './components/articles/Insertarticle';
import Editarticle from './components/articles/Editarticle';
import Viewarticle from './components/articles/Viewarticle';
import Listcategories from './components/categories/Listcategories';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';
import Listscategories from './components/scategories/Listscategories';
import Insertscategorie from './components/scategories/Insertscategorie';
import Editscategorie from './components/scategories/Editscategorie';
import Viewscategorie from './components/scategories/Viewscategorie';
import Menu from './components/Menu';
import Listarticlescard from "./components/client/Listarticlescard";
import ArticlesListUSP from "./components/articles/ArticlesListUSP";
import Login from './components/authentification/login'
import Dashboard from './components/admin/dashboard';
import Logout from './components/authentification/logout'
import Register from './components/client/authentification/register'

function App() {
  

  return (
    <>
      <Router>
        <Menu/>
<Routes>
<Route path="/articles"  element={<Listarticles/>}/>
<Route path="/articlescard"  element={<Listarticlescard/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/articlesListUSP" element={<ArticlesListUSP/>}/>
<Route path="/categories" exact element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategorie/>}/>
<Route path="/scategories" element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</Router>

    </>
  )
}

export default App
