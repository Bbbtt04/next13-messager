import Sidebar from '@/app/components/Sidebar'
import ConversationList from '@/app/conversations/components/ConversationList'
import getUsers from '@/app/actions/getUsers'
import getConversations from '@/app/actions/getConversations'

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const users = await getUsers()
  const conversations = await getConversations()

  return (
    // @ts-ignore
    <Sidebar>
      <div className="h-full">
        <ConversationList list={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default ConversationsLayout
