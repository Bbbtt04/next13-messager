'use client'

import useRoutes from '@/app/hooks/useRoutes'
import useConversation from '@/app/hooks/useConversation'
import MobileItem from './MobileItem'

const MobileFooter = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <div
      className="
        fixed
        bottom-0
        z-50
        w-full
        flex
        justify-around
        item-center
        bg-white
        border-t-[1px]
        lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter
