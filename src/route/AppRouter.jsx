import { Route, Routes } from "react-router-dom";

import { Login, Signup } from "../auth/";
import { Netflix } from "../netflix/";



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/" element={ <Netflix /> } />
    </Routes>
  )
}
