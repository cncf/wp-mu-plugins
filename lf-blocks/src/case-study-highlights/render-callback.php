<?php
/**
 * Render Callback
 *
 * @package WordPress
 * @subpackage lf-blocks
 * @since 1.0.0
 */

/**
 * Render the block
 *
 * @param array $attributes Block attributes.
 * @return object block_content Output.
 */
function lf_case_study_highlights_render_callback( $attributes ) {
	// get the classes set from the block if any.
	$classes = isset( $attributes['className'] ) ? $attributes['className'] : '';
	// get content.
	$heading_text01 = isset( $attributes['headingText01'] ) ? $attributes['headingText01'] : '';
	$heading_text02 = isset( $attributes['headingText02'] ) ? $attributes['headingText02'] : '';
	$heading_text03 = isset( $attributes['headingText03'] ) ? $attributes['headingText03'] : '';
	$smaller_text01 = isset( $attributes['smallerText01'] ) ? $attributes['smallerText01'] : '';
	$smaller_text02 = isset( $attributes['smallerText02'] ) ? $attributes['smallerText02'] : '';
	$smaller_text03 = isset( $attributes['smallerText03'] ) ? $attributes['smallerText03'] : '';

	$projects = get_the_terms( get_the_ID(), 'lf-project' );

	// change the layout if there are more than 6 projects.
	$is_double_row = ( ! empty( $projects ) && ! is_wp_error( $projects ) & count( $projects ) > 6 ) ? ' double-row' : '';

	ob_start();
	?>
<section class="wp-block-lf-case-study-highlights <?php echo esc_html( $classes ); ?>">

<div class="case-study-highlights">
<div class="container case-study-highlights-wrapper <?php echo esc_html( $is_double_row ); ?>">

	<?php if ( ! empty( $projects ) && ! is_wp_error( $projects ) ) { ?>
<div class="projects-column">
<p>
		<?php
		if ( 'lf_case_study_cn' === get_post_type() ) {
			echo '使用的';
			echo esc_html( strtoupper( lf_blocks_get_site() ) );
			echo '项目';
		} else {
			echo esc_html( strtoupper( lf_blocks_get_site() ) );
			echo ' Projects Used';
		}
		?>
</p>
<div class="cs-project-icons">
		<?php
		foreach ( $projects as $project ) {
			?>
<div class="cs-project-icon">
<img src="<?php echo esc_url( get_stylesheet_directory_uri() ) . '/images/projects/' . esc_html( $project->slug ) . '-icon-black.svg'; ?>"
alt="<?php echo esc_html( $project->name ); ?>">
</div>
			<?php
		}
		?>
</div>
</div>
		<?php
	}
	?>
<div class="case-study-highlight-text">
	<?php if ( $heading_text01 ) : ?>
<p><?php echo wp_kses_post( $heading_text01 ); ?></p>
		<?php
endif;
	if ( $smaller_text01 ) :
		?>
<h3><?php echo wp_kses_post( $smaller_text01 ); ?></h3>
<?php endif; ?>
</div>
<div class="case-study-highlight-text">
	<?php if ( $heading_text02 ) : ?>
<p><?php echo wp_kses_post( $heading_text02 ); ?></p>
		<?php
endif;
	if ( $smaller_text02 ) :
		?>
<h3><?php echo wp_kses_post( $smaller_text02 ); ?></h3>
<?php endif; ?>
</div>
<div class="case-study-highlight-text">
	<?php if ( $heading_text03 ) : ?>
<p><?php echo wp_kses_post( $heading_text03 ); ?></p>
		<?php
endif;
	if ( $smaller_text03 ) :
		?>
<h3><?php echo wp_kses_post( $smaller_text03 ); ?></h3>
<?php endif; ?>
</div>
</div></div>

</section>
	<?php
	$block_content = ob_get_clean();
	return $block_content;
}
