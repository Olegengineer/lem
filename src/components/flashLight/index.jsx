import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';
import imgFlashlight from './flashlight.png';
import { Styled } from './style';

export const FlashLight = () => {
  const {
    position: {
      page: { x, y }
    }
  } = useMightyMouse();

  const style = {
    backgroundImage: x && y ? `url(${imgFlashlight})` : null,
    backgroundPositionX: x - 210,
    backgroundPositionY: y - 210
  };

  return (
    <Styled>
      <div className="flashlight" style={style}>
        <div className="quote">
        </div>
      </div>
    </Styled>
  );
}