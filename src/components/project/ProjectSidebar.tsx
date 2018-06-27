import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
	color: white;
	margin: 30px 0;
	width: 100%;
	height: 50px;
	display:flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border-left: 5px solid transparent;

	:hover {
		text-decoration: none;
	}
	
	i {
		font-size: 24px;
	}
	i:before {
		color: white;
	}
`;

const Container = styled.div`
	width: 75px;
	padding-top: 15px;
	background: ${props => props.theme.bg.gradientBlue};
	position:sticky;
	top:70px;

	.active {
		border-left:5px solid ${props => props.theme.ixoBlue};
	}
`;

export interface Props {
	match: any;
	projectDid: string;
}

export interface State {
	activeLink: string;
}

export class ProjectSidebar extends React.Component<Props, State> {

	state = {
		activeLink: ''
	};

	// componentDidUpdate(prevProps: any) {
	// 	if (prevProps.match.path !== this.props.match.patch) {
	// 		const path = this.props.match.path;
	// 		const result = path.substring(path.lastIndexOf('/') + 1);
	// 		console.log(result);
	// 		// this.setState({activeLink: result});
	// 	}
	// }

	render() {
		return (
			<Container>
			<NavItem 
				exact={true}
				title="Dashboard"
				to={`/projects/${this.props.projectDid}/detail`}
			>
				<i className={(this.state.activeLink === 'detail' || this.state.activeLink === '') ? 'icon-home-active' : 'icon-home'} />
			</NavItem>
			<NavItem 
				exact={true} 
				title="Service Providers" 
				to={`/projects/${this.props.projectDid}/detail/service-providers`} 
			>
				<i className={this.state.activeLink === 'service-providers' ? 'icon-serviceproviders-active' : 'icon-serviceproviders'} />
			</NavItem>
			<NavItem 
				exact={true} 
				title="Evaluators" 
				to={`/projects/${this.props.projectDid}/detail/evaluators`}
			>
				<i className={this.state.activeLink === 'evaluators' ? 'icon-evaluators-active' : 'icon-evaluators'} />
			</NavItem>
			<NavItem 
				exact={true} 
				title="Claims"
				to={`/projects/${this.props.projectDid}/detail/claims`}
			>
					<i className={this.state.activeLink === 'claims' ? 'icon-claims-active' : 'icon-claims'} />
			</NavItem>
			<NavItem 
				exact={true}
				title="Settings"
				to={`/projects/${this.props.projectDid}/overview`}
			>
				<i className={this.state.activeLink === 'overview' ? 'icon-settings-active' : 'icon-settings'} />
			</NavItem>
		</Container>
	);
	}
}