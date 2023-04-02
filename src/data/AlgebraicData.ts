export interface AlgebraicData<a> {
  // Functor :: map
  map<b>(fn: (input: a) => b): AlgebraicData<b>;

  // Applicative :: ap
  // f (a -> b) -> f a -> f b
  ap<b>(functor: AlgebraicData<a>): AlgebraicData<b>;

  // Monad :: bind
  bind<b>(fn: (input: a) => AlgebraicData<b>): AlgebraicData<b>;

  // Monad :: join
  join<T>(): AlgebraicData<T>;

  // Showable :: show
  show(): string;
}
