import gql from 'graphql-tag';

export const FETCH_IF_VIDEO_EXIST_QUERY = gql`
	query getVideo($url: String!) {
		getVideo(url: $url) {
			# videoID
			title
			url
			thumbnail
			tags
		}
	}
`;
