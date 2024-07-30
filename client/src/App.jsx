import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from './pages/SignIn/SingIn'
import Home from './pages/HomePage/Home'
import { useDispatch, useSelector } from 'react-redux'
import Setting from './pages/Settings/Setting'
import { useEffect } from "react"
import { setUserLogedIn } from "./redux/Reducer/userSlice"
import Dashbord from "./pages/Dashbord/Dashbord"
import Workspace from "./pages/Workspace/Workspace"
import Themes from "./pages/Themes/Themes"
import Response from "./pages/Response/Response"

import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoutes';


function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  console.log(data);

  useEffect(() => {
    try {
      let userData = localStorage.getItem('userData');
      console.log(userData);
      if (userData) {
        userData = JSON.parse(userData); // Convert into object --> string to object
        console.log(userData);
        dispatch(setUserLogedIn(userData));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/dashbord" element={
          <ProtectedRoute>
            <Dashbord />
          </ProtectedRoute>
        } />
        <Route path="/setting" element={
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        } />
        <Route path="/workspace" element={
          <ProtectedRoute>
            <Workspace />
          </ProtectedRoute>
        } />
        <Route path="/theme" element={
          <ProtectedRoute>
            <Themes />
          </ProtectedRoute>
        } />
        <Route path="/response" element={
          <ProtectedRoute>
            <Response />
          </ProtectedRoute>
        } />

        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;

