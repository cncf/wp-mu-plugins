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
function lf_image_hero_render_callback( $attributes ) {

	// get the classes set from the block if any.
	$classes = isset( $attributes['className'] ) ? $attributes['className'] : '';

	// grab the selected image ID.
	$selected_image_id = isset( $attributes['imgId'] ) ? $attributes['imgId'] : '';

	// hero height.
	$hero_height = isset( $attributes['heroHeight'] ) ? intval( $attributes['heroHeight'] ) : '400';

	// hero height for mobile - 75% of chosen height.
	$hero_height_mobile = ( $hero_height / 100 ) * 75;

	if ( ! is_integer( $selected_image_id ) ) {
		return;
	}

	ob_start();

	?>
<style>
.image-hero {
height: <?php echo esc_html( $hero_height_mobile ) . 'px'; ?>
}
@media (min-width: 800px) {
.image-hero {
height: <?php echo esc_html( $hero_height ) . 'px'; ?>
}
}
</style>

<section
	class="image-hero background-image-wrapper alignfull <?php echo esc_html( $classes ); ?>" height="<?php echo esc_html( $hero_height ) . 'px'; ?>">
	<figure class="background-image-figure">
		<?php
		LF_Utils::display_responsive_images( $selected_image_id, 'ihero-1400', '100vw' );
		?>
	</figure>
</section>

	<?php
	$block_content = ob_get_clean();
	return $block_content;
}
