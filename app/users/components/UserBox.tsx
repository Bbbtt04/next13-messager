import { User } from '.prisma/client'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import axios from 'axios'
import Avatar from '@/app/components/Avatar'
import LoadingModal from '@/app/components/modals/LoadingModal'

interface UserBoxProps {
  data: User
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)

    axios
      .post('/api/conversations', { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`)
      })
      .finally(() => setIsLoading(false))
  }, [data, router])

  return (
    <>
      {isLoading && <LoadingModal></LoadingModal>}
      <div
        onClick={handleClick}
        className="
                flex
                items-center
                w-full
                p-3
                hover:bg-neutral-100
                rounded-lg
                transition
                cursor-pointer
            "
      >
        <Avatar user={data}></Avatar>
        <div className="flex-1">
          <div className="flex ml-10">
            <p className="text-sm text-gray-900 font-medium">{data.name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserBox
