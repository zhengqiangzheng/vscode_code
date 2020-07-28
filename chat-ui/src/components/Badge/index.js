import React from "react";
import PropTypes from "prop-types";
import StyledBadge from "./style";

function Badge({children,...rest}) {
  return (
    <StyledBadge {...rest}>
      {children}
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.any
};

export default Badge;
