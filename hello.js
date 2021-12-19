const { Worker } = require('worker_threads')

const addon = require('bindings')('hello');

console.log(addon.hello()); // 'world'

new Worker('./worker_thread.js')
