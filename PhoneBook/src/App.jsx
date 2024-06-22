import { Route, Routes } from "react-router-dom"
import { Home } from "./common/page/Home/Home"
import { Login } from "./common/page/Login/Login"
import { Register } from "./common/page/Register/Register"
import { PhoneBook } from "./common/page/PhoneBook/PhoneBook"
import { Layout } from "./common/components/Layout/Layout"


function App() {
 

  return (
    <Routes>
     <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='register' element={<Register/>}/>
     <Route path='phonebook' element={<PhoneBook/>}/>

     </Route>
    </Routes>
  )
}

export default App
