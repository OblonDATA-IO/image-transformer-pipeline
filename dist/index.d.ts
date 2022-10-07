/**
 * Image Transformer
 * Koa Utilities
 * Created by Thomas Sham on 22/10/2020.
 */
import sharp from "sharp";
export declare function transformStreamBuilder(sizes?: number[], formats?: [string, any][], options?: any): (sharp.Sharp | (number | (string | sharp.Sharp)[][])[][])[];
export default transformStreamBuilder;
