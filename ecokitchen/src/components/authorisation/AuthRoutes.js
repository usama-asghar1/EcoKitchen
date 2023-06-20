import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// We will create a new component called AuthRoute that will be used to protect routes that require authentication.
// The AuthRoute component will take a component prop and a path prop.
// The component prop will be used to render the component that is passed to the AuthRoute component.
// The path prop will be used to render the component only when the path matches the current URL.
// The AuthRoute component will also take a rest prop that will be used to pass any other props to the component that is passed to the AuthRoute component.
// The AuthRoute component will use the useAuth() hook to get the authentication state.
// If the user is authenticated, the AuthRoute component will render the component that is passed to it.
// If the user is not authenticated, the AuthRoute component will redirect the user to the login page.

function AuthRoute({ props }) {
  // We will use the useAuth() hook to get the authentication state.
  const { user } = useAuth();

  return user ? (
    // If the user is authenticated, the AuthRoute component will render the component that is passed to it.
    <Route {...props} />
  ) : (
    // If the user is not authenticated, the AuthRoute component will redirect the user to the login page.
    <Route {...props} element={<Navigate to="/login" replace />} />
  );
}

export default AuthRoute;
