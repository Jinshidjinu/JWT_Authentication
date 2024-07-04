import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem('user_data');
        if (storedData) {
            try {
                const { userToken, user } = JSON.parse(storedData);
                setToken(userToken);
                setUserData(user);
                setIsAuthenticated(true);
            } catch (e) {
                console.error('Failed to parse user_data from localStorage:', e);
            }
        }
    }, []);

    const login = (newToken, newData) => {
        localStorage.setItem(
            'user_data',
            JSON.stringify({ userToken: newToken, user: newData })
        );
        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ token, isAuthenticated, login, logout, userData }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useAuth = () => useContext(AuthContext);
