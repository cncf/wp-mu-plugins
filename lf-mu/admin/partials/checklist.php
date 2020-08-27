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
add_action( 'altis.publication-checklist.register_prepublish_checks', 'video_present' );

// Checks featured image size.
add_action( 'altis.publication-checklist.register_prepublish_checks', 'check_featured_image' );

// checks for topics on webinar.
add_action( 'altis.publication-checklist.register_prepublish_checks', 'webinar_topics' );

/**
 * Check for video present (not required).
 */
function video_present() {
	$video_block_names = [
		'core/video',
		'core-embed/videopress',
		'core-embed/vimeo',
		'core-embed/youtube',
	];

	Checklist\register_prepublish_check(
		'video',
		[
			'type'      => [
				'lf_case_study',
				'lf_case_study_cn',
			],
			'run_check' => function ( array $post ) use ( $video_block_names ) : Status {
				$blocks       = parse_blocks( $post['post_content'] );
				$video_blocks = array_filter(
					$blocks,
					function ( $block ) use ( $video_block_names ) {
						return in_array( $block['blockName'], $video_block_names, true );
					}
				);

				if ( count( $video_blocks ) > 0 ) {
					return new Status( Status::COMPLETE, __( 'Add a video to the case study', 'Lf_Mu' ) );
				}

				return new Status( STATUS::INFO, __( 'Add a video to the case study', 'Lf_Mu' ) );
			},
		]
	);
}

/**
 * Check for featured image on posts.
 */
function check_featured_image() {
	Checklist\register_prepublish_check(
		'featured_image',
		[
			'type'      => [
				'post',
			],
			'run_check' => function ( array $post, array $meta, array $terms ) : Status {

				if ( has_post_thumbnail() ) {

					$img    = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
					$width  = $img[1];
					$height = $img[2];

					$required_width  = 1200;
					$required_height = 630;

					if ( $width >= $required_width && $height >= $required_height ) {
						return new Status( Status::COMPLETE, __( 'Add a featured image at least 1200x630', 'Lf_Mu' ) );
					} else {
						return new Status( Status::INCOMPLETE, __( 'Add a featured image at least 1200x630', 'Lf_Mu' ) );
					}
				}

				return new Status( Status::INCOMPLETE, __( 'Add a featured image at least 1200x630', 'Lf_Mu' ) );
			},
		]
	);
}

/**
 * Check topics on webinar.
 */
function webinar_topics() {
	Checklist\register_prepublish_check(
		'webinar_topic_check',
		[
			'type'      => [
				'lf_webinar',
			],
			'run_check' => function ( array $post, array $meta, array $terms ) : Status {

				if ( empty( $terms['lf-topic'] ) ) {
					return new Status( Status::INCOMPLETE, __( 'Add topics to the webinar', 'Lf_Mu' ) );
				}
				return new Status( Status::COMPLETE, __( 'Add topics to the webinar', 'Lf_Mu' ) );

			},
		]
	);
}
