import {
  Applicative,
  Functor,
  Monad,
} from '../../typeclass';

export type Maybe<a> = Functor<a>
                        & Applicative
                        & Monad<a>;
