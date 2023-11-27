import toast from 'react-hot-toast'
import toaster from './toaster'
import { CheckCircle2 } from 'lucide-react'
jest.mock('react-hot-toast')

describe('toaster', () => {
  it('calls toast with correct arguments', () => {
    const message = 'test message'
    const type = 'success'

    toaster({ message, type })

    expect(toast).toHaveBeenCalledWith(message, {
      duration: 5000,
      className: '!text-blue-1 !bg-green-500',
      icon: <CheckCircle2 />,
    })
  })
})
