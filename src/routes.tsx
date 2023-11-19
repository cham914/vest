import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/re-login'
import Question from './pages/question'
import Success from './pages/success'
import Additional from './pages/additional'
import Identity from './pages/identity'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/verify' element={<Additional/>}/>
            <Route path='/question' element={<Question/>}/>
            <Route path='/identity' element={<Identity/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}