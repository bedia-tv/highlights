import gql from 'graphql-tag';

export const SUBMIT_VIDEO_MUTATION = gql`
	mutation submitVideo(
		$title: String!
		$url: String!
		# $startTime: String!
		# $endTime: String!
		# $comment: String!
	) {
		submitVideo(
			inputData: {
				title: $title
				url: $url
				# startTime: $startTime
				# endTime: $endTime
				# comment: $comment
			}
		)
	}
`;
