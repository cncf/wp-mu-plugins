/**
 * Inspector
 *
 * @package WordPress
 * @since 1.0.0
 *
 * @tags
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceAfter
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceBefore
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.IncorrectExact
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.Incorrect
 * @phpcs:disable PEAR.Functions.FunctionCallSignature.Indent
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {
	render() {
		const { attributes, setAttributes } = this.props;

		function getYouTubeId( url ) {
			// regex to extract YouTube ID.
			const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
			const els = url.match( regex );
			return els[ 1 ];
		}

		function getAndSetYouTubeId( changes ) {
			setAttributes(
				{
					youtubeUrl: changes,
					youtubeId: getYouTubeId( changes ),
				}
			);
		}

		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Settings' ) } >
					<TextControl
						label={ __( 'YouTube URL' ) }
						help="Enter the YouTube URL for the video to embed and we will extract the YouTube video ID."
						value={ attributes.youtubeUrl || '' }
						onChange={ getAndSetYouTubeId }
					/>
					<TextControl
						label={ __( 'YouTube ID' ) }
						help="Enter the YouTube video ID here, or paste your URL above and the ID will be extracted automatically."
						value={ attributes.youtubeId || '' }
						onChange={ ( value ) => {
							setAttributes( { youtubeId: value } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
