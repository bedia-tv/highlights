import React, { useState, useEffect } from 'react';
import { Container } from './submission.page.style';
import { useActiveTabLocation } from '../../hooks';
import { Form} from '@frontend/components';
import { useMachine } from '@xstate/react';
import { SubmissionResult } from './submission-result.fragment';

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

export const SubmissionPage = () => {
  const location = useActiveTabLocation();

  return (
    <Container>
      <Form defaultValue={data} submit={(payload) => console.log(payload)}/>
    </Container>
  );
};
