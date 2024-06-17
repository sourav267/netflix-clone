import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route exact path="/browse" element={<Browse/>} />
        <Route exact path="/signin" element={<SignIn/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path={ROUTES.HOME} element={<Home/>} />
      </Routes>

    </Router>
  </>)
}

export default App
