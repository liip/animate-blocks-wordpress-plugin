const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let anchorPlacementOptions = [
	{
		label: __( 'Top Bottom', 'animate-blocks' ),
		value: 'top-bottom',
	},
	{
		label: __( 'Top Center', 'animate-blocks' ),
		value: 'top-center',
	},
	{
		label: __( 'Top Top', 'animate-blocks' ),
		value: 'top-top',
	},
	{
		label: __( 'Center Bottom', 'animate-blocks' ),
		value: 'center-bottom',
	},
	{
		label: __( 'Center Center', 'animate-blocks' ),
		value: 'center-center',
	},
	{
		label: __( 'Center Top', 'animate-blocks' ),
		value: 'center-top',
	},
	{
		label: __( 'Bottom Bottom', 'animate-blocks' ),
		value: 'bottom-bottom',
	},
	{
		label: __( 'Bottom Center', 'animate-blocks' ),
		value: 'bottom-center',
	},
	{
		label: __( 'Bottom Top', 'animate-blocks' ),
		value: 'bottom-top',
	},
];
anchorPlacementOptions = applyFilters( 'animateBlocks.anchorPlacementOptions', anchorPlacementOptions );

export default anchorPlacementOptions;
