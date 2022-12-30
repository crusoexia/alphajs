export interface Monad<T> {
  bind<b>(fn: (input: T) => Monad<b>): Monad<b>;
  join<a>(): Monad<a>;
}
