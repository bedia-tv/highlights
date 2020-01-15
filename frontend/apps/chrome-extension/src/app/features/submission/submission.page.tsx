import React, {useState, useEffect} from 'react';
import {Container} from './submission.page.style';
import {useActiveTabLocation} from '../../hooks';
import {Form} from '@frontend/components';

const REQUEST_VIDEO_INFORMATION = 'request-video-information';
const FETCHED_VIDEO_INFORMATION = 'fetched-video-information';
const EXTENSION_OPENED = 'extension-opened';

export const SubmissionPage = () => {
    const location = useActiveTabLocation();
    const [title, setTitle] = useState<string>('');
    const [videoInformation, setVideoInformation] = useState(null);

    useEffect(() => {
        console.log("Extension Opened...");
        chrome.runtime.sendMessage({
            message: EXTENSION_OPENED
        })
    }, []);


    useEffect(() => {
        console.log('Listening for event...');
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.message === FETCHED_VIDEO_INFORMATION) {
                const {title, currentTime} = request;
                setVideoInformation({title, currentTime});
            }
        });
        return () => {
        }
    });


    return (
        <Container>
            <h1>Video Submission</h1>
            <Form url={location}/>
        </Container>
    )
};
