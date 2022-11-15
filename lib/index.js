const encode = {
    'image/jpeg': async function (data, options) {
        const encode = (await import('./index-8cf0a81c.js')).encode;
        return encode(data, options);
    },
    'image/png': async function (data, options) {
        const encode = (await import('./index-7be1e6ba.js')).encode;
        const arrayBuffer = await encode(data);
        const optimise = (await import('./index-944265dc.js')).optimise;
        return optimise(arrayBuffer, options);
    },
    resize: async function (image, options) {
        const resize = (await import('./index-37143bc0.js')).default;
        return resize(image, options);
    },
};

export { encode };
