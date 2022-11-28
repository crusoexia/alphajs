import { Functor } from './Functor';

export interface Applicative<a> {
  pure(f: Functor<a>): (value: a) => Functor<a>;
}
