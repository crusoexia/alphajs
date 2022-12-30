import { Functor } from './Functor';

/**
* Because TypeScript doesn't support "Higher-Level Generic Type", these function definitions
* would not as strict as the Haskell version due to lose information.
*
* There is another method defined in Haskell Applicative: pure :: a -> fa, however due to
* JavaScript doesn't support runtime type-inferring, this method would be useless.
* */
export interface Applicative {
  // f (a -> b) -> f a -> f b
  ap<a, b>(functor: Functor<a>): Functor<b>;
}
