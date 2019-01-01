import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			password2: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.registerUser(newUser, this.props.history);
	}

	render() {
		const { errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Registrieren</h1>
							<p className="lead text-center">Melde dich für die Stuhlgang-Manager Alpha an.</p>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										placeholder="Gültige E-Mail Adresse"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
										className={classnames('form-control form-control-lg', {
											'is-invalid': errors.email
										})}
									/>
									{errors.email && <div className="invalid-feedback">{errors.email}</div>}
								</div>
								<div className="form-group">
									<input
										type="password"
										placeholder="Passwort"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
										className={classnames('form-control form-control-lg', {
											'is-invalid': errors.password
										})}
									/>
									{errors.password && <div className="invalid-feedback">{errors.password}</div>}
								</div>
								<div className="form-group">
									<input
										type="password"
										placeholder="Bestätige dein Passwort"
										name="password2"
										value={this.state.password2}
										onChange={this.onChange}
										className={classnames('form-control form-control-lg', {
											'is-invalid': errors.password2
										})}
									/>
									{errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
								</div>
								<input type="submit" className="btn btn-light btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
