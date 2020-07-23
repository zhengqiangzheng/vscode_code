import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar, { StatusIcon, AvatarImage, AvatarClip } from './style';
// propTypes 检查props 的属性
function Avatar({
  src,
  size = '48px',
  status,
  statusIconSize = '8px',
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}

      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online'], 'offline'),
  statusIconSize: PropTypes.string,
};

export default Avatar;
