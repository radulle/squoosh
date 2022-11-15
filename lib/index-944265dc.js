const defaultOptions = {
    level: 2,
    interlace: false
};

const threads=()=>(async e=>{try{return "undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));

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
async function initMT(moduleOrPath) {
    const { default: init, initThreadPool, optimise, } = await import('./squoosh_oxipng-7c7eb9b6.js');
    await init(moduleOrPath);
    await initThreadPool(globalThis.navigator.hardwareConcurrency);
    return optimise;
}
async function initST(moduleOrPath) {
    const { default: init, optimise } = await import('./squoosh_oxipng-9dc95ec3.js');
    await init(moduleOrPath);
    return optimise;
}
let wasmReady;
function init(moduleOrPath) {
    var _a;
    if (!wasmReady) {
        const hasHardwareConcurrency = ((_a = globalThis.navigator) === null || _a === void 0 ? void 0 : _a.hardwareConcurrency) > 1;
        wasmReady = hasHardwareConcurrency ? threads().then((hasThreads) => hasThreads ? initMT(moduleOrPath) : initST(moduleOrPath)) : initST(moduleOrPath);
    }
}
async function optimise(data, options = {}) {
    init();
    const _options = { ...defaultOptions, ...options };
    const optimise = await wasmReady;
    return optimise(new Uint8Array(data), _options.level, _options.interlace)
        .buffer;
}

export { optimise };
