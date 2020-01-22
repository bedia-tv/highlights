import gql from 'graphql-tag';

export const SUBMIT_VIDEO_MUTATION = gql`
	mutation CreateNewHilight($input: HighlightInput!) {
		createHighlight(input: $input) {
			ok
			highlight {
				highlightName
				tags
			}
		}
	}
`;
