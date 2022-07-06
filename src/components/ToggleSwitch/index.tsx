import { useContext, useState } from 'react';

import { ToggleOff } from 'assets/Icons/Toggle/ToggleOff';
import { ToggleOn } from 'assets/Icons/Toggle/ToggleOn';
import { CharactersContext } from 'context/CharacterContext';

import { ToggleContainer } from './styles';

export function ToggleSwitch() {
  const [active, setActive] = useState(true);

  const { getData, filters, setFilters, setCurrentPage } = useContext(CharactersContext);

  const toggle = () => {
    setCurrentPage(1);
    if (!active) {
      setFilters((prevState) => ({ ...prevState, orderBy: 'name' }));
      getData({ nameStartsWith: filters.name, orderBy: 'name' });
    }

    if (active) {
      setFilters((prevState) => ({ ...prevState, orderBy: '-name' }));
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
