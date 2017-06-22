<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package upwiththelarks
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php
		
		if ( have_posts() ) :
			if ( is_home() && ! is_front_page() ) : ?>
		<header>
			<h1 class="page-title screen-reader-text">

				// <?php single_post_title(); ?>
			
			</h1>
		</header>

		<?php

		endif;

		/* Start the Loop */
		while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_format() );
				
					endwhile;
				
					the_posts_navigation();
					else :
						get_template_part( 'template-parts/content', 'none' );
				
					endif; ?>
				
				</main><!-- #main -->
			</div><!-- #primary -->
			<div id="viewport">
				<div id="page-wrapper">
					<div class="page-builder home-page"></div>
					
					<?php query_posts('post_type=page&order=ASC'); ?>	
					
					<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

						<div class="page-builder" id=
						
						<?php the_ID(); ?>
						
						>

							

							<?php the_content(); ?>
			

						</div>
						<?php endwhile; endif; ?>
					</div>

				</div>
	<!-- 			<div id="left-button"><</div>
				<div id="right-button">></div> -->
		

			<?php
			get_sidebar();
			get_footer();
