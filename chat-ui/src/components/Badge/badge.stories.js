import React from 'react';
import Badge from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'UI组件/Badge',
  component: Badge,
};

export const Default = () => <Badge count={5}></Badge>;

export const DotVariant = () => {
  return (
    <Badge show variant="dot">
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  );
};
export const DotVariants = () => {
  return (
    <Badge show variant="dot" count={10}>
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  );
};
