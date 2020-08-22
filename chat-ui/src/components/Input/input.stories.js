import React from 'react';
import Input from '.';
import Icon from 'components/Icon';

import { ReactComponent as ClipIcon } from 'assets/icons/clip.svg';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';

export default {
  title: 'UI组件/Input',
  component: Input,
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const WithAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc" />}
    suffix={<Icon icon={SmileIcon} color="#cccccc" />}
  />
);
