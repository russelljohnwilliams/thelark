<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package upwiththelarks
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'upwiththelarks' ); ?></a>

		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding">

				<div class="site-header-content">
					<div class="contact-and-title">
						<div class="site-title"><a><?php bloginfo( 'name' ); ?></a></div>
						<div class='contact-details'><a href="https://www.google.co.uk/maps/place/Skylark/@55.9518272,-3.1124321,17.84z/data=!4m12!1m6!3m5!1s0x0:0xe8e7143a29c586a3!2sSkylark!8m2!3d55.951901!4d-3.11118!3m4!1s0x0:0xe8e7143a29c586a3!8m2!3d55.951901!4d-3.11118" target="_blank">find / </a><a href="tel:0131 629 3037">call / </a><a href="http://m.me/SkylarkPorty" target="_blank">write</a></div>
					</div>
					<div class="skylark-header-image">	<?php the_header_image_tag(); ?></div>


				</div><!-- .site-header-content -->
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'upwiththelarks' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
		</header><!-- #masthead -->

		<div id="content" class="site-content">
