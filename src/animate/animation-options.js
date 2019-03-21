const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let animationOptions = [
	{
		label: __( 'Fade', 'animate-blocks' ),
		value: 'fade',
	},
	{
		label: __( 'Fade up', 'animate-blocks' ),
		value: 'fade-up',
	},
	{
		label: __( 'Fade down', 'animate-blocks' ),
		value: 'fade-down',
	},
	{
		label: __( 'Fade left', 'animate-blocks' ),
		value: 'fade-left',
	},
	{
		label: __( 'Fade right', 'animate-blocks' ),
		value: 'fade-right',
	},
	{
		label: __( 'Fade up right', 'animate-blocks' ),
		value: 'fade-up-right',
	},
	{
		label: __( 'Fade up left', 'animate-blocks' ),
		value: 'fade-up-left',
	},
	{
		label: __( 'Fade down right', 'animate-blocks' ),
		value: 'fade-down-right',
	},
	{
		label: __( 'Fade down left', 'animate-blocks' ),
		value: 'fade-down-left',
	},
	{
		label: __( 'Flip up', 'animate-blocks' ),
		value: 'flip-up',
	},
	{
		label: __( 'Flip down', 'animate-blocks' ),
		value: 'flip-down',
	},
	{
		label: __( 'Flip left', 'animate-blocks' ),
		value: 'flip-left',
	},
	{
		label: __( 'Flip right', 'animate-blocks' ),
		value: 'flip-right',
	},
	{
		label: __( 'Slide up', 'animate-blocks' ),
		value: 'slide-up',
	},
	{
		label: __( 'Slide down', 'animate-blocks' ),
		value: 'slide-down',
	},
	{
		label: __( 'Slide left', 'animate-blocks' ),
		value: 'slide-left',
	},
	{
		label: __( 'Slide right', 'animate-blocks' ),
		value: 'slide-right',
	},
	{
		label: __( 'Zoom in', 'animate-blocks' ),
		value: 'zoom-in',
	},
	{
		label: __( 'Zoom in up', 'animate-blocks' ),
		value: 'zoom-in-up',
	},
	{
		label: __( 'Zoom in down', 'animate-blocks' ),
		value: 'zoom-in-down',
	},
	{
		label: __( 'Zoom in left', 'animate-blocks' ),
		value: 'zoom-in-left',
	},
	{
		label: __( 'Zoom in right', 'animate-blocks' ),
		value: 'zoom-in-right',
	},
	{
		label: __( 'Zoom out', 'animate-blocks' ),
		value: 'zoom-out',
	},
	{
		label: __( 'Zoom out up', 'animate-blocks' ),
		value: 'zoom-out-up',
	},
	{
		label: __( 'Zoom out down', 'animate-blocks' ),
		value: 'zoom-out-down',
	},
	{
		label: __( 'Zoom out left', 'animate-blocks' ),
		value: 'zoom-out-left',
	},
	{
		label: __( 'Zoom out right', 'animate-blocks' ),
		value: 'zoom-out-right',
	},
];
const animationEmptyOption = {
	label: __( 'No Animation', 'animate-blocks' ),
	value: '',
};

animationOptions = applyFilters( 'animateBlocks.animationOptions', animationOptions );
animationOptions = [ animationEmptyOption, ...animationOptions ];

export default animationOptions;
