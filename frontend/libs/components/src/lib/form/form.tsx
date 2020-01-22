import React, { useState } from 'react';
import {
  FormContainer,
  Input,
  Label,
  FieldBox,
  VideoPreviewBox,
  Button,
  ButtonContainer,
  ThumbnailsBox,
  ImageBox
} from './form.style';
import {TagList} from './tags.component';
import PreviewPlayer from './preview-player/preview-player.component';

import useForm from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  FETCH_IF_VIDEO_EXIST_QUERY,
  SUBMIT_VIDEO_MUTATION
} from '../graphql/video';

interface Props {
  url: string;
  title?: string;
}

interface VideoInformationData {
  url: string;
  title: string;
  tags: string;
  thumbnail: string;
}

export const Form: React.FC<Props> = ({ url, title = null }) => {
  console.log(url);
  const { register, handleSubmit } = useForm<VideoInformationData>();
  const [titleValue, setTitleValue] = useState(title || '');
  const [
    submitVideo,
    { data: submissionResult, error: submissionError, loading: submissionLoading }
  ] = useMutation(SUBMIT_VIDEO_MUTATION);
  
  const { loading, data: videoQueryResult, error } = useQuery(FETCH_IF_VIDEO_EXIST_QUERY, {
    variables: {
      url: url
    }
  });

  const onSubmit = async (values: VideoInformationData) => {
    const result = await submitVideo({
      variables: {
        input: {
          url: values.url,
          tags: values.tags,
          highlightName: values.title
        }
      }
    });
    console.log(result);
  };

  if (loading || submissionLoading) return <p>loading...</p>;
  if (error || submissionError) return <p>Error...</p>;

  if (submissionResult) {
    return (
      <FormContainer>
        <h1>
          Submission Succeeded. 
        </h1>  
      </FormContainer>
    );
  } else if (videoQueryResult) {

    const {video: {thumbnail, tags}} = videoQueryResult;
    
    return (
      <FormContainer >
        <form onSubmit={handleSubmit(onSubmit)}>
        <FieldBox>
          <Label>Title</Label>
          <Input
            defaultValue={titleValue}
            name="title"
            type="text"
            onChange={e => setTitleValue(e.target.value)}
          />
        </FieldBox>
        <FieldBox>
          <Label>Thumbnail</Label>
          <ThumbnailsBox>
            <ImageBox>
              <img src={thumbnail} alt="thumnails" />
            </ImageBox>
          </ThumbnailsBox>
        </FieldBox>
        <FieldBox>
          <Label>Url</Label>
          <Input name="url" type="text" defaultValue={url} readOnly />
        </FieldBox>
        <FieldBox>
          <Label>Preview</Label>
          <PreviewPlayer
            url={url}
            controls={true}
            width="100%"
            height="100%"
            startTime={60}
            endTime={65}
          />
        </FieldBox>
        <FieldBox>
          <Label>Tags</Label>
          <TagList tags={tags}/>
          {/* <Input name="tags" value={tags} type="text" readOnly /> */}
        </FieldBox>
        <ButtonContainer>
          <Button primary>Submit</Button>
          <Button>Cancel</Button>
        </ButtonContainer>
        </form>
      </FormContainer>
    );
  }
};
