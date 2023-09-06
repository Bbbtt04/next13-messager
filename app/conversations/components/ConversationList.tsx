'use client'

import { MdOutlineGroupAdd } from 'react-icons/md'
import ConversationBox from '@/app/conversations/components/ConversationBox'
import useConversation from '@/app/hooks/useConversation'
import clsx from 'clsx'
import { FullConversationType } from '@/app/types'

interface ConversationListProps {
  list: FullConversationType[]
}

const ConversationList: React.FC<ConversationListProps> = ({ list }) => {
  const { conversationId, isOpen } = useConversation()

  return (
    <aside
      className={clsx(
        `
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200
      `,
        isOpen ? 'hidden' : 'block w-full '
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">群聊</div>
          <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-70 transition">
            <MdOutlineGroupAdd size={20}></MdOutlineGroupAdd>
          </div>
        </div>
        {list.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          ></ConversationBox>
        ))}
      </div>
    </aside>
  )
}
export default ConversationList
