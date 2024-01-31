import { auth$ as auth } from "@crafted-solutions/common/auth";
import { useEffect, useState } from "react";

interface AuthData {
  error: boolean;
  userId: string;
  username: string;
  pending: boolean;
  sessionToken: string;
}

export default function AdminAppAnalytics() {
  const [authData, setAuthData] = useState<AuthData>({} as AuthData);

  useEffect(() => {
    const subscription = auth.subscribe((data) => {
      setAuthData(data);
      console.log("SuperbowlSquares::AdminAppAnalytics: auth data", data);
    });
    return () => {
      console.log("SuperbowlSquares::AdminAppAnalytics: unsubscribing from auth");
      setAuthData({} as AuthData);
      subscription.unsubscribe();
    };
  }, []);
  
  if(authData.sessionToken === null) {
    return (
      <div style={{ border: '1px solid black' }}>
        <h2>Superbowl Squares Admin Analytics Widget</h2>
        <div>
          You are not logged in. Please login to see this widget.
        </div>
      </div>
    );
  };

  return (

    <div style={{ border: '1px solid black' }}>
      <h2>Superbowl Squares Admin Analytics Widget</h2>
      <div>
        This component is also coming from the main Superbowl Squares app, but this one requires a logged in
        user to see it.
      </div>
    </div>
  );
};