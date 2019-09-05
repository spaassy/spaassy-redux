import React, { Component } from 'react';

const AsyncComponent = (namespace) => (importComponent) => class extends Component {
	constructor() {
		super();
		this.state = {
			component: null
		}
	}
	componentDidMount() {
		importComponent()
			.then(cmp => {
				this.setState({ component: cmp.default });
			});
	}
	render() {
		const C = this.state.component;
		return (
			<div className={namespace ? `${namespace}_class` : null}>
				{
					C ? <C {...this.props} /> : null
				}
			</div>
		)
	}
}

export default AsyncComponent;