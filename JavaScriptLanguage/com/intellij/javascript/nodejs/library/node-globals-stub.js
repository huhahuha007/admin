/**
 * Loads a module.
 * See <a href="http://nodejs.org/api/modules.html">http://nodejs.org/api/modules.html</a> for more information.
 * @param {String} moduleName
 * @returns {*}
 */
function require(moduleName) {}

/**
 * Use the internal <i><code>require()</code></i> machinery to look up the location of a module,
 * but rather than loading the module, just return the resolved filename.
 * @param {String} moduleName
 * @returns {String}
 */
require.resolve = function (moduleName) {
  return '';
};

/**
 * Modules are cached in this object when they are required.<p/>
 * By deleting a key value from this object, the next require will reload the module.
 * @type {Object}
 */
require.cache = {};

/**
 * Module object of a file that is run directly from Node.
 * You can determine whether a file has been run directly by testing
 * <i><code>require.main&nbsp;===&nbsp;module</code></i>
 * @type {Object}
 */
require.main = {};

/**
 * Instruct <i><code>require</code></i> on how to handle certain file extensions.
 * Process files with the extension <i><code>.sjs</code></i> as <i><code>.js</code></i>:
 * <pre><code>
 *   require.extensions['.sjs'] = require.extensions['.js'];
 * </code></pre>
 * @type {Array}
 */
require.extensions = [];

/**
 * An object which is shared between all instances of the current module and made accessible
 * through <i><code>require()</code></i>.<p/>
 * <i><code>exports</code></i> is the same as the <i><code>module.exports</code></i> object.
 * <i><code>exports</code></i> isn't actually a global but rather local to each module.
 * See <a href="http://nodejs.org/api/modules.html">http://nodejs.org/api/modules.html</a> for more information.
 * @type {*}
 */
var exports = {};

/**
 * The process object.
 * See <a href="http://nodejs.org/api/process.html">http://nodejs.org/api/process.html</a> for more information.
 * @type {Object}
 */
var process = {
  /**
   * Adds the specified listener to receive events of the given type.
   * @param {String} eventType
   * <ul>
   *   <li>'exit':<p/>
   *   Emitted when the process is about to exit. This is a good hook to perform constant time checks
   *   of the module's state (like for unit tests). The main event loop will no longer be run after
   *   the 'exit' callback finishes, so timers may not be scheduled.
   *   </li>
   *   <li>'uncaughtException':<p/>
   *   Emitted when an exception bubbles all the way back to the event loop. If a listener is added for
   *   this exception, the default action (which is to print a stack trace and exit) will not occur.
   *   </li>
   *   <li>Signal Events ('SIGINT', 'SIGTERM', etc): <p/>
   *   Emitted when the processes receives a signal.
   *   </li>
   * </ul>
   * @param {Function} listener a callback function
   */
  on:function (eventType, listener) {},

  /**
   * A writable stream to stdout. <p/>
   * It's blocking in the case that they refer to regular files or TTY file descriptors.
   * In the case they refer to pipes, they are non-blocking like other streams.
   * See <a href="http://nodejs.org/api/stream.html">http://nodejs.org/api/stream.html</a> for more information.
   */
  stdout:{},

  /**
   * A writable stream to stderr. <p/>
   * It's blocking in the case that they refer to regular files or TTY file descriptors.
   * In the case they refer to pipes, they are non-blocking like other streams.
   * See <a href="http://nodejs.org/api/stream.html">http://nodejs.org/api/stream.html</a> for more information.
   */
  stderr:{},

  /**
   * A Readable Stream for stdin.<p/>
   * The stdin stream is paused by default, so one must call <code>process.stdin.resume()</code> to read from it.
   */
  stdin:{},

  /**
   * An array containing the command line arguments.<p/>
   * The first element will be 'node', the second element will be the name of the JavaScript file.
   * The next elements will be any additional command line arguments.
   */
  argv:[],

  /**
   * This is the absolute pathname of the executable that started the process.
   */
  execPath:'',

  /**
   * This causes node to emit an abort. This will cause node to exit and generate a core file.
   */
  abort:function () {},

  /**
   * Changes the current working directory of the process or throws an exception if that fails.
   * @param {String} directory
   */
  chdir:function (directory) {},

  /**
   * Returns the current working directory of the process.
   * @returns {String}
   */
  cwd:function () {
    return '';
  },

  /**
   * An object containing the user environment.
   * @type {Object.<string, *>}
   */
  env:{},

  /**
   * Ends the process with the specified <i><code>code</code></i>. If omitted, exit uses the 'success' code 0.
   * @param {Number} [code=0] exit code
   */
  exit:function (code) {},


  /**
   * Gets the group identity of the process.<p/>
   * This is the numerical group id, not the group name.
   * @returns {Number}
   */
  getgid:function () {
    return 1;
  },

  /**
   * Sets the group identity of the process.<p/>
   * This accepts either a numerical ID or a groupname string.
   * If a groupname is specified, this method blocks while resolving it to a numerical ID.
   * @param id
   */
  setgid:function (id) {},

  /**
   * Gets the user identity of the process.<p/>
   * This is the numerical userid, not the username.
   * @returns {Number}
   */
  getuid:function () {
    return 1;
  },

  /**
   * Sets the user identity of the process.<p/>
   * This accepts either a numerical ID or a username string. If a username is specified, this method blocks while resolving it to a numerical ID.
   * @param id
   */
  setuid:function (id) {},

  /**
   * A compiled-in property that exposes <i><code>NODE_VERSION</code></i>.
   * @type {String}
   */
  version:0,

  /**
   * An Object containing the JavaScript representation of the configure options that were used to compile
   * the current node executable. This is the same as the "config.gypi" file that was produced when running
   * the ./configure script.
   */
  config:{},

  /**
   * A compiled-in property that exposes <i><code>NODE_PREFIX</code></i>.
   * @type {String}
   */
  installPrefix:'',

  /**
   * Send a signal to a process.<p/>
   * <code>pid</code> is the process id and <code>signal</code> is the string describing the signal to send.
   * Signal names are strings like 'SIGINT' or 'SIGUSR1'.
   * @param {Number} pid
   * @param {String} [signal='SIGTERM']
   */
  kill:function (pid, signal) {},

  /**
   * The PID of the process.
   * @type {Number}
   */
  pid:0,

  /**
   * Getter/setter to set what is displayed in 'ps'.
   * @type {String}
   */
  title:'',

  /**
   * What processor architecture you're running on: 'arm', 'ia32', or 'x64'.
   * @type {String}
   */
  arch:'',

  /**
   * What platform you're running on. 'linux2', 'darwin', etc.
   * @type {String}
   */
  platform:'',

  /**
   * Returns an object describing the memory usage of the Node process measured in bytes.
   * @returns {Object} {rss, vtotal, heapTotal, heapUsed}
   */
  memoryUsage:function () {
    return {};
  },

  /**
   * On the next loop around the event loop call this callback.<p/>
   * This is not a simple alias to setTimeout(fn, 0), it's much more efficient.
   * @param {Function} callback
   */
  nextTick:function (callback) {},

  /**
   * Sets or reads the process's file mode creation mask.<p/>
   * Child processes inherit the mask from the parent process.
   * @param {Number} [mask] the process's file mode creation new mask
   * @returns {Number} the old mask if mask argument is given, otherwise returns the current mask.
   */
  umask:function (mask) {
    return 1;
  },

  /**
   * @returns {Number} Number of seconds Node has been running.
   */
  uptime:function () {},

  /**
   * Returns the current high-resolution real time in a <i><code>[seconds, nanoseconds]</code></i> tuple Array.
   * It is relative to an arbitrary time in the past. It is not related to the time of day and therefore not subject to clock drift.
   * The primary use is for measuring performance between intervals.
   *
   * You may pass in the result of a previous call to <i><code>process.hrtime()</code></i> to get a diff reading, useful for benchmarks and measuring intervals.
   *
   * @param {Array} [hrtimeBefore]
   * @returns {Array} [seconds, nanoseconds] - the current high-resolution real time
   */
  hrtime: function (hrtimeBefore) {
    return [];
  },

  /**
   * @returns {Object} stdin of the process
   */
  openStdin:function () {}
};

