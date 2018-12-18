import { toast } from 'react-toastify'

export function notify(message, notifyType=null) {
	switch (notifyType) {
		case 'INFO':
			return toast.info(message)
		case 'SUCCESS':
			return toast.success(message)
		case 'WARNING':
			return toast.warn(message)
		case 'ERROR':
			return toast.error(message)
		default:
			return toast(message)
	}
}
