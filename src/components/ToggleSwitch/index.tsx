import { useState } from 'react';

import { ToggleOff } from 'assets/Icons/Toggle/ToggleOff';
import { ToggleOn } from 'assets/Icons/Toggle/ToggleOn';
import { useCharacters } from 'context/character';

import { ToggleContainer } from './styles';

export function ToggleSwitch() {
  const [active, setActive] = useState(true);

  const { getData, filters } = useCharacters();

  const toggle = () => {
    if (!active) {
      getData({ nameStartsWith: filters.name, orderBy: 'name' });
    }

    if (active) {
      getData({ nameStartsWith: filters.name, orderBy: '-name' });
    }
  };

  return (
    <ToggleContainer
      onClick={() => {
        setActive(!active);
        toggle();
      }}
    >
      {active ? <ToggleOn /> : <ToggleOff />}
    </ToggleContainer>
  );
}
