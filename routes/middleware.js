exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Kerri Quinn', key: 'index', href: '/' },
		{ label: 'Bio', key: 'bio', href: '/bio' },
		{ label: 'Projects', key: 'projects', href: '/projects' },
		// { label: 'Writing', key: 'writing', href: '/writing' },
		{ label: 'Workshops', key: 'workshops', href: '/workshops' },
		{ label: 'Contact', key: 'contact', href: '/contact' }
	];
	res.locals.companyName = "Kerri Quinn"
	res.locals.user = req.user;
	next();
};