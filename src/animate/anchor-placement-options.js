import config from "../config"
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

let anchorPlacementOptions = [
	{
		label: __( 'Top Bottom', config.textDomain ),
		value: 'top-bottom',
	},
	{
		label: __( 'Top Center', config.textDomain ),
		value: 'top-center',
	},
	{
		label: __( 'Top Top', config.textDomain ),
		value: 'top-top',
	},
	{
		label: __( 'Center Bottom', config.textDomain ),
		value: 'center-bottom',
	},
	{
		label: __( 'Center Center', config.textDomain ),
		value: 'center-center',
	},
	{
		label: __( 'Center Top', config.textDomain ),
		value: 'center-top',
	},
	{
		label: __( 'Bottom Bottom', config.textDomain ),
		value: 'bottom-bottom',
	},
	{
		label: __( 'Bottom Center', config.textDomain ),
		value: 'bottom-center',
	},
	{
		label: __( 'Bottom Top', config.textDomain ),
		value: 'bottom-top',
	},
];
anchorPlacementOptions = applyFilters( 'animateBlocks.anchorPlacementOptions', anchorPlacementOptions );

export default anchorPlacementOptions;
