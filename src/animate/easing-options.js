import config from "../config"
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let easingOptions = [
	{
		label: __( 'Ease', config.textDomain ),
		value: 'ease',
	},
	{
		label: __( 'Ease in', config.textDomain ),
		value: 'ease-in',
	},
	{
		label: __( 'Ease out', config.textDomain ),
		value: 'ease-out',
	},
	{
		label: __( 'Ease in out', config.textDomain ),
		value: 'ease-in-out',
	},
	{
		label: __( 'Ease in back', config.textDomain ),
		value: 'ease-in-back',
	},
	{
		label: __( 'Ease out back', config.textDomain ),
		value: 'ease-out-back',
	},
	{
		label: __( 'Ease in out back', config.textDomain ),
		value: 'ease-in-out-back',
	},
	{
		label: __( 'Ease in sine', config.textDomain ),
		value: 'ease-in-sine',
	},
	{
		label: __( 'Ease out sine', config.textDomain ),
		value: 'ease-out-sine',
	},
	{
		label: __( 'Ease in out sine', config.textDomain ),
		value: 'ease-in-out-sine',
	},
	{
		label: __( 'Ease in quad', config.textDomain ),
		value: 'ease-in-quad',
	},
	{
		label: __( 'Ease out quad', config.textDomain ),
		value: 'ease-out-quad',
	},
	{
		label: __( 'Ease in out quad', config.textDomain ),
		value: 'ease-in-out-quad',
	},
	{
		label: __( 'Ease in cubic', config.textDomain ),
		value: 'ease-in-cubic',
	},
	{
		label: __( 'Ease out cubic', config.textDomain ),
		value: 'ease-out-cubic',
	},
	{
		label: __( 'Ease in out cubic', config.textDomain ),
		value: 'ease-in-out-cubic',
	},
	{
		label: __( 'Ease in quart', config.textDomain ),
		value: 'ease-in-quart',
	},
	{
		label: __( 'Ease out quart', config.textDomain ),
		value: 'ease-out-quart',
	},
	{
		label: __( 'Ease in out quart', config.textDomain ),
		value: 'ease-in-out-quart',
	},
	{
		label: __( 'Linear', config.textDomain ),
		value: 'linear',
	},
];

easingOptions = applyFilters( 'animateBlocks.easingOptions', easingOptions );

export default easingOptions;
