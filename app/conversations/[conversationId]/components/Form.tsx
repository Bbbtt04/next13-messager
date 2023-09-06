'use client'

import useConversation from '@/app/hooks/useConversation'
import axios from 'axios'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { HiPhoto } from 'react-icons/hi2'
import MessageInput from './MessageInput'

const Form = () => {
  const { conversationId } = useConversation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
      ...data,
      conversationId,
    })
  }

  return (
    <div
      className="
        px-4
        py-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
      "
    >
      <HiPhoto size={30} className="text-sky-500"></HiPhoto>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          placeholder="给他发个信息吧"
        ></MessageInput>
      </form>
    </div>
  )
}

export default Form
