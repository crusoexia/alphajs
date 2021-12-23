# alphajs

### Design targets

* Lodash compatible

### Morphisms

* Composition(lodash)
* Identity(lodash)
* Trace - For debug.
* Container (Just)
  - of
* Functor
  - map (pipe)
* Maybe

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
