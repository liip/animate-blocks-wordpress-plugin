import config from "../config"
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let animationOptions = [
	{
		label: __( 'Fade', config.textDomain ),
		value: 'fade',
	},
	{
		label: __( 'Fade up', config.textDomain ),
		value: 'fade-up',
	},
	{
		label: __( 'Fade down', config.textDomain ),
		value: 'fade-down',
	},
	{
		label: __( 'Fade left', config.textDomain ),
		value: 'fade-left',
	},
	{
		label: __( 'Fade right', config.textDomain ),
		value: 'fade-right',
	},
	{
		label: __( 'Fade up right', config.textDomain ),
		value: 'fade-up-right',
	},
	{
		label: __( 'Fade up left', config.textDomain ),
		value: 'fade-up-left',
	},
	{
		label: __( 'Fade down right', config.textDomain ),
		value: 'fade-down-right',
	},
	{
		label: __( 'Fade down left', config.textDomain ),
		value: 'fade-down-left',
	},
	{
		label: __( 'Flip up', config.textDomain ),
		value: 'flip-up',
	},
	{
		label: __( 'Flip down', config.textDomain ),
		value: 'flip-down',
	},
	{
		label: __( 'Flip left', config.textDomain ),
		value: 'flip-left',
	},
	{
		label: __( 'Flip right', config.textDomain ),
		value: 'flip-right',
	},
	{
		label: __( 'Slide up', config.textDomain ),
		value: 'slide-up',
	},
	{
		label: __( 'Slide down', config.textDomain ),
		value: 'slide-down',
	},
	{
		label: __( 'Slide left', config.textDomain ),
		value: 'slide-left',
	},
	{
		label: __( 'Slide right', config.textDomain ),
		value: 'slide-right',
	},
	{
		label: __( 'Zoom in', config.textDomain ),
		value: 'zoom-in',
	},
	{
		label: __( 'Zoom in up', config.textDomain ),
		value: 'zoom-in-up',
	},
	{
		label: __( 'Zoom in down', config.textDomain ),
		value: 'zoom-in-down',
	},
	{
		label: __( 'Zoom in left', config.textDomain ),
		value: 'zoom-in-left',
	},
	{
		label: __( 'Zoom in right', config.textDomain ),
		value: 'zoom-in-right',
	},
	{
		label: __( 'Zoom out', config.textDomain ),
		value: 'zoom-out',
	},
	{
		label: __( 'Zoom out up', config.textDomain ),
		value: 'zoom-out-up',
	},
	{
		label: __( 'Zoom out down', config.textDomain ),
		value: 'zoom-out-down',
	},
	{
		label: __( 'Zoom out left', config.textDomain ),
		value: 'zoom-out-left',
	},
	{
		label: __( 'Zoom out right', config.textDomain ),
		value: 'zoom-out-right',
	},
];
const animationEmptyOption = {
	label: __( 'No Animation', config.textDomain ),
	value: '',
};

animationOptions = applyFilters( 'animateBlocks.animationOptions', animationOptions );
animationOptions = [ animationEmptyOption, ...animationOptions ];

export default animationOptions;
