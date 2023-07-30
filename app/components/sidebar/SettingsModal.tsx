'use client'

import { User } from '.prisma/client'

interface SettingsModalProps {
  isOpen?: boolean
  onClose?: () => void
  currentUser?: User
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
}) => {
  return <div>123</div>
}
