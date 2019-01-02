import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

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

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);
