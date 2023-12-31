import { User } from '.prisma/client'
import Image from 'next/image'

interface AvatarProps {
  user?: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const imgSrc = user?.image || '/images/placeholder.jpg'

  return (
    <div className="relative">
      <div className="relative rounded-full overflow-hidden h-9 w-9">
        <Image fill sizes="1" alt="Avatar" src={imgSrc} />
      </div>
      <span className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
    </div>
  )
}

export default Avatar
