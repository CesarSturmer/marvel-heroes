import { HeroComics } from '@Types/comics-type';

import { Container, ComicTitle, WrapperReleases, CardRelease } from './styles';

const NO_IMAGE = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

type LatestReleasesProps = {
  character: HeroComics[];
};

export default function LatestReleases({ character }: LatestReleasesProps) {
  return (
    <Container>
      <div>
        <ComicTitle>Últimos Lançamentos</ComicTitle>
      </div>
      <WrapperReleases>
        {character.map((release) => {
          const imageSrc = release.images.length
            ? `${release.images[0]?.path}.${release.images[0]?.extension}`
            : NO_IMAGE;
          return (
            <CardRelease key={release.id}>
              <img src={imageSrc} alt="Foto Quadrinho" />
              <br />
              <span>{release.title}</span>
            </CardRelease>
          );
        })}
      </WrapperReleases>
    </Container>
  );
}
