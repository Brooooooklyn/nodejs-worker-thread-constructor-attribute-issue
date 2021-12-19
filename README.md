# `__attribute__((constructor))` is not been invoked in `worker_thread`

## Reproduce

- yarn
- node `hello.js`

## Expect

```
beforeFunction
world
beforeFunction
world
```

### Actually

```
beforeFunction
world
world
```