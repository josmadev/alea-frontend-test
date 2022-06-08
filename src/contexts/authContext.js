import { useState, useMemo, useCallback, useContext } from "react";
import { createContext } from "react";
import PropTypes from  "prop-types";

const AUTH_APP = "AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(AUTH_APP) ?? false);
    const [user, setUser] = useState(null);

    const login = useCallback((email) => {
        localStorage.setItem(AUTH_APP, true)
        setIsAuthenticated(true)
        setUser(email)
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH_APP)
        setIsAuthenticated(false)
    }, [])

    // useMemo and useCallback to avoid re-rendering the entire object for each page render
    const value = useMemo(
        () => ({
            user,
            login,
            logout,
            isAuthenticated
        }),
        [ user, login, logout, isAuthenticated]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext);
}