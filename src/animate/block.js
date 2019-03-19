/**
 * BLOCK: animate-blocks/animate
 */

// Import styles
import './styles/style.scss';

// Import block dependencies
import config from '../config';
import anchorPlacementOptions from './anchor-placement-options';
import animationOptions from './animation-options';
import easingOptions from './easing-options';

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

registerBlockType( `${ config.namespace }/animate`, {
	title: __('Animate Block'),
	icon: 'controls-forward',
	category: 'layout',
	description: __('Animate blocks inside this container.'),

	attributes: {
		animation: {
			type: 'string',
			default: animationOptions && animationOptions.length > 0 ? animationOptions[0].value : 'fade',
		},
		offset: {
			type: 'number',
			default: 120,
		},
		delay: {
			type: 'number',
			default: 0,
		},
		duration: {
			type: 'number',
			default: 400,
		},
		easing: {
			type: 'string',
			default: easingOptions && easingOptions.length > 0 ? easingOptions[0].value : 'ease',
		},
		once: {
			type: 'boolean',
			default: true,
		},
		mirror: {
			type: 'boolean',
			default: false,
		},
		anchorPlacement: {
			type: 'string',
			default: anchorPlacementOptions && anchorPlacementOptions.length > 0 ? anchorPlacementOptions[0].value : 'top-bottom',
		}
	},

	edit( { attributes, setAttributes, className } ) {
		const {
			animation = '',
			offset,
			delay,
			duration,
			easing,
			once,
			mirror,
			anchorPlacement,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label={ __( 'Animation', config.textDomain ) }
							value={ animation }
							options={ animationOptions }
							onChange={ ( selectedOption ) => setAttributes( { animation: selectedOption } ) }
						/>
						<RangeControl
							label={ __( 'Delay (ms)' ) }
							value={ delay }
							onChange={ ( value ) => setAttributes( { delay: value } ) }
							min={ 0 }
							max={ 3000 }
							step={ 50 }
						/>
						<RangeControl
							label={ __( 'Duration (ms)' ) }
							value={ duration }
							onChange={ ( value ) => setAttributes( { duration: value } ) }
							min={ 0 }
							max={ 3000 }
							step={ 50 }
						/>
						<TextControl
							label={ __( 'Offset (px)', config.textDomain ) }
							help={ __( 'offset (in px) from the original trigger point', config.textDomain ) }
							type="number"
							value={ offset }
							onChange={ ( value ) => setAttributes( { offset: value } ) }
						/>
						<SelectControl
							label={ __( 'Easing', config.textDomain ) }
							help={ __( 'easing function for animations', config.textDomain ) }
							value={ easing }
							options={ easingOptions }
							onChange={ ( selectedOption ) => setAttributes( { easing: selectedOption } ) }
						/>
						<ToggleControl
							label={ __( 'Once', config.textDomain ) }
							help={ 'whether animation should happen only once - while scrolling down' }
							checked={ once }
							onChange={ ( checked ) => setAttributes( { once: checked } ) }
						/>
						<ToggleControl
							label={ __( 'Mirror', config.textDomain ) }
							help={ 'whether elements should animate out while scrolling past them' }
							checked={ mirror }
							onChange={ ( checked ) => setAttributes( { mirror: checked } ) }
						/>
						<SelectControl
							label={ __( 'Anchor placement', config.textDomain ) }
							help={ __( 'defines which position of the element regarding to window should trigger the animation', config.textDomain ) }
							value={ anchorPlacement }
							options={ anchorPlacementOptions }
							onChange={ ( selectedOption ) => setAttributes( { anchorPlacement: selectedOption } ) }
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
