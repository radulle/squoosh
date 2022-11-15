import type { WorkerResizeOptions } from '@radulle/cra-squoosh-resize/meta';
import type { EncodeOptions } from '@radulle/cra-squoosh-jpeg/meta';
import type { OptimiseOptions } from '@radulle/cra-squoosh-oxipng/meta';
export declare const encode: {
    'image/jpeg': (data: ImageData, options?: Partial<EncodeOptions>) => Promise<ArrayBuffer>;
    'image/png': (data: ImageData, options?: Partial<OptimiseOptions>) => Promise<ArrayBuffer>;
    resize: (image: ImageData, options: Partial<WorkerResizeOptions> & {
        width: number;
        height: number;
    }) => Promise<ImageData>;
};
