import { useState } from 'react';

import { ToggleOff } from 'assets/Icons/Toggle/ToggleOff';
import { ToggleOn } from 'assets/Icons/Toggle/ToggleOn';

import { ToggleContainer } from './styles';

export function ToggleSwitch() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <ToggleContainer onClick={toggle}>{active ? <ToggleOn /> : <ToggleOff />}</ToggleContainer>
  );
}
