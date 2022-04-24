
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/serviceDetails/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
