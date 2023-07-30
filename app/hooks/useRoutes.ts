'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { HiChat, HiUsers } from 'react-icons/hi'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'
import { signOut } from 'next-auth/react'

const useRoutes = () => {
  const pathname = usePathname()

  // useMemo 优化性能：当 pathname 或者 conversationId 变化时，才会重新计算 routes
  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations',
      },
      {
        label: 'Users',
        href: '/users',
        icon: HiUsers,
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        onClick: () => signOut(),
        href: '#',
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname]
  )

  return routes
}

export default useRoutes
