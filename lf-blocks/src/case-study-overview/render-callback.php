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
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @return object block_content Output.
 */
function lf_case_study_overview_render_callback( $attributes, $content ) {

	// get the classes set from the block if any.
	$classes = isset( $attributes['className'] ) ? $attributes['className'] : '';

	// not on a case study page.
	if ( ! is_singular( array( 'lf_case_study', 'lf_case_study_cn' ) ) ) {
		return;
	}

	if ( is_singular( 'lf_case_study_cn' ) ) {
		// get chinese content.
		$industries = get_the_terms( get_the_ID(), 'lf-industry-cn' );
		foreach ( $industries as $industry ) {
			$industry->name = preg_replace( '/(.+)(\(\D+\))/', '$1', $industry->name );
		}

		$location = preg_replace( '/(.+)(\(\D+\))/', '$1', Lf_Utils::get_term_names( get_the_ID(), 'lf-country-cn', true ) );
		$location_slug = Lf_Utils::get_term_slugs( get_the_ID(), 'lf-country-cn', true );

		$cloud_types = get_the_terms( get_the_ID(), 'lf-cloud-type-cn' );
		foreach ( $cloud_types as $cloud_type ) {
			$cloud_type->name = preg_replace( '/(.+)(\(\D+\))/', '$1', $cloud_type->name );
		}

		$product_type = preg_replace( '/(.+)(\(\D+\))/', '$1', Lf_Utils::get_term_names( get_the_ID(), 'lf-product-type-cn', true ) );
		$product_type_slug = Lf_Utils::get_term_slugs( get_the_ID(), 'lf-product-type-cn', true );

		$challenges = get_the_terms( get_the_ID(), 'lf-challenge-cn' );
		foreach ( $challenges as $challenge ) {
			$challenge->name = preg_replace( '/(.+)(\(\D+\))/', '$1', $challenge->name );
		}

		$company_text      = '公司';
		$industry_text     = '行业';
		$location_text     = '地点';
		$cloud_type_text   = '云类型';
		$product_type_text = '产品类型';
		$challenge_text    = '挑战';
		$date_published    = '出版';

		$url_type = '-cn';

	} else {

		// get english content.
		$industries = get_the_terms( get_the_ID(), 'lf-industry' );

		$location = Lf_Utils::get_term_names( get_the_ID(), 'lf-country', true );
		$location_slug = Lf_Utils::get_term_slugs( get_the_ID(), 'lf-country', true );

		$cloud_types = get_the_terms( get_the_ID(), 'lf-cloud-type' );

		$product_type = Lf_Utils::get_term_names( get_the_ID(), 'lf-product-type', true );
		$product_type_slug = Lf_Utils::get_term_slugs( get_the_ID(), 'lf-product-type', true );

		$challenges = get_the_terms( get_the_ID(), 'lf-challenge' );

		$company_text      = 'Company';
		$industry_text     = 'Industry';
		$location_text     = 'Location';
		$cloud_type_text   = 'Cloud Type';
		$product_type_text = 'Product Type';
		$challenge_text    = 'Challenges';
		$date_published    = 'Published';

		$url_type = '';
	}

	ob_start();
	?>
<section
	class="wp-block-lf-case-study-overview <?php echo esc_html( $classes ); ?>">

	<div class="case-study-overview">

		<div class="case-study-intro-wrapper">
		<?php echo wp_kses_post( $content ); ?>
		</div>

		<div class=" case-study-overview-wrapper">

		<div>
				<p><?php echo esc_html( $company_text ); ?></p>
				<a class="skew-box secondary" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</div>

			<?php
			if ( ! empty( $challenges ) && ! is_wp_error( $challenges ) ) :
				?>
			<div>
				<p><?php echo esc_html( $challenge_text ); ?></p>
				<?php foreach ( $challenges as $challenge ) { ?>
				<a class="skew-box secondary" title="See more case studies with a <?php echo esc_attr( $challenge->name ); ?> challenge" href="/case-studies<?php echo esc_attr( $url_type ); ?>?_sft_lf-challenge<?php echo esc_attr( $url_type ); ?>=<?php echo esc_attr( $challenge->slug ); ?>"><?php echo esc_html( $challenge->name ); ?></a>
				<?php } ?>
			</div>
				<?php
			endif;

			if ( ! empty( $industries ) && ! is_wp_error( $industries ) ) :
				?>
			<div>
				<p><?php echo esc_html( $industry_text ); ?></p>
				<?php foreach ( $industries as $industry ) { ?>
				<a class="skew-box secondary" title="See more case studies from <?php echo esc_attr( $industry->name ); ?>" href="/case-studies<?php echo esc_attr( $url_type ); ?>?_sft_lf-industry<?php echo esc_attr( $url_type ); ?>=<?php echo esc_attr( $industry->slug ); ?>"><?php echo esc_html( $industry->name ); ?></a>
				<?php } ?>
			</div>
				<?php
				endif;

			if ( ! empty( $location ) && ! is_wp_error( $location ) ) :
				?>
			<div>
				<p><?php echo esc_html( $location_text ); ?></p>
				<a class="skew-box secondary" title="See more case studies from <?php echo esc_attr( $location ); ?>" href="/case-studies<?php echo esc_attr( $url_type ); ?>?_sft_lf-country<?php echo esc_attr( $url_type ); ?>=<?php echo esc_attr( $location_slug ); ?>"><?php echo esc_html( $location ); ?></a>
			</div>
				<?php
					endif;

			if ( ! empty( $cloud_types ) && ! is_wp_error( $cloud_types ) ) :
				?>
			<div>
				<p><?php echo esc_html( $cloud_type_text ); ?></p>
				<?php foreach ( $cloud_types as $cloud_type ) { ?>
				<a class="skew-box secondary" title="See more case studies with a <?php echo esc_attr( $cloud_type->name ); ?> cloud type" href="/case-studies<?php echo esc_attr( $url_type ); ?>?_sft_lf-cloud-type<?php echo esc_attr( $url_type ); ?>=<?php echo esc_attr( $cloud_type->slug ); ?>"><?php echo esc_html( $cloud_type->name ); ?></a>
				<?php } ?>
			</div>
				<?php
					endif;

			if ( ! empty( $product_type ) && ! is_wp_error( $product_type ) ) :
				?>
			<div>
				<p><?php echo esc_html( $product_type_text ); ?></p>
				<a class="skew-box secondary" title="See more case studies with <?php echo esc_attr( $product_type ); ?> product type" href="/case-studies<?php echo esc_attr( $url_type ); ?>?_sft_lf-product-type<?php echo esc_attr( $url_type ); ?>=<?php echo esc_attr( $product_type_slug ); ?>"><?php echo esc_html( $product_type ); ?></a>
			</div>
				<?php
					endif;
			?>
			<div>
				<p><?php echo esc_html( $date_published ); ?></p>
				<a class="skew-box secondary" href="<?php the_permalink(); ?>"><?php the_date(); ?></a>
			</div>

		</div>
	</div>
</section>
	<?php
	$block_content = ob_get_clean();
	return $block_content;
}
