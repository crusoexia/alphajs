export interface Functor<a> {
  map<b>(fn: (input: a) => b): Functor<b>;
}
