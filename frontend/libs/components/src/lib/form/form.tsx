import React, { useState } from 'react';
import { ButtonSection, Container, Title } from './form.style';
import useForm from 'react-hook-form';
import { TextInput } from '../text-input/text-input';
import { Thumbnail } from '../thumnail/thumbnail';
import { TagList } from '../tags/tags';
import { Button } from '../button/button';
import { Video, Highlight } from '../types';
import { Preview } from '../preview';
import { useHighlightMutation } from '../graphql';
import { useFormState } from '../reducer';
import { Error, Success } from '../dialog';
import { Loading } from '../loading';

type Props = {
  defaultValue?: Video;
};

type State = Video & {
  interval: {
    startTime: number;
    endTime: number;
  };
};

const Form: React.FC<Props> = props => {
  const {
    defaultValue: { title, url, thumbnail, tagList }
  } = props;

  const [localState, setLocalState] = useState<State>({
    ...props.defaultValue,
    interval: {
      startTime: 0,
      endTime: 0
    }
  });

  const { register, handleSubmit } = useForm();
  const onUpdate = (updatePayload: Partial<State>) => {
    setLocalState({
      ...localState,
      ...updatePayload
    });
  };

  const { submitHighlight, error, data } = useHighlightMutation();
  const [_, dispatch] = useFormState();

  const onSubmit = () => {
    const highlight: Highlight = {
      url: localState.url,
      videoTitle: localState.title,
      tags: localState.tagList,
      startTime: localState.interval.startTime,
      endTime: localState.interval.endTime,
      comments: '',
      highlightName: localState.title
    };
    submitHighlight(highlight);
  };

  if (data) {
    return (
      <Success onDismiss={() => dispatch({ type: 'RESET' })}/>
    );
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>Video Submission</Title>
      <TextInput
        name="title"
        label={'Video Title'}
        defaultValue={title}
        ref={register({ required: true })}
      />
      <TextInput
        name="url"
        label={'URL'}
        defaultValue={url}
        ref={register({ required: true })}
      />
      <Thumbnail url={thumbnail}/>
      <Preview url={url} onUpdate={onUpdate}/>
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
  );
};

export {
  Form, Container
};
