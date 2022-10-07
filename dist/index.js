/**
 * Image Transformer
 * Koa Utilities
 * Created by Thomas Sham on 22/10/2020.
 */
import sharp from "sharp";
const DefaultSizes = [
    480, 800, 1200,
];
const DefaultFormats = [
    ["jpg", {}],
    ["webp", {}],
    ["avif", {}]
];
const DefaultOptions = {
    failOnError: false,
};
export function transformStreamBuilder(sizes = DefaultSizes, formats = DefaultFormats, options = DefaultOptions) {
    const srcStream = sharp(options);
    const destStreams = sizes
        .map((size) => [srcStream.clone().resize(size), size])
        .map(([resizer, size]) => {
        return [
            formats.map(([format, options]) => [
                resizer
                    .clone()
                    .toFormat(format, options),
                format
            ]),
            size
        ];
    });
    return [srcStream, destStreams];
}
export default transformStreamBuilder;
//# sourceMappingURL=index.js.map