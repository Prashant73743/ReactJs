import React from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index' 
import appwriteService from '..//../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Postform({post}) {

    const {register, handleSubmit, watch, setValue,
        control, getValue
    } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active', 
        },
    })

    const navigate = useNavigate()
    const useData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if(post) {
            data.image[] ? app
        }
    }

  return (
    <div>Postform</div>
  )
}

export default Postform