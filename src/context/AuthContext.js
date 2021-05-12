import {createContext, useState, useEffect} from "react"

const AuthContext = () => {
    const [authStateContext, setAuthStateContext] = useState({
        username:"",
        email:"",
        isLoggedIn: false,
    })
}

export default AuthContext