import {
  Applicative,
  Functor,
  Monad,
} from '../../typeclasses';

export type Maybe<a> = Functor<a>
                        & Applicative
                        & Monad<a>;
