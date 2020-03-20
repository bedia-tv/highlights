import React, {useState} from 'react';
import {ButtonSection, Container, Title} from "./form.style";
import useForm from "react-hook-form";
import {TextInput} from "../text-input/text-input";
import {Thumbnail} from "../thumnail/thumbnail";
import {TagList} from "../tags/tags";
import {Button} from "../button/button";

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
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Title>Video Submission</Title>
            <TextInput
                name="title"
                label={"Video Title"}
                defaultValue={title}
                ref={register({ required: true })}
            />
            <TextInput
                name="url"
                label={"URL"}
                defaultValue={url}
                ref={register({ required: true })}
            />
            <Thumbnail url={thumbnail} />
            <TagList onUpdate={onUpdate} tagList={tagList}/>
            <ButtonSection>
                <Button primary type="submit">
                    submit
                </Button>
                <Button danger type="reset">
                    reset
                </Button>
            </ButtonSection>
        </Container>
    )
};
