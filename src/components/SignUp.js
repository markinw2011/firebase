import React, {useState} from 'react'
import {Navigate} from 'react-router-dom' 
import firebaseConfig from '../config'

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = e.target.elements

        try{

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
            setCurrentUser(true)
        }catch(error){
            alert(error)
        }
    }

    if(currentUser){
        return <Navigate to="/DashBoard"/>
    }

    return(
        <div >
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div >
            <label>Email address</label>
            <input type="email" name="email" />
        </div>
        <div >
            <label >Password</label>
            <input type="password" name="password" />
        </div>
        <button type="submit">register</button>
        </form>
        </div>
    )
}

export default SignUp