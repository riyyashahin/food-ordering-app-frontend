import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);
  // useRef - stores a state value , whenever the state value changes, it does not trigger the component to rerender

  useEffect(() => {
    if(user?.sub && user?.email && !hasCreatedUser.current) {
        createUser({ auth0Id: user.sub, email: user.email });
        hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
}

export default AuthCallbackPage;

// made a different file cause it's anyway outside the provider , its not wrapped in Auth0Provider in Auth0ProviderwithNavigate
// in main.tsx file we have our Auth0Provider . so we have it in our actual app
// the children inside the provider is AppRoutes
// inside the AppRoutes , there are bunch of routes and bunch of components including our AuthCallbackPage