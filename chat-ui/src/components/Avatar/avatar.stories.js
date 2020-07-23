import Avatar from '.';
import React from 'react';
import '../../story.css';
export default {
  title: 'Avatar',
  component: Avatar,
};
import face1 from '../../assets/images/face-male-1.jpg';
import face2 from '../../assets/images/face-male-2.jpg';
import face3 from '../../assets/images/face-male-3.jpg';
import face4 from '../../assets/images/face-male-4.jpg';
export const Default = () => {
  return (
    <div className="row-elements">
      <Avatar size="48px" src={face1} status="online" statusIconSize="8px" />
    </div>
  );
};
export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar size="48px" src={face1} status="online" statusIconSize="10px" />
      <Avatar size="56px" src={face2} status="offline" statusIconSize="10px" />
      <Avatar size="64px" src={face3} status="online" statusIconSize="20px" />
      <Avatar size="72px" src={face4} status="offline" statusIconSize="20px" />
    </div>
  );
};
