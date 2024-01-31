import { BrowserRouter, Link } from "react-router-dom";
import { auth$ as auth, logout } from "@crafted-solutions/common/auth";
import { useEffect, useState } from "react";
import { AuthData } from "./types";

export default function Root(props) {
  const [authData, setAuthData] = useState<AuthData>({} as AuthData);

  useEffect(() => {
    const subscription = auth.subscribe((data) => {
      setAuthData(data);
      console.log("Navbar::Root: auth data", data);      
    });
    return () => {
      console.log("Navbar::Root: unsubscribing from auth");
      setAuthData({} as AuthData);
      subscription.unsubscribe();
    };
  }, []);
  
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column" 
    }}>
      <section>{props.name}</section>
      <div>
        <BrowserRouter>
          <nav>
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li style={{ marginRight: "1rem" }}><Link to="/">Home</Link></li>
              <li style={{ marginRight: "1rem" }}><Link to="/squares">Squares</Link></li>
              <li style={{ marginRight: "1rem" }}><Link to="/dashboard">Dashboard</Link></li>
              {authData.sessionToken ? 
                <button onClick={() => logout()}>Logout</button> : 
                <li style={{ marginRight: "1rem" }}><Link to="/login">Login</Link></li>
              }
            </ul>
          </nav>
        </BrowserRouter>
      </div>
    </div>
  );
}
