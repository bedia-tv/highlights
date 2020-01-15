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
import PreviewPlayer from './preview-player/preview-player.component';

import useForm from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_IF_VIDEO_EXIST_QUERY, SUBMIT_VIDEO_MUTATION } from '../graphql/video';

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

interface GetVideoData {
  getVideo: VideoInformationData;
}

interface GetVideoVariables {
  url: string;
}

export const Form: React.FC<Props> = ({ url, title = null}) => {
  console.log(url);
  const { register, handleSubmit } = useForm<VideoInformationData>();
  const [titleValue, setTitleValue] = useState(title || '');

  const { loading, data, error } = useQuery(FETCH_IF_VIDEO_EXIST_QUERY, {
    variables: {
      url: url
    }
  });

  const onSubmit = async (values: VideoInformationData) => {
    // await submitForm({
    //     variables: {
    //         ...values,
    //         ...(data || {})
    //     }
    // })
  };
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FieldBox>
          <Label>Title</Label>
          <Input value={titleValue} name="url" type="text" readOnly/>
        </FieldBox>
        <FieldBox>
          <Label>Thumbnail</Label>
          <ThumbnailsBox>
            <ImageBox>
              <img src={data.video.thumbnail} alt="cat"/>
            </ImageBox>
          </ThumbnailsBox>
        </FieldBox>
        <FieldBox>
          <Label>Url</Label>
          <Input name="url" type="text" value={url} readOnly/>
        </FieldBox>
        <FieldBox>
          <Label>Preview</Label>
          <PreviewPlayer
            url={url}
            controls={true}
            width='100%'
            height='100%'
            startTime={60}
            endTime={65}
          />
        </FieldBox>
        <FieldBox>
          <Label>Tags</Label>
          <Input name="tags" value={data.video.tags} type="text"/>
        </FieldBox>
        <ButtonContainer>
          <Button primary>Submit</Button>
          <Button>Cancel</Button>
        </ButtonContainer>
      </FormContainer>

    );
  }
};


