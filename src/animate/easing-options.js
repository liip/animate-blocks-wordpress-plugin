const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let easingOptions = [
	{
		label: __( 'Ease', 'animate-blocks' ),
		value: 'ease',
	},
	{
		label: __( 'Ease in', 'animate-blocks' ),
		value: 'ease-in',
	},
	{
		label: __( 'Ease out', 'animate-blocks' ),
		value: 'ease-out',
	},
	{
		label: __( 'Ease in out', 'animate-blocks' ),
		value: 'ease-in-out',
	},
	{
		label: __( 'Ease in back', 'animate-blocks' ),
		value: 'ease-in-back',
	},
	{
		label: __( 'Ease out back', 'animate-blocks' ),
		value: 'ease-out-back',
	},
	{
		label: __( 'Ease in out back', 'animate-blocks' ),
		value: 'ease-in-out-back',
	},
	{
		label: __( 'Ease in sine', 'animate-blocks' ),
		value: 'ease-in-sine',
	},
	{
		label: __( 'Ease out sine', 'animate-blocks' ),
		value: 'ease-out-sine',
	},
	{
		label: __( 'Ease in out sine', 'animate-blocks' ),
		value: 'ease-in-out-sine',
	},
	{
		label: __( 'Ease in quad', 'animate-blocks' ),
		value: 'ease-in-quad',
	},
	{
		label: __( 'Ease out quad', 'animate-blocks' ),
		value: 'ease-out-quad',
	},
	{
		label: __( 'Ease in out quad', 'animate-blocks' ),
		value: 'ease-in-out-quad',
	},
	{
		label: __( 'Ease in cubic', 'animate-blocks' ),
		value: 'ease-in-cubic',
	},
	{
		label: __( 'Ease out cubic', 'animate-blocks' ),
		value: 'ease-out-cubic',
	},
	{
		label: __( 'Ease in out cubic', 'animate-blocks' ),
		value: 'ease-in-out-cubic',
	},
	{
		label: __( 'Ease in quart', 'animate-blocks' ),
		value: 'ease-in-quart',
	},
	{
		label: __( 'Ease out quart', 'animate-blocks' ),
		value: 'ease-out-quart',
	},
	{
		label: __( 'Ease in out quart', 'animate-blocks' ),
		value: 'ease-in-out-quart',
	},
	{
		label: __( 'Linear', 'animate-blocks' ),
		value: 'linear',
	},
];

easingOptions = applyFilters( 'animateBlocks.easingOptions', easingOptions );

export default easingOptions;
