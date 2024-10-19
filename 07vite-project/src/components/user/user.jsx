import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {
    const {Userid}= useParams()

    return (
        <>
            <div>User: {Userid }</div>
        </>
    )
}
