import gql from 'graphql-tag';

export const SUBMIT_VIDEO_MUTATION = gql`
	mutation createNewHilight($input: HighlightInput!) {
		createHighlight(input: $input) {
			ok
		}
	}
`;
