import { useState, useMemo, useCallback, useContext } from "react";
import { createContext } from "react";
import PropTypes from  "prop-types";

const AUTH_APP = "AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(AUTH_APP) ?? false);

    const login = useCallback(() => {
        setIsAuthenticated(true)
        localStorage.setItem(AUTH_APP, true)
    }, [])

    const logout = useCallback(() => {
        setIsAuthenticated(false)
        localStorage.removeItem(AUTH_APP)
    }, [])

    // useMemo and useCallback to avoid re-rendering the entire object for each page render
    const value = useMemo(
        () => ({
            isAuthenticated,
            login,
            logout
        }),
        [isAuthenticated, login, logout]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext);
}