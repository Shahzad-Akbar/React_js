import React, { useState, useEffect } from 'react'
import AppwriteService from '../appwrite/configs'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'

function EditPost() {
    const [post, setPosts] = useState([])
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(()=>{ 
        if(slug){
            AppwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className='py-8'>
           <Container>
               <PostForm/>
           </Container>
        </div>
    ) : null
}

export default EditPost