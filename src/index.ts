import type { WorkerResizeOptions } from '@radulle/cra-squoosh-resize/meta';
import type { EncodeOptions } from '@radulle/cra-squoosh-jpeg/meta';
import type { OptimiseOptions } from '@radulle/cra-squoosh-oxipng/meta';

export const encode = {
  'image/jpeg': async function (
    data: ImageData,
    options?: Partial<EncodeOptions>
  ) {
    const encode = (await import('@radulle/cra-squoosh-jpeg')).encode;
    return encode(data, options);
  },
  'image/png': async function (
    data: ImageData,
    options?: Partial<OptimiseOptions>
  ) {
    const encode = (await import('@radulle/cra-squoosh-png')).encode;
    const arrayBuffer = await encode(data);
    const optimise = (await import('@radulle/cra-squoosh-oxipng')).optimise;
    return optimise(arrayBuffer, options);
  },
  resize: async function (
    image: ImageData,
    options: Partial<WorkerResizeOptions> & {
      width: number;
      height: number;
    }
  ) {
    const resize = (await import('@radulle/cra-squoosh-resize')).default;
    return resize(image, options);
  },
};
