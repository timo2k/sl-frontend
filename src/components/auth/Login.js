import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
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
			password: this.state.password
		};
		console.log(newUser);
	}

	render() {
		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Login</h1>
							<p className="lead text-center">
								Gib deine Benutzerdaten in die unten stehenden Felder ein um dich einzuloggen
							</p>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										placeholder="Gültige E-Mail Adresse"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
										className="form-control from-control-lg"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										placeholder="Passwort"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
										className="form-control from-control-lg"
									/>
								</div>
								<input type="submit" value="Hau weg die Scheiße!" className="btn btn-light btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
