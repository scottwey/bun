import baker from '../svg/baker.svg';
import baker2 from '../svg/baker2.svg';
import artisan from '../svg/artisan.svg';
import smith from '../svg/smith.svg';

const producers = [
  {
    name: 'Baker',
    description: 'Bakers of buns to help you produce more, not experts or artisans by any means, but better than nothing.',
    product: 1,
    price: 10,
    scaling: 1.15,
    graphic: baker,
  },
  {
    name: 'Bun Artisan',
    description: 'Masters of bun-making. This bunderful baker is ready to take on the challenge of making you rich. In buns.',
    product: 5,
    price: 85,
    scaling: 1.14,
    graphic: artisan,
  },
  {
    name: 'Bunsmith',
    description: 'Not bakers, but devotees of true bun-craft. Bunsmiths seclude themselves deep in the fiery hearts of buncanos, vainly pursuing the perfect bun.',
    product: 25,
    price: 720,
    scaling: 1.13,
    graphic: smith,
  },
  {
    name: 'Bun Knight',
    description: 'Gallant knights that have sworn blood oaths to bring justice into the world. And to buns.',
    product: 125,
    price: 6210,
    scaling: 1.12,
    graphic: baker2,
  },
];

export default producers;
