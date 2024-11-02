
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { CartProvider } from "use-shopping-cart";

const Liste = lazy(() => import('./Liste'));

import ListeCateg from './ListeCategories';
import Listarticles from './components/articles/Listarticles';
import Listcategories from './components/categories/Listcategories';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';
import Listscategories from './components/scategories/Listscategories';
import Insertscategorie from './components/scategories/Insertscategorie';
import Editscategorie from './components/scategories/Editscategorie';
import Viewscategorie from './components/scategories/Viewscategorie';

import Listarticlescard from "./components/client/Listarticlescard";
import ArticlesListUSP from "./components/articles/ArticlesListUSP";
import Login from './components/authentification/login'
import Dashboard from './components/admin/dashboard';
import Logout from './components/authentification/logout'
import Register from './components/client/authentification/register'
import ProtectedRoutes from "./ProtectedRoute";

import Cart from './components/client/shopping/Cart'

import Menu from './components/Menu';

import ListArticlea from "./components/article/ListArticle";
import Insertarticlea from './components/article/Insertarticle';
import Editarticlea from './components/article/Editarticle';
import Viewarticlea from './components/article/Viewarticle';

import ListCards from './components/clientSide/ListCards';

function App() {

  return (
    <>

<Suspense fallback={<div>Loading...</div>}>
    <CartProvider>
      <Router>
        <Menu/>

<Routes>

<Route path='/' element={<ListCards/>}/>

<Route path="/articlesa" element={<ListArticlea/>}/>


<Route path="/articlesa/add" element={<Insertarticlea/>}/>
<Route path="/articlea/edit/:id" element={<Editarticlea/>}/>
<Route path="/articlea/view/:id" element={<Viewarticlea/>}/>


<Route path="/liste" element={<Liste/>}/>
<Route path="/listeCateg" element={<ListeCateg/>}/>
<Route path="/articles"  element={<Listarticles/>}/>
<Route path="/articlescard"  element={<Listarticlescard/>}/>
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
<Route element={<ProtectedRoutes/>}>
<Route path="/dashboard" element={<Dashboard/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>

</Routes>

</Router>
</CartProvider>
</Suspense>
    </>
  )
}

export default App
