import * as React from 'react';
import {useMutation} from '@apollo/react-hooks';
import { SUBMIT_VIDEO_MUTATION } from '../video';
import {useState} from 'react';
import {Highlight, Video} from '../../types';


export const useHighlightMutation = () => {

    const [createNewHighlight, {error, data}] = useMutation(SUBMIT_VIDEO_MUTATION)

    const submitHighlight = ( newHighlight: Highlight ) => {
        createNewHighlight({
            variables: {
                input: newHighlight
            }
        });
    };

    return {submitHighlight, error, data};
}