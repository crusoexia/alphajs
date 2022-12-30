import { Functor } from '../typeclass';

const map = <a, b, f extends (Functor<a> | Array<a>)>(
  fn: (input: a) => b,
) => (
    functor: f,
  ) => functor.map(fn);

export default map;
