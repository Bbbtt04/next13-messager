import { User } from '.prisma/client'
import Image from 'next/image'

interface AvatarProps {
  user?: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="relative rounded-full overflow-hidden h-9 w-9">
        <Image
          fill
          sizes="1"
          alt="Avatar"
          src={user?.image || '/images/placeholder.jpg'}
        />
      </div>
      <span className="absolute top-0 right-0 block w-2 h-2bg-green-500 rounded-full ring-2 ring-white"></span>
    </div>
  )
}

export default Avatar
