'use client'

import { signOut } from 'next-auth/react'
import EmptyState from '@/app/components/EmptyState'

const People = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState></EmptyState>
    </div>
  )
}

export default People
