import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileActions';
import { Link } from 'react-router-dom';
import { getShitloads } from '../../actions/shitloadActions';
import Moment from 'react-moment';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
		this.props.getShitloads();
	}

	render() {
		const { profile, loading } = this.props.profile;
		const shitloads = this.props.shitloads.shitloads;
		const shitloading = this.props.shitloads.loading;

		let dashboardContent;
		let shitloadContent;

		if (profile === null || loading) {
			dashboardContent = <h4>Loading...</h4>;
		} else {
			// Checks the Shitload Data
			if (shitloads === null || shitloading) {
				shitloadContent = <h4>Loading...</h4>;
			} else if (Object.keys(shitloads).length > 0) {
				shitloadContent = shitloads.map((shitload) => (
					<tr key={shitload._id}>
						<td>
							<Moment format="D MMM YYYY - HH:MM">{shitload.createdAt}</Moment>
						</td>
						<td>{shitload.consistency}</td>
						<td>{shitload.toilettype}</td>
						<td>{shitload.location}</td>
					</tr>
				));
			}

			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = (
					<div>
						<div className="row">
							<div className="col-6">
								<div className="card rounded-0 border shadow-sm mt-4">
									<div className="card-body">
										<p className="lead text-muted">Lege einen Stuhlgang an</p>
										<Link to="/create-shitload" className="btn btn-lg btn-primary">
											Stuhlgang anlegen
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className="card rounded-0 border shadow-sm mt-4">
									<div className="card-body">
										<p className="lead text-muted">Bearbeite dein Profil</p>
										<Link to="/handle/edit" className="btn btn-lg btn-primary">
											Profil bearbeiten
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="card rounded-0 border shadow-sm mt-4">
							<div className="card-body">
								<p className="lead text-muted">
									Hier hast du eine Übersicht über deine letzten Stuhlgänge
								</p>
								<table className="table">
									<thead>
										<tr>
											<th scope="col">Datum</th>
											<th scope="col">Konsistenz</th>
											<th scope="col">Toiletten Typ</th>
											<th scope="col">Ort</th>
										</tr>
									</thead>
									<tbody>{shitloadContent}</tbody>
								</table>
							</div>
						</div>
					</div>
				);
			} else {
				dashboardContent = (
					<div>
						<p className="lead text-muted">Moin! Du hast noch kein Profil angelegt</p>
						<p>Um mit der ganzen Scheiße starten zu können benötigst du noch ein Profil</p>
						<Link to="/create-profile" className="btn btn-lg btn-light">
							Profil erstellen
						</Link>
					</div>
				);
			}
		}

		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4">Dashboard</h1>
							{dashboardContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
	shitloads: state.shitloads
});

export default connect(mapStateToProps, { getCurrentProfile, getShitloads })(Dashboard);
