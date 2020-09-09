<?php
/**
 * Checklist
 *
 * @link       https://www.cncf.io/
 * @since      1.1.0
 * @package    Lf_Mu
 * @subpackage Lf_Mu/admin/partials
 */

use Altis\Workflow\PublicationChecklist as Checklist;
use Altis\Workflow\PublicationChecklist\Status;

// Check for video in case studies.
// add_action( 'altis.publication-checklist.register_prepublish_checks', 'video_present' ); // phpcs:ignore.

// Checks featured image size.
add_action( 'altis.publication-checklist.register_prepublish_checks', 'check_featured_image' );

// checks for topics on webinar.
add_action( 'altis.publication-checklist.register_prepublish_checks', 'webinar_topics' );

/**
 * Check for video present (not required).
 */
function video_present() {
	$video_block_names = array(
		'core/video',
		'core-embed/videopress',
		'core-embed/vimeo',
		'core-embed/youtube',
	);

	Checklist\register_prepublish_check(
		'video',
		array(
			'type'      => array(
				'lf_case_study',
				'lf_case_study_cn',
			),
			'run_check' => function ( array $post ) use ( $video_block_names ) : Status {
				$blocks       = parse_blocks( $post['post_content'] );
				$video_blocks = array_filter(
					$blocks,
					function ( $block ) use ( $video_block_names ) {
						return in_array( $block['blockName'], $video_block_names, true );
					}
				);

				if ( count( $video_blocks ) > 0 ) {
					return new Status( Status::COMPLETE, __( 'Added a video to the case study', 'Lf_Mu' ) );
				}

				return new Status( STATUS::INFO, __( 'Add a video to the case study', 'Lf_Mu' ) );
			},
		)
	);
}

/**
 * Check for featured image on posts.
 */
function check_featured_image() {
	Checklist\register_prepublish_check(
		'featured_image',
		array(
			'type'      => array(
				'post',
			),
			'run_check' => function ( array $post, array $meta, array $terms ) : Status {

				if ( ! has_post_thumbnail() ) {
					return new Status( Status::INCOMPLETE, __( 'Add a featured image to the post', 'Lf_Mu' ) );
				} else {

					$img    = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );

					$width  = $img[1];
					$height = $img[2];

					$required_width  = 1200;
					$required_height = 630;

					$filetype = wp_check_filetype( wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' )[0] );

					if ( has_category( 'news' ) ) {
						return new Status( Status::COMPLETE, __( 'Add a featured image to the post', 'Lf_Mu' ) );
					} else {

						if ( 'svg' == $filetype['ext'] ) {
							return new Status( Status::INCOMPLETE, __( 'Add a featured image that is not an SVG', 'Lf_Mu' ) );
						} else {
							if ( $width >= $required_width && $height >= $required_height ) {
								return new Status( Status::COMPLETE, __( 'Add a featured image at least 1200x630 dimensions', 'Lf_Mu' ) );
							} else {
								return new Status( Status::INCOMPLETE, __( 'Add a featured image at least 1200x630 dimensions', 'Lf_Mu' ) );
							}
						}
					}
				}

				return new Status( Status::INCOMPLETE, __( 'Add a featured image to begin checks', 'Lf_Mu' ) );
			},
		)
	);
}

/**
 * Check topics on webinar.
 */
function webinar_topics() {
	Checklist\register_prepublish_check(
		'webinar_topic_check',
		array(
			'type'      => array(
				'lf_webinar',
			),
			'run_check' => function ( array $post, array $meta, array $terms ) : Status {

				if ( empty( $terms['lf-topic'] ) ) {
					return new Status( Status::INCOMPLETE, __( 'Add topics to the webinar', 'Lf_Mu' ) );
				}
				return new Status( Status::COMPLETE, __( 'Add topics to the webinar', 'Lf_Mu' ) );

			},
		)
	);
}
