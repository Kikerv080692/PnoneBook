import { Route, Routes } from "react-router-dom";
import { Home } from "./common/page/Home/Home";
import { Login } from "./common/page/Login/Login";
import { Register } from "./common/page/Register/Register";
import { PhoneBook } from "./common/page/PhoneBook/PhoneBook";
import { Layout } from "./common/components/Layout/Layout";
import { PrivateRoute } from "./common/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./common/RestrictedRoute/RestrictedRoute";
import { useDispatch } from "react-redux";
import { useAuth } from "./common/hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Page is refreshing</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="phonebook"
          element={<PrivateRoute redirectTo="/" component={<PhoneBook />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
