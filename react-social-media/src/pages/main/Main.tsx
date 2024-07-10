import {getDocs, collection} from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { Post } from './Post';
import { useEffect, useState } from 'react';
export interface IPost {
    id: string;
    username: string;
    userId: string;
    title:string;
    description:string;
}
export const Main = () =>{
    const [posts, setPosts] = useState<IPost[]|null>(null);
    const postsRef = collection(db,"posts");

    const getPosts = async() => {
        try{
        const data =await getDocs(postsRef);
        setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})) as IPost[]);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{getPosts()},[]);

    return (
        <>
            {posts?.map((post)=><Post post={post}/>)}
        </>
    )
}