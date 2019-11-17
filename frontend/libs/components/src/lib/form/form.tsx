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

import useForm from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_IF_VIDEO_EXIST_QUERY, SUBMIT_VIDEO_MUTATION } from '../graphql/video';

interface IProps {
  url: string;
  title: string;
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

export const Form = ({ url }) => {
  const { register, handleSubmit } = useForm<VideoInformationData>();
  const [titleValue, setTitleValue] = useState('');

  const { loading, data, error } = useQuery<GetVideoData, GetVideoVariables>(FETCH_IF_VIDEO_EXIST_QUERY, {
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
  if (data) return <p>Submitted!</p>;
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FieldBox>
        <Label>Title</Label>
        <Input value={data.getVideo.title} name="url" type="text"/>
      </FieldBox>
      <FieldBox>
        <Label>Thumbnail</Label>
        <ThumbnailsBox>
          <ImageBox>
            <img src={data.getVideo.thumbnail} alt="cat"/>
          </ImageBox>
        </ThumbnailsBox>
      </FieldBox>
      <FieldBox>
        <Label>Url</Label>
        <Input name="url" type="text" value={url}/>
      </FieldBox>
      <FieldBox>
        <Label>Preview</Label>
        <VideoPreviewBox>
          Preview
        </VideoPreviewBox>
      </FieldBox>
      <FieldBox>
        <Label>Tags</Label>
        <Input name="tags" value={data.getVideo.tags} type="text"/>
      </FieldBox>
      <ButtonContainer>
        <Button primary>Submit</Button>
        <Button>Cancel</Button>
      </ButtonContainer>
    </FormContainer>

  );
};


