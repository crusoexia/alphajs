import {
  Applicative,
  Functor,
} from '../../typeclass';

export type Maybe<a> = Functor<a>
                        & Applicative<Maybe<unknown>>;
