'use client'

import EmptyState from '@/app/components/EmptyState'
import clsx from 'clsx'
import useConversation from '@/app/hooks/useConversation'

const Home = () => {
  const { isOpen } = useConversation()

  return (
    <div
      className={clsx(`lg:pl-80 h-full lg:block`, isOpen ? 'block' : 'hidden')}
    >
      <EmptyState />
    </div>
  )
}

export default Home
