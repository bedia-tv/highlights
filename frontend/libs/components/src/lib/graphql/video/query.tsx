import gql from 'graphql-tag';

export const FETCH_IF_VIDEO_EXIST_QUERY = gql`
	query Video($url: String!) {
		video(url: $url) {
			title
			thumbnail
			tags
		}
	}
`;
