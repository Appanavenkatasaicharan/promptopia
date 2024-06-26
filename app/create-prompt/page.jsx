"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import { UserAuth } from "@components/AuthContextProvider";
import axios from "axios";

import Form from "@components/Form";


const CreatePrompt = () =>{
    const router = useRouter()
    const [submitting,setSubmitting] = useState(false);
    const [post,setPost] = useState({
        prompt : '',
        tag : ''
    })
    const {user} = UserAuth();
    const createPrompt = async (e) =>{
        e.preventDefault()
        setSubmitting(true)
        try {
            console.log(user);
            const res = await axios.post('/api/prompt/new',{
                userID : user.uid,
                prompt : post.prompt,
                tag : post.tag
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        } finally{
            setSubmitting(false)
        }
    }
    return (
        <Form
            type="Create"
            post = {post}
            setPost = {setPost}
            submitting = {submitting}
            handleSubmit = {createPrompt}
        />
    )
}

export default CreatePrompt;