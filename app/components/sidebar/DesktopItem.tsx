import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface DesktopItemProps {
  label: string
  icon: any
  href: string
  onClick?: () => void
  active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          `flex p-4 rounded-md text-sm eading-6 font-semibold text-gray-500hover:text-gray-800 hover:bg-gray-200`,
          active && `bg-gray-100 text-gray-800`
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true"></Icon>
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}
export default DesktopItem
