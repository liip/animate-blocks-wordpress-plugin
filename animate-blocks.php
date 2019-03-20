<?php
/**
 * Plugin Name: Animate Blocks
 * Plugin URI: https://github.com/liip/animate-blocks-wordpress-plugin
 * Description: Animate Blocks - Animate your Gutenberg blocks.
 * Author: Team Jazz, Liip AG
 * Author URI: https://liip.ch
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: animate-blocks
 * Domain Path: /languages/
 *
 * @package animate-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define ANIMATE_BLOCKS_PLUGIN_FILE.
if ( ! defined( 'ANIMATE_BLOCKS_PLUGIN_FILE' ) ) {
	define( 'ANIMATE_BLOCKS_PLUGIN_FILE', __FILE__ );
}

// Include the main AnimateBlocks class.
if ( ! class_exists( \AnimateBlocks\AnimateBlocks::class ) ) {
	require_once plugin_dir_path( ANIMATE_BLOCKS_PLUGIN_FILE ) . 'src/class-animate-blocks.php';
}

// Initialize plugin
\AnimateBlocks\AnimateBlocks::instance();
