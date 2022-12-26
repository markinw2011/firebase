import React, { useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {AuthContext} from './Auth'
import firebaseConfig from '../config'


const DashBoard = () => {
    const {currentUser} = useContext(AuthContext)

    if (!currentUser){
        return <Navigate to="/" />
    }

    return(
        <div>
            <h1>เข้ามาแล้วกดsign out</h1>
            <button onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default DashBoard