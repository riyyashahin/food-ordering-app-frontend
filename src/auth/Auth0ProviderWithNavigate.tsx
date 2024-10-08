import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {

    const navigate = useNavigate();
    
    // doing the above will make it easy for us to call the createMyUser endpoint
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if(!domain || !clientId || !redirectUri || !audience){
        throw new Error("unable to initialise auth");
    }

    const onRedirectCallback =(appState?: AppState)=> {
        // console.log("USER",user);
        navigate(appState?.returnTo || "/auth-callback")
        // whenever a user sign in , will get redirect back to here. will initialise a call to backend by calling createUser
    };

    return(
        <Auth0Provider 
            domain = {domain}
            clientId = {clientId}
            authorizationParams={{
                redirect_uri:redirectUri,
                audience,
            }}
            onRedirectCallback={onRedirectCallback}

        >

            {children}
        </Auth0Provider>
    )
  
}

export default Auth0ProviderWithNavigate;