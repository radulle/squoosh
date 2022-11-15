/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getContainOffsets(sw, sh, dw, dh) {
    const currentAspect = sw / sh;
    const endAspect = dw / dh;
    if (endAspect > currentAspect) {
        const newSh = sw / endAspect;
        const newSy = (sh - newSh) / 2;
        return { sw, sh: newSh, sx: 0, sy: newSy };
    }
    const newSw = sh * endAspect;
    const newSx = (sw - newSw) / 2;
    return { sh, sw: newSw, sx: newSx, sy: 0 };
}

let wasm$1;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm$1.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm$1.memory.buffer);
    }
    return cachegetUint8Memory0;
}

let WASM_VECTOR_LEN$1 = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN$1 = arg.length;
    return ptr;
}

let cachegetInt32Memory0$1 = null;
function getInt32Memory0$1() {
    if (cachegetInt32Memory0$1 === null || cachegetInt32Memory0$1.buffer !== wasm$1.memory.buffer) {
        cachegetInt32Memory0$1 = new Int32Array(wasm$1.memory.buffer);
    }
    return cachegetInt32Memory0$1;
}

let cachegetUint8ClampedMemory0 = null;
function getUint8ClampedMemory0() {
    if (cachegetUint8ClampedMemory0 === null || cachegetUint8ClampedMemory0.buffer !== wasm$1.memory.buffer) {
        cachegetUint8ClampedMemory0 = new Uint8ClampedArray(wasm$1.memory.buffer);
    }
    return cachegetUint8ClampedMemory0;
}

function getClampedArrayU8FromWasm0(ptr, len) {
    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {Uint8Array} input_image
* @param {number} input_width
* @param {number} input_height
* @param {number} output_width
* @param {number} output_height
* @param {number} typ_idx
* @param {boolean} premultiply
* @param {boolean} color_space_conversion
* @returns {Uint8ClampedArray}
*/
function resize$2(input_image, input_width, input_height, output_width, output_height, typ_idx, premultiply, color_space_conversion) {
    try {
        const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passArray8ToWasm0(input_image, wasm$1.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN$1;
        wasm$1.resize(retptr, ptr0, len0, input_width, input_height, output_width, output_height, typ_idx, premultiply, color_space_conversion);
        var r0 = getInt32Memory0$1()[retptr / 4 + 0];
        var r1 = getInt32Memory0$1()[retptr / 4 + 1];
        var v1 = getClampedArrayU8FromWasm0(r0, r1).slice();
        wasm$1.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm$1.__wbindgen_add_to_stack_pointer(16);
    }
}

async function load$1(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init$1(input) {
    if (typeof input === 'undefined') {
        input = new URL(new URL('assets/squoosh_resize_bg-3d426466.wasm', import.meta.url).href, import.meta.url);
    }
    const imports = {};


    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load$1(await input, imports);

    wasm$1 = instance.exports;
    init$1.__wbindgen_wasm_module = module;

    return wasm$1;
}

let wasm;

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {Uint32Array} input_image
* @param {number} input_width
* @param {number} input_height
* @param {number} factor
* @returns {Uint32Array}
*/
function resize$1(input_image, input_width, input_height, factor) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passArray32ToWasm0(input_image, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.resize(retptr, ptr0, len0, input_width, input_height, factor);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL(new URL('assets/squooshhqx_bg-6e04a330.wasm', import.meta.url).href, import.meta.url);
    }
    const imports = {};


    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const defaultOptions = {
    // Width and height will always default to the image size.
    // This is set elsewhere.
    width: 1,
    height: 1,
    // This will be set to 'vector' if the input is SVG.
    method: 'lanczos3',
    fitMethod: 'stretch',
    premultiply: true,
    linearRGB: true,
};

let resizeWasmReady;
let hqxWasmReady;
function initResize(moduleOrPath) {
    if (!resizeWasmReady) {
        resizeWasmReady = init$1(moduleOrPath);
    }
    return resizeWasmReady;
}
function initHqx(moduleOrPath) {
    if (!hqxWasmReady) {
        hqxWasmReady = init(moduleOrPath);
    }
    return hqxWasmReady;
}
function optsIsHqxOpts(opts) {
    return opts.method === 'hqx';
}
function crop(data, sx, sy, sw, sh) {
    const inputPixels = new Uint32Array(data.data.buffer);
    // Copy within the same buffer for speed and memory efficiency.
    for (let y = 0; y < sh; y += 1) {
        const start = (y + sy) * data.width + sx;
        inputPixels.copyWithin(y * sw, start, start + sw);
    }
    return new ImageData(new Uint8ClampedArray(inputPixels.buffer.slice(0, sw * sh * 4)), sw, sh);
}
function clamp(num, { min = Number.MIN_VALUE, max = Number.MAX_VALUE }) {
    return Math.min(Math.max(num, min), max);
}
/** Resize methods by index */
const resizeMethods = [
    'triangle',
    'catrom',
    'mitchell',
    'lanczos3',
];
async function hqx(input, opts) {
    await initHqx();
    const widthRatio = opts.width / input.width;
    const heightRatio = opts.height / input.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const factor = clamp(Math.ceil(ratio), { min: 1, max: 4 });
    if (factor === 1)
        return input;
    const result = resize$1(new Uint32Array(input.data.buffer), input.width, input.height, factor);
    return new ImageData(new Uint8ClampedArray(result.buffer), input.width * factor, input.height * factor);
}
async function resize(data, overrideOptions) {
    let options = { ...defaultOptions, ...overrideOptions };
    let input = data;
    initResize();
    if (optsIsHqxOpts(options)) {
        input = await hqx(input, options);
        // Regular resize to make up the difference
        options = { ...options, method: 'catrom' };
    }
    await resizeWasmReady;
    if (options.fitMethod === 'contain') {
        const { sx, sy, sw, sh } = getContainOffsets(data.width, data.height, options.width, options.height);
        input = crop(input, Math.round(sx), Math.round(sy), Math.round(sw), Math.round(sh));
    }
    const result = resize$2(new Uint8Array(input.data.buffer), input.width, input.height, options.width, options.height, resizeMethods.indexOf(options.method), options.premultiply, options.linearRGB);
    return new ImageData(new Uint8ClampedArray(result.buffer), options.width, options.height);
}

export { resize as default, initHqx, initResize };
