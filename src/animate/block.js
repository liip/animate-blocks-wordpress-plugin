/**
 * BLOCK: animate-blocks/animate
 */

// Import styles
import './styles/style.scss';

// Import block dependencies
import config from '../config';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;
const {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	RangeControl,
} = wp.components;

const animations = [
	{
		label: __( 'No Animation', config.textDomain ),
		value: '',
	},
	{
		label: __( 'Fade', config.textDomain ),
		value: 'fade',
	},
	{
		label: __( 'Fade up', config.textDomain ),
		value: 'fade-up',
	},
];

registerBlockType( `${ config.namespace }/animate`, {
	title: __('Animate Block'),
	icon: 'controls-forward',
	category: 'layout',
	description: __('Animate blocks inside this container.'),

	attributes: {
		animation: {
			type: 'string',
			default: animations[0].value,
		},
		offset: {
			type: 'integer',
			default: 0,
		},
		delay: {
			type: 'integer',
			default: 0,
		},
		duration: {
			type: 'integer',
			default: 400,
		}
	},

	edit( { attributes, setAttributes, className } ) {
		const { animation = '', offset, delay, duration } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label={ __( 'Animation', config.textDomain ) }
							value={ animation }
							options={ animations }
							onChange={ ( selectedAnimation ) => setAttributes( { animation: selectedAnimation } ) }
						/>
						<RangeControl
							label={ __( 'Animation Delay (ms)' ) }
							value={ delay }
							onChange={ ( value ) => setAttributes( { delay: value } ) }
							min={ 0 }
							max={ 3000 }
						/>
						<RangeControl
							label={ __( 'Animation Duration (ms)' ) }
							value={ duration }
							onChange={ ( value ) => setAttributes( { duration: value } ) }
							min={ 0 }
							max={ 3000 }
						/>
						<TextControl
							label={ __( 'Animation Offset (px)', config.textDomain ) }
							value={ offset }
							onChange={ ( value ) => setAttributes( { offset: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<InnerBlocks/>
				</div>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const { animation = '', offset, delay, duration } = attributes;

		return (
			<div
				className={ className }
				data-aos={ animation }
				data-aos-delay={ delay }
				data-aos-offset={ offset }
				data-aos-duration={ duration }
			>
				<InnerBlocks.Content/>
			</div>
		);
	}
});
