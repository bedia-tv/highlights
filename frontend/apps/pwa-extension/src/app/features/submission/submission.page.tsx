import React from 'react'
import { Container } from '../../app.style';
import { userQueryParams } from '../../hooks/use-query-params';
import { Form } from '@frontend/components';

export default function SubmissionPage() {
    const query = userQueryParams();
    const title: string = query.get('title');
    const text: string = query.get('text');

    return (
      <Container>
        <h1>Video Submission</h1>
        <Form url={text} title={title}/>
      </Container>
    )
}
