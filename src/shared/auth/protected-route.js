
import {  useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : "not allowd";
};
export default PrivateRoute;
