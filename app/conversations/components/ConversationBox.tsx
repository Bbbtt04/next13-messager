'use client'

import Avatar from '@/app/components/Avatar'
import useOtherUser from '@/app/hooks/useOtherUser'
import { FullConversationType } from '@/app/types'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

interface ConversationBoxProps {
  data: FullConversationType
  selected?: boolean
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const router = useRouter()
  const otherUser = useOtherUser(data)
  const session = useSession()

  const handleClick = () => {
    router.push(`/conversations/${data.id}`)
  }

  const lastMessage = useMemo(() => {
    const messages = data.messages || []

    return messages[messages.length - 1]
  }, [data.messages])

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) return '对方发送了图片'

    if (lastMessage?.body) return lastMessage.body

    return '你好啊！第一次跟你聊天'
  }, [lastMessage])

  const userEmail = useMemo(
    () => session.data?.user?.email,
    [session.data?.user?.email]
  )

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false

    const seenArray = lastMessage.seen || []

    return seenArray.filter((user) => user.email === userEmail).length !== 0
  }, [lastMessage, userEmail])

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `
        flex
        items-center
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        p-3
        mb-2`,
        selected && `bg-neutral-100`
      )}
    >
      <Avatar user={otherUser}></Avatar>
      <div className="flex-1">
        <div className="flex justify-center flex-col px-4">
          <div className="flex justify-between items-center mb-1 w-full ">
            <p className="text-md font-medium text-gray-900">
              {data.name || otherUser?.name}
            </p>
            <p className="text-xs font-light text-gray-400">2023年7月31日</p>
          </div>
          <p
            className={clsx(
              `
            truncate
            text-sm
          `,
              hasSeen ? `text-gray-400` : `text-gray-900 font-medium`
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConversationBox
