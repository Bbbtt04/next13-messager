'use client'

import { FullMessageType } from '@/app/types'
import { Message } from '@prisma/client'
import { useState } from 'react'
import MessageBox from './MessageBox'

interface BodyProps {
  initialMessages: FullMessageType[]
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages)

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          data={message}
          isLast={i === messages.length - 1}
          key={message.id}
        ></MessageBox>
      ))}
    </div>
  )
}

export default Body
