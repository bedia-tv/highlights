import React from 'react';
import { Container } from '../../app.style';
import { userQueryParams } from '../../hooks/use-query-params';
import { Form } from '@frontend/components';

export default function SubmissionPage() {


	/** 
  *  The SubmissionPage fetches url and title of the video
  * and passes that information to the shared (between the extension and PWA) 
  * Form Component in the directory libs/components/src/lib/form
  *
  * @return Form - the shared form component
  */

	const query = userQueryParams();
	const title: string = query.get('title');
	const text: string = query.get('text');

	return (
		<Container>
			<h1>Video Submission</h1>
			<Form url={text} title={title} />
		</Container>
	);
}
