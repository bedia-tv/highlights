import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {MockedProvider} from '@apollo/react-testing';
import { render } from '@testing-library/react';
import {Form} from './form';
import {SUBMIT_VIDEO_MUTATION} from '../graphql/video';

const tagList = [
  "エヴァンゲリオン",
  "エヴァ",
  "EVA",
  "高橋洋子",
  "アニソン",
  "キングレコード",
  "残酷な天使のテーゼ",
  "魂のルフラン"
];
const thumbnail = "https://i.ytimg.com/vi/o6wtDPVkKqI/maxresdefault.jpg";

const url = "https://www.youtube.com/watch?v=o6wtDPVkKqI";

const data = {
  title:
    "「残酷な天使のテーゼ」MUSIC VIDEO（HDver.）/Zankoku na Tenshi no Te-ze“The Cruel Angel's Thesis”",
  url,
  thumbnail,
  tagList,
};


const mocks = [
  {
    request: {
      query: SUBMIT_VIDEO_MUTATION
    },
    result: {
      data: {
        success: true,
      }
    }
  }
];

describe('Form', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Form defaultValue={data} submit={(payload) => console.log(payload)}/>
      </MockedProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
