import React from 'react'
import config from '@utils/config'

const Footer = () => (
	<footer className="footer fixed">
		<div className="text-center">
			{config.siteName} <strong>Copyright</strong> {config.copyright}
		</div>
	</footer>
)

export default Footer