import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react';

interface Post {
    title: string;
    description:string;
}
export const CreateForm = () => {
    const [submitError,setSubmitError] = useState("");
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const postsRef = collection(db,"posts")
    const schema = yup.object({
        title: yup.string().required("Please enter a title"),
        description: yup.string().required("please add a description")
    })
    const { register, handleSubmit, formState : {errors}} = useForm<Post>({
        resolver : yupResolver(schema)
    })
    const onPostSubmit = async (data:Post) =>{
    try {
        const result = await addDoc(postsRef,{
            ...data,
            'username': user?.displayName,
            'userId':user?.uid
        })
        if(result.id){
            navigate("/")
        }
    }
    catch(e){
        console.log((e as Error).message);
        setSubmitError((e as Error).message);
    }
    }

    return(
        <div className='form-wrapper'>
    <form className='form'>
        <p className='error'>{submitError}</p>
        <span className='error'>{errors?.title?.message}</span>
        <input placeholder='Title' {...register('title')}/>
        <span className='error'>{errors?.description?.message}</span>
        <textarea placeholder='Description' {...register('description')}/>
        <button onClick={handleSubmit(onPostSubmit)} className='form__btn'>submit</button>
    </form>
    </div>
    )
}