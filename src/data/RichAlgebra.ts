/**
* Rich algebraic type class
* */
export interface RichAlgebra<a> {
  // Functor :: map
  map<b>(fn: (input: a) => b): RichAlgebra<b>;

  // Applicative :: ap
  // f (a -> b) -> f a -> f b
  ap<b>(functor: RichAlgebra<a>): RichAlgebra<b>;

  // Monad :: bind
  bind<b>(fn: (input: a) => RichAlgebra<b>): RichAlgebra<b>;

  // Monad :: join
  join<T>(): RichAlgebra<T>;
}
