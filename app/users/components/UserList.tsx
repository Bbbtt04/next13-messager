'use client'

import { User } from '.prisma/client'
import UserBox from './UserBox'

interface UserListProps {
  items: User[]
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
                fixed
                inset-y-0
                overflow-y-auto
                lg:w-80
                border-r
                border-gray-200
            "
    >
      <div className="px-5">
        <div className="flex-col">
          <div className="flex-col">
            <div
              className="
                            text-2xl
                            text-neutral-800
                            py-4
                        "
            >
              用户
            </div>
          </div>
          {items.map((item) => (
            <UserBox key={item.id} data={item}></UserBox>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default UserList
