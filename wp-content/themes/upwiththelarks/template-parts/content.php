<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package upwiththelarks
 */

?>
<div class="post-wrapper">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="background-image">	

		

			<div class="post-title">
				<?php
				if ( is_single() ) :
					the_title( '<div class="entry-title">', '</div>' );
				else :
					the_title( '<div class="entry-title"><a class="anchor-point" ' . get_permalink()  . '" rel="bookmark">', '</a></div>' );
				endif;

				if ( 'post' === get_post_type() ) : ?>
				<div class="entry-meta">
					<?php upwiththelarks_posted_on(); ?>
				</div><!-- .entry-meta -->
				<?php
				endif; ?>
			</div>
	


				<div class="background-hide">
				
					<?php
					the_content( sprintf(
						/* translators: %s: Name of current post. */
						wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'upwiththelarks' ), array( 'span' => array( 'class' => array() ) ) ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
						) );

					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'upwiththelarks' ),
						'after'  => '</div>',
						) );
						?>
					</div>
				</div>
		

		</article><!-- #post-## -->
	</div>