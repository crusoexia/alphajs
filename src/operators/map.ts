import { AlgebraicData } from '../data';

const map = <a, b, f extends AlgebraicData<a>>(
  fn: (input: a) => b,
) => (
    functor: f,
  ) => functor.map(fn);

export default map;
