import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile } from '../../actions/profileActions';
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			sex: '',
			location: '',
			bio: '',
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

	onSubmit(e) {
		e.preventDefault();
		const profileData = {
			userName: this.state.userName,
			sex: this.state.sex,
			location: this.state.location,
			bio: this.state.bio
		};

		this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;

		// Select options for sex
		const options = [
			{ label: 'Wähle dein Geschlecht', value: '0' },
			{ label: 'androgyn', value: 'androgyn' },
			{ label: 'bigender', value: 'bigender' },
			{ label: 'weiblich', value: 'weiblich' },
			{ label: 'Frau zu Mann', value: 'Frau zu Mann' },
			{ label: 'gender variabel', value: 'gender variabel' },
			{ label: 'genderqueer', value: 'genderqueer' },
			{ label: 'intersexuell', value: 'intersexuell' },
			{ label: 'männlich', value: 'männlich' },
			{ label: 'Mann zu Frau', value: 'Mann zu Frau' },
			{ label: 'weder noch', value: 'weder noch' },
			{ label: 'geschlechtslos', value: 'geschlechtslos' },
			{ label: 'nicht-binär', value: 'nicht-binär' },
			{ label: 'weitere', value: 'weitere' },
			{ label: 'Pangender', value: 'Pangender' },
			{ label: 'Pangeschlecht', value: 'Pangeschlecht' },
			{ label: 'trans', value: 'trans' },
			{ label: 'transweiblich', value: 'transweiblich' },
			{ label: 'transmännlich', value: 'transmännlich' },
			{ label: 'transmann', value: 'transmann' },
			{ label: 'transmensch', value: 'transmensch' },
			{ label: 'transfrau', value: 'transfrau' },
			{ label: 'trans*', value: 'trans*' },
			{ label: 'trans*weiblich', value: 'trans*weiblich' },
			{ label: 'trans*männlich', value: 'trans*männlich' },
			{ label: 'Trans*Mann', value: 'Trans*Mann' },
			{ label: 'Trans*Mensch', value: 'Trans*Mensch' },
			{ label: 'Trans*Frau', value: 'Trans*Frau' },
			{ label: 'transfeminin', value: 'transfeminin' },
			{ label: 'Transgender', value: 'Transgender' },
			{ label: 'transgender weiblich', value: 'transgender weiblich' },
			{ label: 'transgender männlich', value: 'transgender männlich' },
			{ label: 'Transgender Mann', value: 'Transgender Mann' },
			{ label: 'Transgender Mensch', value: 'Transgender Mensch' },
			{ label: 'Transgender Frau', value: 'Transgender Frau' },
			{ label: 'transmaskulin', value: 'transmaskulin' },
			{ label: 'transsexuell', value: 'transsexuell' },
			{ label: 'weiblich-transsexuell', value: 'weiblich-transsexuell' },
			{ label: 'männlich-transsexuell', value: 'männlich-transsexuell' },
			{ label: 'transsexueller Mann', value: 'transsexueller Mann' },
			{ label: 'transsexuelle Person', value: 'transsexuelle Person' },
			{ label: 'transsexuelle Frau', value: 'transsexuelle Frau' },
			{ label: 'Inter*', value: 'Inter*' },
			{ label: 'Inter*weiblich', value: 'Inter*weiblich' },
			{ label: 'Inter*männlich', value: 'Inter*männlich' },
			{ label: 'Inter*Mann', value: 'Inter*Mann' },
			{ label: 'Inter*Frau', value: 'Inter*Frau' },
			{ label: 'Inter*Mensch', value: 'Inter*Mensch' },
			{ label: 'intergender', value: 'intergender' },
			{ label: 'intergeschlechtlich', value: 'intergeschlechtlich' },
			{ label: 'zweigeschlechtlich', value: 'zweigeschlechtlich' },
			{ label: 'Zwitter', value: 'Zwitter' },
			{ label: 'Hermaphrodit', value: 'Hermaphrodit' },
			{ label: 'Viertes Geschlecht', value: 'Viertes Geschlecht' },
			{ label: 'XY-Frau', value: 'XY-Frau' },
			{ label: 'Butch', value: 'Butch' },
			{ label: 'Femme', value: 'Femme' },
			{ label: 'Drag', value: 'Drag' },
			{ label: 'Transvestit', value: 'Transvestit0' },
			{ label: 'Cross-Gender', value: 'Cross-Gender' }
		];

		return (
			<div className="create-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<div className="card rounded-0 border shadow-sm mt-5">
								<div className="card-body">
									<h1 className="display-4 text-center">Lege dein Profil an</h1>
									<form onSubmit={this.onSubmit}>
										<TextFieldGroup
											placeholder="* Dein Benutzername"
											name="userName"
											value={this.state.userName}
											onChange={this.onChange}
											error={errors.userName}
											info="Der Benutzername muss einzigartig sein und kann fürs erste nicht mehr geändert werden"
										/>
										<SelectListGroup
											placeholder="Geschlecht"
											name="sex"
											value={this.state.sex}
											onChange={this.onChange}
											options={options}
											error={errors.sex}
										/>
										<TextFieldGroup
											placeholder="Dein Wohnort"
											name="location"
											value={this.state.location}
											onChange={this.onChange}
											error={errors.location}
										/>
										<TextAreaFieldGroup
											placeholder="Optionaler Kram über dich selbser"
											name="bio"
											value={this.state.bio}
											onChange={this.onChange}
											error={errors.bio}
										/>
										<input
											type="submit"
											value="Profil speichern"
											className="btn btn-primary btn-block mt-4"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CreateProfile.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
