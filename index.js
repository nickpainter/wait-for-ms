/**
 * Blocks the main thread for `sleepTime` ms
 * @param  {Number} sleepTime number of ms to block the main thread
 * @return {Undefined}
 */

exports.msleep = function msleep(sleepTime) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, sleepTime);
};
