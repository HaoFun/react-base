import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { loginSagaAction } from '@/store/auth/action'
import config from '@utils/config'

class Login extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.login(this.account.value, this.password.value, () => {
			this.props.history.push(config.rootIndex)
		})
	}

	render() {
		const {intl} = this.props
		return (
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="ibox-content">
						<div className="form-group">
							<Input
								innerRef={input => {this.account = input}}
								type="account"
								className="form-control"
								placeholder={intl.formatMessage({id: 'account'})}
								required=""/>
						</div>
						<div className="form-group">
							<Input
								innerRef={input => {this.password = input}}
								type="password"
								className="form-control"
								placeholder={intl.formatMessage({id: 'password'})}
								required=""/>
						</div>
						<Button
							onClick={this.handleSubmit}
							type="submit"
							className="btn btn-primary block full-width m-b"
						>
							{intl.formatMessage({id: 'submit'})}
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAuth: state.getIn(['auth', 'status'])
})

const mapDispatchToProps = dispatch => ({
	login(account, password, callback) {
		dispatch(loginSagaAction(account, password, callback))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login))