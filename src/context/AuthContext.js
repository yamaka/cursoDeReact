import {createContext, useState, useEffect} from "react"

export default ({children}) => {

    const [authStateContext, setAuthStateContext] = useState({
        username:"",
        email:"",
        isLoggedIn: false,
        id: null
    })

    useEffect(() => {
        const userStorage = JSON.parse(localStorage.getItem("USER"));
        if(userStorage){ 
            setAuthStateContext(userStorage);
        }
    }, [])

    const resetAuth = () =>{
        setAuthStateContext({
          username: "",
          email: "",
          isLoggedIn: false,
          id: null,
        });
    }

    const logout= () =>{
        localStorage.removeItem("USER");
        resetAuth();

    }

    
    return (
      <AuthContext.Provider
        value={[authStateContext, setAuthStateContext, logout]}
      >
        {children}
      </AuthContext.Provider>
    );
}

export const AuthContext = createContext();