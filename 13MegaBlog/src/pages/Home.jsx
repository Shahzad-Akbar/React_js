import React, { useState, useEffect } from 'react'
import AppwriteService from '../appwrite/configs'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        AppwriteService.getPosts().then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <div className='flex flex-wrap '>
                        <div className='py-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read Post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    //...post is used for spreading all the post instead of post={post} which display only single post
    return (
        <div className='w-full py-8'>
            <Container>
                {posts.map((post)=>(
                    <div key={post.$id} className='py-2 w-1/4 '>
                        <PostCard {...post} />                                     
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Home