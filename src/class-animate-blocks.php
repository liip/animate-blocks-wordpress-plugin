<?php
/**
 * Main class
 *
 * @package animate-blocks
 */

namespace AnimateBlocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AnimateBlocks
 */
class AnimateBlocks {

	/**
	 * AnimateBlocks instance.
	 *
	 * @var AnimateBlocks
	 */
	protected static $_instance = null;

	/**
	 * The plugin version number.
	 *
	 * @var string
	 */
	public $_version = '1.0.0';

	/**
	 * The plugin token.
	 *
	 * @var string
	 */
	public $_token = 'animate-blocks';

	/**
	 * The plugin assets directory.
	 *
	 * @var string
	 */
	public $assets_dir;

	/**
	 * The plugin assets URL.
	 *
	 * @var string
	 */
	public $assets_url;

	/**
	 * AnimateBlocks constructor.
	 */
	public function __construct() {
		$this->define_constants();
		$this->init_plugin_environment();
		$this->init_hooks();
	}

	/**
	 * Define plugin constants.
	 */
	protected function define_constants() {
		if ( ! defined( 'ANIMATE_BLOCKS_ABSPATH' ) ) {
			define( 'ANIMATE_BLOCKS_ABSPATH', trailingslashit( dirname( ANIMATE_BLOCKS_PLUGIN_FILE ) ) );
		}
	}

	/**
	 * Initializes plugin environment variables
	 */
	protected function init_plugin_environment() {
		// Load plugin environment variables
		$this->assets_dir = ANIMATE_BLOCKS_ABSPATH . 'dist';
		$this->assets_url = esc_url( trailingslashit( plugins_url( '/dist/', ANIMATE_BLOCKS_PLUGIN_FILE ) ) );
	}

	/**
	 * Initializes hooks.
	 */
	protected function init_hooks() {
		// Editor assets
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );

		// Frontend assets
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );

		// Load textdomain
		add_action( 'plugins_loaded', array( $this, 'load_plugin_textdomain' ) );

		// check version number on each request
		add_action( 'init', array( $this, 'check_version' ) );
	}

	/**
	 * Load editor block assets.
	 */
	public function enqueue_block_editor_assets() {
		// Scripts
		wp_enqueue_script(
			$this->_token . '-js', // Handle.
			esc_url( $this->assets_url ) . 'blocks.build.js', // block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
			$this->_version,
			true // Enqueue the script in the footer.
		);
	}

	public function wp_enqueue_scripts() {
		// Styles
		wp_enqueue_style(
			$this->_token . '-aos-styles', // Handle.
			esc_url( $this->assets_url ) . 'aos-3.0.0-beta.6/aos.css',
			array(),
			'3.0.0-beta.6'
		);

		// Scripts
		wp_enqueue_script(
			$this->_token . '-aos-js', // Handle.
			esc_url( $this->assets_url ) . 'aos-3.0.0-beta.6/aos.js',
			array(), // Dependencies, defined above.
			'3.0.0-beta.6',
			true // Enqueue the script in the footer.
		);
		wp_enqueue_script(
			$this->_token . '-aos-init-js', // Handle.
			esc_url( $this->assets_url ) . 'aos-init.js',
			array( $this->_token . '-aos-js' ), // Dependencies, defined above.
			$this->_version,
			true // Enqueue the script in the footer.
		);
	}

	/**
	 * Load plugin textdomain
	 */
	public function load_plugin_textdomain() {
		$domain = 'animate-blocks'; // textdomain can't be stored in class variable since it must be a single string literal
		load_plugin_textdomain( $domain, false, dirname( plugin_basename( ANIMATE_BLOCKS_PLUGIN_FILE ) ) . '/languages/' );
	}

	/**
	 * Main AnimateBlocks Instance
	 * Ensures only one instance of AnimateBlocks is loaded or can be loaded.
	 *
	 * @return AnimateBlocks Plugin instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Cloning is forbidden.
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?' ), esc_attr( $this->_version ) );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?' ), esc_attr( $this->_version ) );
	}

	/**
	 * Checks plugin version.
	 *
	 * This check is done on all requests and runs if the versions do not match.
	 */
	public function check_version() {
		if ( ! defined( 'IFRAME_REQUEST' ) && get_option( $this->_token . '_version' ) !== $this->_version ) {
			$this->log_version_number();
			do_action( $this->_token . '_updated' );
		}
	}

	/**
	 * Log the plugin version number in database.
	 */
	protected function log_version_number() {
		delete_option( $this->_token . '_version' );
		update_option( $this->_token . '_version', $this->_version );
	}

}
