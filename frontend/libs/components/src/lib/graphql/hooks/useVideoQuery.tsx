import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {ApolloError} from 'apollo-client';
import { FETCH_IF_VIDEO_EXIST_QUERY } from '../video';
import {Video} from '../../types';

type VideoQueryResult = {
    loading: boolean;
    data: {video: Video} | undefined;
    error?: ApolloError;
};

export const useVideoQuery = (url: string): VideoQueryResult => {
  const {loading, data, error} = useQuery(FETCH_IF_VIDEO_EXIST_QUERY, {
    variables: {url}
  });

  return {loading, data, error};
};
