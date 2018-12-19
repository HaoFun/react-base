import { toast, ToastContainer } from 'react-toastify'
import React from "react";

export default () => {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={5000}
			newestOnTop={true}
			closeOnClick
			draggable
			pauseOnHover>
		</ToastContainer>
	)
}

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
