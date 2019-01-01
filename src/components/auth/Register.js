import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

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
		axios
			.post('http://localhost:5000/api/v1/users/register', newUser)
			.then((res) => console.log(res.data))
			.catch((err) => this.setState({ errors: err.response.data }));
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
											'is-invalid': errors.password
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

export default Register;
