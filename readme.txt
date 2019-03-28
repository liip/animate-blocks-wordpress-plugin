=== Animate Blocks ===
Contributors: liip, tschortsch
Donate link: https://liip.ch/
Tags: gutenberg, blocks, animations
Requires at least: 5.0
Tested up to: 5.1.1
Requires PHP: 5.6
Stable tag: 1.0.1
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Animate Gutenberg blocks plugin for WordPress.

== Description ==
Animate Gutenberg blocks when they scroll into view.

* Works with all existing Gutenberg blocks
* Choose from 27 different animations
* Configure animation with custom delays, offsets and durations
* Based on [AOS Animate On Scroll Library](http://michalsnik.github.io/aos/)

= Requirements =
* WordPress >= 5.0
* PHP >= 5.6

= Further Information =

* Documentation: [https://github.com/liip/animate-blocks-wordpress-plugin/blob/master/README.md](https://github.com/liip/animate-blocks-wordpress-plugin/blob/master/README.md)
* WordPress Plugin: [https://wordpress.org/plugins/animate-blocks/](https://wordpress.org/plugins/animate-blocks/)
* GitHub Repository: [https://github.com/liip/animate-blocks-wordpress-plugin](https://github.com/liip/animate-blocks-wordpress-plugin)
* Changelog: [https://github.com/liip/animate-blocks-wordpress-plugin/releases](https://github.com/liip/animate-blocks-wordpress-plugin/releases)
* Issue tracker: [https://github.com/liip/animate-blocks-wordpress-plugin/issues](https://github.com/liip/animate-blocks-wordpress-plugin/issues)

== Installation ==

1. Upload the `animate-blocks` directory into the `/wp-content/plugins/` directory
1. Activate the plugin through the `Plugins` menu in WordPress
1. Add `Animate Blocks` block around other block in Gutenberg editor

== Frequently Asked Questions ==

= How does it work? =

Animate blocks is based on the `InnerBlocks` feature of Gutenberg. It wraps the blocks which should be animated. You can add as many blocks inside this wrapper block as you want.

= Have you found a bug or do you have a feature request? =

Please create a new GitHub issue and let us know: [https://github.com/liip/animate-blocks-wordpress-plugin/issues](https://github.com/liip/animate-blocks-wordpress-plugin/issues)

== Screenshots ==

1. Animate Blocks in Gutenberg editor

== Changelog ==

= 1.0.1 =

* [BUGFIX] Fix rendering of data-attributes when default options are changed.

= 1.0.0 =

* Initial release of this plugin
