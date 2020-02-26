import React from 'react';
import {
  useLocation
} from 'react-router-dom';

export const userQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};
