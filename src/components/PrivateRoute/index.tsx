import { Navigate } from "react-router-dom";
import * as authService from "../../Services/auth-service"
import type { JSX } from "react/jsx-runtime";
type Props = {
  children: JSX.Element;
};
export function PrivateRoute({ children }: Props) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}
