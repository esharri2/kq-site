exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Kerri Quinn', key: 'index', href: '/' },
		{ label: 'Bio', key: 'index', href: '/bio' },
		{ label: 'Projects', key: 'index', href: '/projects' },
		{ label: 'Writing', key: 'index', href: '/writing' },
		{ label: 'Workshops', key: 'index', href: '/workshops' },
		{ label: 'Contact', key: 'index', href: '/contact' }
	];
	res.locals.companyName = "Kerri Quinn"
	res.locals.user = req.user;
	next();
};