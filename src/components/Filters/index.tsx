import { HeartOn } from 'assets/Icons/Heart/HeartOn';
import { HeroeIcon } from 'assets/Icons/HeroeIcon';
import { ToggleSwitch } from 'components/ToggleSwitch';

import { Container, ContainerSwitch, WrapperSpanAndSVG } from './styles';

export default function Filters() {
  return (
    <Container>
      <ContainerSwitch>
        <WrapperSpanAndSVG>
          <HeroeIcon />
          <span>Ordernar por nome - A/Z</span>
        </WrapperSpanAndSVG>
        <ToggleSwitch />

        <WrapperSpanAndSVG>
          <HeartOn />
          <span>Somente Favoritos</span>
        </WrapperSpanAndSVG>
      </ContainerSwitch>
    </Container>
  );
}
