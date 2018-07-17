/**
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways:
 *
 * <i><code>new Buffer(size)</code></i> - Allocates a new buffer of <i><code>size</code></i> octets.
 * <i><code>new Buffer(array)</code></i> - Allocates a new buffer using an <i><code>array</code></i> of octets.
 * <i><code>new Buffer(str, [encoding])</code></i> - Allocates a new buffer containing the given <i><code>str</code></i>. <i><code>encoding</code></i> defaults to <i><code>'utf8'</code></i>.
 *
 * See <a href="http://nodejs.org/api/buffer.html">http://nodejs.org/api/buffer.html</a> for more information.
 *
 * @constructor
 * @this {Buffer}
 * @param {Number|Array|String} obj size of octets (Number) | array of octets (Array) | string to encode (String)
 * @param {String?} encoding encoding to use if the first parameter type is string
 */
function Buffer(obj, encoding) {
}

/**
 * @static
 * @param {String} encoding The encoding string to test
 * @returns {Boolean} true if the <i><code>encoding</code</i> is a valid encoding argument, or false otherwise.
 */
Buffer.isEncoding = function(encoding) {
    return true;
};

/**
 * @static
 * @param {Array} param1 An array of octets (Array)
 *        | An ArrayBuffer or the <i><code>.buffer</code></i> property of a TypedArray
 *        | An existing Buffer to copy data from
 *        | A string to encode.
 * @param {number|string?} param2 Index of first byte to expose (for ArrayBuffer).
 *        | The encoding of string to use (for string).
 * @param {number?} [param3=param1.length-param2] Number of bytes to expose. (for ArrayBuffer)
 * @returns {Buffer2}
 */
Buffer.from = function(param1, param2, param3) {
};

/**
 * Allocates a new Buffer of size bytes. If fill is undefined, the Buffer will be zero-filled.
 * @static
 * @param {number} size The desired length of the new <code>Buffer</code>.
 * @param {string | Buffer | number?} [fill=0] A value to pre-fill the new <code>Buffer</code> with.
 * @param {string?} [encoding='utf8'] If fill is a string, this is its encoding.
 * @returns {Buffer}
 */
Buffer.alloc = function(size, fill, encoding) {
};

/**
 * Allocates a new Buffer of size bytes. If the size is larger than buffer.kMaxLength or smaller than 0, a RangeError will be thrown. A zero-length Buffer will be created if size is 0.
 * The underlying memory for Buffer instances created in this way is not initialized.
 * The contents of the newly created Buffer are unknown and may contain sensitive data.
 * Use Buffer.alloc() instead to initialize Buffer instances to zeroes.
 * @static
 * @param {number} size The desired length of the new Buffer
 * @returns {Buffer}
 */
Buffer.allocUnsafe = function(size) {
};

/**
 * See Buffer.allowUnsafe. The difference is that when using Buffer.allocUnsafe() to allocate new Buffer instances,
 * allocations under 4KB are, by default, sliced from a single pre-allocated Buffer.
 * This allows applications to avoid the garbage collection overhead of creating many individually allocated Buffer instances.
 * This approach improves both performance and memory usage by eliminating the need to track and cleanup as many Persistent objects.<p>
 * However, in the case where a developer may need to retain a small chunk of memory from a pool for an indeterminate amount of time,
 * it may be appropriate to create an un-pooled Buffer instance using Buffer.allocUnsafeSlow() then copy out the relevant bits.
 * @static
 * @param {number} size The desired length of the new Buffer
 * @returns {Buffer}
 */
Buffer.allocUnsafeSlow = function(size) {
};

/**
 * Compares buf1 to buf2 typically for the purpose of sorting arrays of Buffer instances. This is equivalent to calling buf1.compare(buf2).
 * @static
 * @param {Buffer} buf1 The first buffer
 * @param {Buffer} buf2 The second buffer
 * @returns {number}
 */
Buffer.compare = function(buf1, buf2) {
};

/**
 * Writes <i><code>string</code></i> to the buffer at <i><code>offset</code></i> using the given encoding.
 * If <i><code>buffer</code></i> did not contain enough space to fit the entire string, it will write a partial amount of the string.
 * The method will not write partial characters.
 *
 * <pre><code>
 *   buf = new Buffer(256);
 *   len = buf.write('\u00bd + \u00bc = \u00be', 0);
 *   console.log(len + " bytes: " + buf.toString('utf8', 0, len));
 * </code></pre> The number of characters written (which may be different than the number of bytes written) is set in
 * <i><code>Buffer._charsWritten</code></i> and will be overwritten the next time <i><code>buf.write()</code></i> is called.
 *
 * @param {String} string data to be written to buffer
 * @param {Number?} [offset=0] start buffer position
 * @param {Number?} [length=buffer.length-offset] the number of bytes to write
 * @param {String?} [encoding='utf8'] data to be written to buffer
 * @returns {Number} number of octets written
 */
Buffer.prototype.write = function(string, offset, length, encoding) {
    return 0;
};

/**
 * Decodes and returns a string from buffer data encoded with <i><code>encoding</code></i> beginning at <i><code>start</code></i>
 * and ending at <i><code>end</code</i>.
 *
 * @param {String?} [encoding='utf8'] encoding
 * @param {Number?} [start=0] start offset (including)
 * @param {Number?} [end=buffer.length] end offset (including)
 * @returns {String} decoded string
 */
Buffer.prototype.toString = function(encoding, start, end) {
    return '';
};

/**
 * Returns a JSON-representation of the Buffer instance, which is identical to the output for JSON Arrays.
 * <i><code>JSON.stringify</code></i> implicitly calls this function when stringifying a Buffer instance.
 *
 * @returns {String} a JSON-representation of the Buffer instance
 */
