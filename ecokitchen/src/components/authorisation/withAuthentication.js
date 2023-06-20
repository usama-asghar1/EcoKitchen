// withAuthentication.js
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// We will create a new component called withAuthentication that will be used to protect routes that require authentication.
const withAuthentication = (Component) => {
  return (props) => {
    const { user } = useAuth();

    if (user) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" replace />;
    }
  };
};

export default withAuthentication;
