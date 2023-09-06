'use client'

import Avatar from '@/app/components/Avatar'
import useOtherUser from '@/app/hooks/useOtherUser'
import { FullConversationType } from '@/app/types'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ConversationBoxProps {
  data: FullConversationType
  selected?: boolean
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const router = useRouter()
  const otherUser = useOtherUser(data.users)
  const hasSeen = true

  const handleClick = () => {
    router.push(`/conversations/${data.id}`)
  }

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
            你好啊！第一次跟你聊天
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConversationBox
