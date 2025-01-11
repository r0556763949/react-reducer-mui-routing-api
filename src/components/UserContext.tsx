import React, { createContext, useReducer, ReactNode } from 'react';
import { userReducer, initialState } from './UserReducer';


interface UserContextType {//סוג
    state: typeof initialState;
    dispatch: React.Dispatch<any>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);//יצירת context

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};