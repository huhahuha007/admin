/**
 * To schedule execution of a one-time <i><code>callback</code></i> after <i><code>delay</code></i> milliseconds.<p>
 * Returns a <i><code>timeoutObject</code></i> for possible use with <i><code>clearTimeout()</code></i>. Optionally you can also pass arguments to the callback.
 * <p>
 * It is important to note that your callback will probably not be called in exactly <i><code>delay</code></i> milliseconds - Node.js makes no guarantees about the exact timing of when the callback will fire, nor of the ordering things will fire in. The callback will be called as close as possible to the time specified.
 * @param {Function} callback
 * @param {number} delay
 * @param {...*} args
 * @return {Object}
 */
function setTimeout(callback, delay, args) {
}

/**
 * Prevents a timeout from triggering.
 * @param {Object} timeoutObject
 */
function clearTimeout(timeoutObject) {
}

/**
 * To schedule the repeated execution of <i><code>callback</code></i> every <i><code>delay</code></i> milliseconds. <p>
 * Returns a <i><code>intervalObject</code></i> for possible use with <i><code>clearInterval()</code></i>. Optionally you can also pass arguments to the callback.
 *
 * @param {Function} callback
 * @param {number} delay
 * @param {...*} args
 * @return {Object}
 */
function setInterval(callback, delay, args) {
}

/**
 * Stops a interval from triggering.
 * @param {Object} intervalObject
 */
function clearInterval(intervalObject) {
}

(function () {
    var timer = {};
    /**
     * The opaque value returned by <i><code>setTimeout</code></i> and <i><code>setInterval</code></i>
     * also has the method <i><code>timer.unref()</code></i> which will allow you to create a timer that is active
     * but if it is the only item left in the event loop won't keep the program running.
     * If the timer is already unrefd calling unref again will have no effect. <p>
     * In the case of <i><code>setTimeout</code></i> when you <i><code>unref</code></i> you create a separate timer
     * that will wakeup the event loop, creating too many of these may adversely effect event loop performance -- use wisely.
     */
    timer.unref = function() {};

    /**
     * If you had previously <i><code>unref()</code></i>d a timer you can call <i><code>ref()</code></i> to explicitly
     * request the timer hold the program open. If the timer is already <i><code>ref</code></i>d calling
     * <i><code>ref</code></i> again will have no effect.
     */
    timer.ref = function() {};
}());

/**
 * To schedule the "immediate" execution of <i><code>callback</code></i> after I/O events callbacks
 * and before <i><code>setTimeout</code></i> and <i><code>setInterval</code></i>.
 * Returns an <i><code>immediateId</code></i> for possible use with <i><code>clearImmediate()</code></i>.
 * Optionally you can also pass arguments to the callback.
 *
 * @param {Function} callback
 * @param {...*} arg
 * @return {Number} immediateId
 */
function setImmediate(callback, arg) {
}

/**
 * Stops an immediate from triggering.
 * @param {Number} immediateId
 */
function clearImmediate(immediateId) {
}
