import { IPost} from "./Main";
import {query, getDocs, addDoc, collection,where, doc, deleteDoc } from 'firebase/firestore';
import {db} from '../../config/firebase'
import { useEffect, useState } from "react";
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../../config/firebase";

interface PropTypes {
    post:IPost;
}

interface Like {
    id:string;
    userId:string;
    postId:string;
}
export const Post = (props:PropTypes) => {
    const[likes,setLikes] = useState<Like[]|null>(null);
    const[hasUserLiked,setHasUserLiked] = useState(false);
    const[likeCount,setLikeCount] = useState(0);
    const [user] = useAuthState(auth);

    const likesRef = collection(db,"likes");
    const likeQuery = query(likesRef, where("postId","==",props.post.id))

    const checkUserLiked = (likes:Like[]) => {
        var result = likes?.find(like => like.userId==user?.uid)
        if(result?.id){
            setHasUserLiked(true);
        }
    }
    const getLikes = async() => {
        const data = await getDocs(likeQuery);
        const likeList = data.docs.map(doc=> ({
            ...doc.data(),
            id: doc.id
        })) as Like[];
        checkUserLiked(likeList);
        setLikes(likeList);
        setLikeCount(likeList.length)
    }
    const updateLike = async() =>{
        if(!hasUserLiked && user){
            await addDoc(likesRef,{userId:user?.uid, postId:props.post.id})
            setHasUserLiked(true)
            setLikeCount(likeCount+1);
        }
        else if(user){
            await deleteLike();
        }
    }

    const deleteLike = async() =>{
        const likeQuery = query(likesRef,where("userId","==",user?.uid),where("postId","==",props.post.id));
        const likeData = await getDocs(likeQuery);
        const likeToDelete = await doc(db,"likes",likeData.docs[0].id)
        console.log(likeToDelete)
        await deleteDoc(likeToDelete);
        setHasUserLiked(false);
        setLikeCount(likeCount-1);
    }
    useEffect(()=>{
        getLikes();
    },[])
    return(<div className="post">
        <h1 className="post__title">{props.post.title}</h1>
        <p className="post__description">{props.post.description}</p>
        <div className="post__footer">
            <span className="post__username">{props.post.username}</span>
            <div className="post__like-wrspper">
            <button className="post__like" onClick={updateLike}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 1792 1792" width="24" className={`post__like-icon ${hasUserLiked && 'post__like-icon--fill'}`}><path d="M320 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zm160-512v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zm1184 0q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-129q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 .5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z"/></svg>
            </button>
            <span className="post__like-count">{likeCount}</span>
            </div>
        </div>
    </div>);
}