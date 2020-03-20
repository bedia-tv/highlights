import React, {useState} from 'react';
import {Container, Title} from "./form.style";
import useForm from "react-hook-form";

type Video = {
    title: string;
    url: string;
    thumbnail: string;
    tagList: string[];
}

type Highlight = {

}

type Props = {
    defaultValue?: Video;
    submit: (payload: Highlight) => void;
}

type State = Video & {
    interval: {
        startTime: number,
        endTime: number
    }
}

export const Form: React.FC<Props> = (props) => {
    const {
        defaultValue: {title, url, thumbnail, tagList},
        submit
    } = props;

    const [localState, setLocalState] = useState<State>({
        ...props.defaultValue,
        interval: {
            startTime: 0,
            endTime: 0
        }
    });

    const {register, handleSubmit} = useForm();
    const onUpdate = (updatePayload: State) => {
        setLocalState({
            ...localState,
            ...updatePayload
        });
    };

    const onSubmit = (payload) => {

        submit(payload)
    }

    return (
        <Container>
            <Title>Video Submission</Title>
        </Container>
    )
};
