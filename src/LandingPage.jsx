import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./route/";


export const LandingPage = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

