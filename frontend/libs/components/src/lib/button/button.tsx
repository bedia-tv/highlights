import * as React from 'react';
import {Container} from "./button.style";
import {StyledComponentBase, StyledFunction} from "styled-components";

type Props = {
  primary?: boolean;
  danger?: boolean;
}


export const Button: string & StyledComponentBase<"button", any, {} & Props, never> = Container;
