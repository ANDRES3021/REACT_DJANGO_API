import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export {AuthContext};

export const AuthProvider = ({children}) => {
    
    // localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(null)

    let [user, setUser] = useState(null)

    const history = useNavigate()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
            
          })
        let data =  response.json()
        console.log('data:', data)
        console.log('user:', user)
        if(response.status === 200 ){
            setAuthTokens(data)
            setUser(jwt_decode(data))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push('/')
        }else{
            alert("something ")
        }
        
        
    }

    let contextData ={
        user:user,
        loginUser:loginUser
    }
    
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}