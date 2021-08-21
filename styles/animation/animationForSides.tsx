const duration = 0.45,
	ease = 'easeInOut';

const animateLeftSide = {
	initial: {
		opacity: 0,
		x: -1000,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration,
			ease,
		},
	},
};

const animateRightSide = {
	initial: {
		opacity: 0,
		x: 1000,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration,
			ease,
		},
	},
};

export { animateLeftSide, animateRightSide };
