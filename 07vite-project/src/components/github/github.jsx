import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(props) {
    //first method
    // const [data,setdata]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shahzad-Akbar')
    //     .then(response=>response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])
    //second method
    const data = useLoaderData()

    return (
        <>
            <div className='text-center text-3xl text-white bg-gray-400 m-4 p-4'>
                <div className='text-2xl text-orange-950'>
                    UserName: {data.name}
                    <br />
                    Git-hub Followers :{data.followers}
                    <br />
                    Git-hub Following :{data.following}


                </div>

                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>

        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shahzad-Akbar')
    return response.json()
}
