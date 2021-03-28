import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fas fa-phone-square-alt',
};

export default Navbar;
