import React from 'react'
import { useParams } from 'react-router-dom'

export default function ErrorAlert({err}) {
    console.log('error alert');
    const {massage} = useParams()
    return (
        <div className="text-center p-5 m-5" >
            <p className="display-4">
                hoops you have a error :(
                </p>
                <p className="display-4 text-muted">{massage ? massage : err}</p>
        </div>
    )
}
