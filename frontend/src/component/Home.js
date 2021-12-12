import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'

export default function Home() {
    const cookies = new Cookies();
    const Navigate = useNavigate()

    useEffect(() => {
        if(!cookies.get("_id")){
         Navigate("/")
        }
       }, [])

    return (
        <div>
            <h1>Bienvenido</h1>
        </div>
    )
}
