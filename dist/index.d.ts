/**
 * Image Transformer
 * Koa Utilities
 * Created by Thomas Sham on 22/10/2020.
 */
import { Sharp } from "sharp";
export declare function transformStreamBuilder(sizes?: number[], formats?: [string, any][], options?: any): [Sharp, [[Sharp, string][], number][]];
export default transformStreamBuilder;
