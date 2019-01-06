import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { withRouter, Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profileActions';
import { createShitload } from '../../actions/shitloadActions';

class CreateShitload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: '',
			consistency: '',
			taste: '',
			toilettype: '',
			location: '',
			createdAt: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	componentDidMount() {
		this.props.getCurrentProfile();
	}

	onSubmit(e) {
		e.preventDefault();
		const shitloadData = {
			color: this.state.color,
			consistency: this.state.consistency,
			taste: this.state.taste,
			toilettype: this.state.toilettype,
			location: this.state.location,
			createdAt: this.state.createdAt
		};
		this.props.createShitload(shitloadData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { profile } = this.props.profile;
		const { errors } = this.props;

		const colorOptions = [
			{ label: 'Farbe vom Kot', value: null },
			{ label: 'schwarz', value: 'schwarz' },
			{ label: 'grau', value: 'grau' },
			{ label: 'braun', value: 'braun' },
			{ label: 'hellbraun', value: 'hellbraun' },
			{ label: 'gelblich', value: 'gelblich' },
			{ label: 'rot', value: 'rot' },
			{ label: 'ocker', value: 'ocker' },
			{ label: 'grün', value: 'grün' }
		];

		const consistencyOptions = [
			{ label: 'Konsistenz von deiner Kacke', value: null },
			{ label: 'durchfall', value: 'durchfall' },
			{ label: 'schleimig', value: 'schleimig' },
			{ label: 'komplett flüssig', value: 'komplett flüssig' },
			{ label: 'erst hart dann matschig', value: 'erst hart dann matschig' },
			{ label: 'hart', value: 'hart' },
			{ label: 'hart wie kruppstahl', value: 'hart wie kruppstahl' },
			{ label: 'butterweich (normal)', value: 'butterweich (normal)' },
			{ label: 'weich mit harten Stückchen', value: 'weich mit harten Stückchen' },
			{ label: 'Bierschiss', value: 'Bierschiss' }
		];

		const tasteOptions = [
			{ label: 'Duft von deine Kacke', value: null },
			{ label: 'gulasch', value: 'gulasch' },
			{ label: 'fleischig', value: 'fleischig' },
			{ label: 'faule Eier', value: 'faule Eier' },
			{ label: 'herzhaft', value: 'herzhaft' },
			{ label: 'fleischkäse', value: 'fleischkäse' },
			{ label: 'Bifi', value: 'Bifi' },
			{ label: 'völlig geruchslos', value: 'völlig geruchslos' },
			{ label: 'einfach nur nach Scheiße', value: 'einfach nur nach Scheiße' }
		];

		const toiletTypeOptions = [
			{ label: 'Ort der Tat', value: null },
			{ label: 'heimische Toilette', value: 'heimische Toilette' },
			{ label: 'bei Freunden', value: 'bei Freunden' },
			{ label: 'öffentliche Toilette', value: 'öffentliche Toilette' },
			{ label: 'im Hotel', value: 'im Hotel' },
			{ label: 'im Restaurant', value: 'im Restaurant' },
			{ label: 'auf der Arbeit', value: 'auf der Arbeit' },
			{ label: 'in der Schule', value: 'in der Schule' },
			{ label: 'in der Uni', value: 'in der Uni' },
			{ label: 'auf nem Festival', value: 'auf nem Festival' },
			{ label: 'Weiß ich nicht mehr genau', value: 'Weiß ich nicht mehr genau' }
		];

		let shitloadContent;

		if (profile === null) {
			shitloadContent = (
				<div className="card-body">
					<p className="lead text-muted">Moin! Du hast noch kein Profil angelegt</p>
					<p>Um mit der ganzen Scheiße starten zu können benötigst du noch ein Profil</p>
					<Link to="/create-profile" className="btn btn-lg btn-primary">
						Profil erstellen
					</Link>
				</div>
			);
		} else {
			shitloadContent = (
				<div className="card-body">
					<h1 className="display-4 text-center">Speichere einen neuen Stuhlgang</h1>
					<form onSubmit={this.onSubmit}>
						<SelectListGroup
							placeholder="Farbe vom Kot"
							name="color"
							value={this.state.color}
							onChange={this.onChange}
							options={colorOptions}
							error={errors.color}
						/>
						<SelectListGroup
							placeholder="Konsistenz von deiner Kacke"
							name="consistency"
							value={this.state.consistency}
							onChange={this.onChange}
							options={consistencyOptions}
							error={errors.consistency}
						/>
						<SelectListGroup
							placeholder="Geruch deiner Scheiße"
							name="taste"
							value={this.state.taste}
							onChange={this.onChange}
							options={tasteOptions}
							error={errors.taste}
						/>
						<SelectListGroup
							placeholder="Ort der Tat"
							name="toilettype"
							value={this.state.toilettype}
							onChange={this.onChange}
							options={toiletTypeOptions}
							error={errors.toilettype}
						/>
						<TextFieldGroup
							placeholder="Welche Stadt"
							name="location"
							value={this.state.location}
							onChange={this.onChange}
							error={errors.location}
						/>
						<TextFieldGroup
							placeholder="Datum und Uhrzeit"
							type="datetime-local"
							name="createdAt"
							value={this.state.createdAt}
							onChange={this.onChange}
							error={errors.createdAt}
						/>
						<input type="submit" value="Profil speichern" className="btn btn-primary btn-block mt-4" />
					</form>
				</div>
			);
		}

		return (
			<div className="create-shitload">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<div className="card rounded-0 border shadow-sm mt-5">{shitloadContent}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CreateShitload.propTypes = {
	errors: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, createShitload })(withRouter(CreateShitload));
