import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<main className="container">
				<div className="text-center info-container">
					<h1 className="display-4 mt-5">Der Stuhlgang Managemer</h1>
					<p className="lead">
						Wir kümmern uns um deine Scheiße! Teile deinen Scheiß, bleibe auf dem laufenden und werde ein
						besserer Mensch.
					</p>
					<Link to="/register" className="btn btn-light btn-lg">
						Account erstellen
					</Link>{' '}
					<Link to="/login" className="btn btn-light btn-lg">
						Einloggen
					</Link>
				</div>
			</main>
		);
	}
}

export default Landing;
