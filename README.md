# alphajs

The original purpose is trying to use TypeScript to build the Haskell building blocks. But quickly I found that they are different paradim languages, it is impossible to mimic some of Haskell features by TypeScript. But we can accept a few compromise of the paradim purity to make the library can still pragmaticly easy to play with the algebraic types.

### Design targets

* Lodash compatible(maybe?)
* TypeScript

### Morphisms

* Trace - For debug.
* Container (Just)
  - of
* Functor
  - map (pipe)
* Maybe
* IO
  - unsafePerformIO
* Task (Folktale for asynchronous tasks)

### Utilities

* compose
* eithier
* map (pipe)

```typescript
const map = <A, B>(visiter: (just: Just<A>) => Just<B>) => (just: Just<A>) => just.map(visiter);
```

```typescript
const compose = (...visiters) => (just) => {
  return reduce(visiters, (visiter, value) => map(visiter)(value) )(just);
}
```

### Candidate package name

* (MAG)ejs - (Mostly adequate guide)
* minialgebra - versus sancturay's large size
* logebra - (lo)dash + al(gebra)
* zen-monad
* zen-fp
* zen-functor
* chan
* shu
* wizard
