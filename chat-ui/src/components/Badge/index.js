import React from 'react';
import PropTypes from 'prop-types';
import StyledBadge, { Count } from './style';

function Badge({ children, show, count, showZero, ...rest }) {
  return (
    <StyledBadge
      variant={children ? 'dot' : 'default'}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
      {/* {<Count>{count}</Count> || children} */}
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  showZero: PropTypes.bool,
  count: PropTypes.number,
};

export default Badge;
