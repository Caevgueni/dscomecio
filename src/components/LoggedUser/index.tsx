import { Link } from "react-router-dom";
import * as authService from "../../Services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";

export default function LoggedUser() {

     const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

     function handleLogoutClic(){

        authService.logout();
        setContextTokenPayload(undefined);
     }
  return ( 
    
  contextTokenPayload && authService.isAuthenticated()
  ? (
    <div className="dsc-logged-user">
      <p>{contextTokenPayload?.user_name}</p>
      <span onClick={handleLogoutClic}>Sair</span>
    </div>
  ) 
  : (
    <div>
      <Link to={"/login"}>Entrar</Link>
    </div>
  )
  );
}
