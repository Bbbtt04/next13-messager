import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/libs/prismadb'

const getConversations = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser?.id) return []

  try {
    const conversations = await prisma.conversation.findMany({
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
      orderBy: {
        lastMessageAt: 'desc',
      },
    })
    return conversations
  } catch (error: any) {
    return []
  }
}
export default getConversations