(function () {
  var time_t = {};
  time_t.ctime = 0;
  time_t.mtime = 0;
})();

/**
 * The filename of the code being executed.<p/>
 * This is the resolved absolute path of this code file.
 * For a main program this is not necessarily the same filename used in the command line.
 * The value inside a module is the path to that module file.
 * @public
 * @type {String}
 */
var __filename = '';

/**
 * The name of the directory that the currently executing script resides in.
 * @public
 * @type {String}
 */
var __dirname = '';

/**
 * A reference to the current module.<p/>
 * In particular <i><code>module.exports</code></i> is the same as the <i><code>exports</code></i> object.
 * <i><code>module</code></i> isn't actually a global but rather local to each module.
 * See <a href="http://nodejs.org/api/modules.html">http://nodejs.org/api/modules.html</a> for more information.
 * @type {Object}
 */
var module = {
  /**
   * The <i><code>exports</code></i> object is created by the Module system.
   */
  exports:exports,

  /**
   * Provides a way to load a module as if <i><code>require()</code></i> was called from the original module.
   *
   * @param {String} id required module name
   * @return {Object} <i><code>exports</code></i> object from the resolved module
   */
  require:function (id) {
    return exports;
  },

  /**
   * The identifier for the module. Typically this is the fully resolved filename.
   * @type {String}
   */
  id:'{module identifier}',

  /**
   * The fully resolved filename to the module.
   * @type {String}
   */
  filename:'{fully resolved filename}',

  /**
   * Whether or not the module is done loading, or is in the process of loading.
   * @type {Boolean}
   */
  loaded:true,

  /**
   * The module that required this one.
   * @type {Object}
   */
  parent:{},

  /**
   * The module objects required by this one.
   * @type {Array}
   */
  children:[]
};

/**
 * The global namespace object.<p/>
 * In browsers, the top-level scope is the global scope.
 * That means that in browsers if you're in the global scope <i><code>var&nbsp;something</code></i>
 * will define a global variable.<p/>
 * In Node this is different. The top-level scope is not the global
 * scope; <i><code>var&nbsp;something</code></i> inside a Node module will be local to that module.
 * @type {Object}
 */
var global = {};


/**
 * @type {string}
 */
Error.prototype.stack = null;

(function() {
  var fs = require('fs');
  /**
   * File is visible to the calling process. This is useful for determining if a file exists,
   * but says nothing about <i><code>rwx</code></i> permissions. Default if no <i><code>mode</code></i> is specified.
   * @type {number}
   */
  fs.F_OK;

  /**
   * File can be read by the calling process.
   * @type {number}
   */
  fs.R_OK;

  /**
   * File can be written by the calling process.
   * @type {number}
   */
  fs.W_OK;

  /**
   * File can be executed by the calling process. This has no effect on Windows (will behave like <i><code>fs.F_OK</code></i>).
   * @type {number}
   */
  fs.X_OK;
})();
