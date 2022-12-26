import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const {email, password} = e.target.elements

        try{
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
        }catch(error){
            alert(error)
        }
    }

    const {currentUser} = useContext(AuthContext)
    if(currentUser){
        return <Navigate to ="/DashBoard" />
    }


    return (
        <div>
            <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Email address</label>
                <input type="email" name="email"    />
                <div id="email" ></div>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"   />
            </div>
            <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
        )
}

export default Login