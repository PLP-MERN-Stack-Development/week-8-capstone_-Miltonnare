import {createContext,useState,useEffect} from 'react';

export const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [user,setUser]=useState(()=>{
        const data=localStorage.getItem('user');
        return data?JSON.parse(data):null;
    });

    const login=(userData)=>{
        localStorage.setItem('user',JSON.stringify(userData));

        setUser(userData);
    };

    const logout=()=>{
        localStorage.removeItem('user');
        setUser(null)
    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;