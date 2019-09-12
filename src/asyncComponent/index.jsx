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
		return namespace ? (
			<div className={namespace ? `${namespace}_class` : null}>
				{
					C ? <C {...this.props} /> : null
				}
			</div>
		) : (C ? <C {...this.props} /> : null)
	}
}

export default AsyncComponent;