Buffer.prototype.toJSON = function() {
    return '';

};

/**
 * @static
 * @param {Object} obj Object
 * @returns {Boolean} true if <i><code>obj</code></i> is a <i><code>Buffer</code></i>
 */
Buffer.isBuffer = function(obj) {
    return true;
};


/**
 * Gives the actual byte length of a string. This is not the same as
 * <i><code>String.prototype.length</code></i> since that returns the number of characters in a string.
 *
 * @static
 * @param {String} string String object
 * @param {String?} [encoding='utf8'] Encoding
 * @returns {Number}  the actual byte length of a string
 */
Buffer.byteLength = function(string, encoding) {
    return 0;
};

/**
 * Returns a buffer which is the result of concatenating all the buffers in the list together.
 * If the list has no items, or if the <i><code>totalLength</code></i> is 0, then it returns a zero-length buffer.
 * If the list has exactly one item, then the first item of the list is returned.
 * If the list has more than one item, then a new Buffer is created.
 * If <i><code>totalLength</code></i> is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
 *
 * @static
 * @param {Array} list List of Buffer objects to concat
 * @param {Number?} totalLength Total length of the buffers when concatenated
 * @returns {Buffer}
 */
Buffer.concat = function(list, totalLength) {
    return null;
};

/**
 * The size of the buffer in bytes. Note that this is not necessarily the size of the contents.
 * <i><code>length</code></i> refers to the amount of memory allocated for the buffer object. It does not change when the contents of the buffer are changed.
 * @type {Number}
 */
Buffer.prototype.length = 0;

/**
 * Does copy between buffers. The source and target regions can be overlapped.
 * All values passed that are undefined/NaN or are out of bounds are set equal to their respective defaults.
 *
 * @param {Buffer} targetBuffer Buffer to copy into
 * @param {Number?} [targetStart=0] start offset in <i><code>targetBuffer</code></i>
 * @param {Number?} [sourceStart=0] start offset in <i><code>this buffer</code></i>
 * @param {Number?} [sourceEnd=this.length] end offset in <i><code>this buffer</code></i>
 */
Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
};

/**
 * Returns a new buffer which references the same memory as the old, but offset and cropped by the <i><code>start</code></i>
 * and <i><code>end</code</i> indexes. Negative indexes start from the end of the buffer.
 * <b>Modifying the new buffer slice will modify memory in the original buffer!</b>
 *
 * @param {Number?} [start=0]
 * @param {Number?} [end=this.length]
 * @returns {Buffer}
 */
Buffer.prototype.slice = function(start, end) {
    return null;
};

/**
 * Reads an unsigned 8 bit integer from the buffer at the specified offset.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} unsigned 8 bit integer
 */
Buffer.prototype.readUInt8 = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} unsigned 16 bit integer
 */
Buffer.prototype.readUInt16LE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} unsigned 16 bit integer
 */
Buffer.prototype.readUInt16BE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} unsigned 32 bit integer
 */
Buffer.prototype.readUInt32LE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} unsigned 32 bit integer
 */
Buffer.prototype.readUInt32BE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an signed 8 bit integer from the buffer at the specified offset.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} signed 8 bit integer
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an signed 16 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} signed 16 bit integer
 */
Buffer.prototype.readInt16LE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an signed 16 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} signed 16 bit integer
 */
Buffer.prototype.readInt16BE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an signed 32 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} signed 32 bit integer
 */
Buffer.prototype.readInt32LE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads an signed 32 bit integer from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} signed 32 bit integer
 */
Buffer.prototype.readInt32BE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads a 32 bit float from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} a 32 bit float
 */
Buffer.prototype.readFloatLE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads a 32 bit float from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} a 32 bit float
 */
Buffer.prototype.readFloatBE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads a 64 bit double from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} a 64 bit double
 */
Buffer.prototype.readDoubleLE = function(offset, noAssert) {
    return 0;
};

/**
 * Reads a 64 bit double from the buffer at the specified offset with specified endian format.
 *
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation of offset should be skipped (i.e. <i><code>offset</code></i> may be beyond the end of the buffer)
 * @returns {Number} a 64 bit double
 */
Buffer.prototype.readDoubleBE = function(offset, noAssert) {
    return 0;
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset. Note, <i><code>value</code></i> must be a valid unsigned 8 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid unsigned 8 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid unsigned 16 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid unsigned 16 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid unsigned 16 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid unsigned 16 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid unsigned 32 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid unsigned 32 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid unsigned 32 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid unsigned 32 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset. Note, <i><code>value</code></i> must be a valid signed 8 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid signed 8 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid signed 16 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid signed 16 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid signed 16 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid signed 16 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid signed 32 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid signed 32 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, <i><code>value</code></i> must be a valid signed 32 bit integer.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a valid signed 32 bit integer
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if <i><code>value</code></i> is not a 32 bit float.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a 32 bit float
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if <i><code>value</code></i> is not a 32 bit float.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a 32 bit float
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if <i><code>value</code></i> is not a 64 bit double.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a 64 bit double
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
};

/**
 * Writes <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if <i><code>value</code></i> is not a 64 bit double.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a 64 bit double
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 */
Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
};


/**
 * Fills the buffer with the specified value. If the <i><code>offset</code></i> and <i><code>end</code></i> are not given it will fill the entire buffer.
 * <pre><code>
 *   var b = new Buffer(50);
 *   b.fill("h");
 * </code></pre>
 *
 * @param {Number|String} value (if it's string, the first char code is used)
 * @param {Number?} [offset=0] start buffer offset
 * @param {Number?} [end=this.length] end buffer offset
 */
Buffer.prototype.fill = function(value, offset, end) {
};
