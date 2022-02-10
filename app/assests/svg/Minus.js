import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const MinusIcon = memo(props => {
  return (
    <Svg
      width="5"
      height="2"
      viewBox="0 0 5 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.6875 1.04688H0.421875V0.0390625H4.6875V1.04688Z"
        fill="#565656"
      />
    </Svg>
  );
});
