import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { app } from "./firebase/firebaseConfig";
import { UserProvider } from './context/UserContext'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import WishList from './views/WishList'

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>
      </UserProvider>
    </HashRouter>
  )
}

export default App
