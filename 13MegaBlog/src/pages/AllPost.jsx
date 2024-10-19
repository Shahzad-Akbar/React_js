import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/index'
import AppwriteService from "../appwrite/configs";

function AllPost() {
    // const [posts, setPosts]= useState([])
    // useEffect(()=> {},[])
    // AppwriteService.getPosts([]).then((posts)=>{
    //     if(posts){
    //         setPosts(posts.documents)
    //     }
    // })    
    const [posts, setPosts] = useState([]);

useEffect(() => {
    AppwriteService.getPosts([]).then((result) => {
        if (result) {
            setPosts(result.documents);
        }
    });
}, []);


    return (         
        <div className='w-ful py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='py-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>                
                
            </Container>

        </div>
    )
}

export default AllPost