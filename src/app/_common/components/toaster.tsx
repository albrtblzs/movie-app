import { CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-react'
import toast from 'react-hot-toast'
import { cn } from '../utils/cn'

type ToastType = 'success' | 'error' | 'warning' | 'info'

const icon = {
  success: <CheckCircle2 />,
  error: <XCircle />,
  warning: <AlertCircle />,
  info: <Info />,
}

const variantClasses: Record<ToastType, string> = {
  success: '!bg-green-500',
  error: '!bg-red-500',
  warning: '!bg-yellow-500',
  info: '!bg-white',
}

const defaultStyle = '!text-blue-1'

const toaster = ({ message, type }: { message: string; type: ToastType }) => {
  return toast(message, {
    duration: 5000,
    className: cn(defaultStyle, variantClasses[type]),
    icon: icon[type],
  })
}

export default toaster
