/**
 * For printing to stdout and stderr. Similar to the console object functions provided by most web browsers, here the output is sent to stdout or stderr.
 * <p>
 * The console functions are synchronous when the destination is a terminal or a file (to avoid lost messages in case of premature exit) and asynchronous when it's a pipe (to avoid blocking for long periods of time).
 * <p>
 * That is, in the following example, stdout is non-blocking while stderr is blocking:
 *
 * <pre><code>  $ node script.js 2> error.log | tee info.log</code></pre>
 *
 * In daily use, the blocking/non-blocking dichotomy is not something you should worry about unless you log huge amounts of data.
 */
var console = {

  /**
   * Prints to stdout with newline. This function can take multiple arguments in a <i><code>printf()</code></i>-like way. Example:
   * <pre><code>console.log('count: %d', count);</code></pre>
   * If formatting elements are not found in the first string then <i><code>util.inspect</code></i> is used on each argument.
   * @param {...*} data
   */
  log: function (data) {},

  /**
   * @param {...*} data
   */
  info: function (data) {},

  /**
   * @param {...*} data
   */
  error: function (data) {},

  /**
   * @param {...*} data
   */
  warn: function (data) {},

  /**
   * @param {...*} obj
   */
  dir: function (obj) {},

  /**
   * Mark a time.
   */
  time: function (label) {},

  /**
   * Finish timer, record output. Example:
   * <pre><code>
     console.time('100-elements');
     for (var i = 0; i < 100; i++) {
       ;
     }
     console.timeEnd('100-elements');
   </code></pre>
   */
  timeEnd: function (label) {},

  /**
   * Print to stderr 'Trace :', followed by the formatted message and stack trace to the current position.
   * @param {...*} message
   */
  trace: function (message) {},

  /**
   * Similar to assert.ok(), but the error message is formatted as <i><code>util.format(message...)</code></i>.
   * @param {*} value
   * @param {...*} message
   */
  assert: function (value, message) {}
};
