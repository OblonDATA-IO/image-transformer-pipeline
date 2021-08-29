/**
 * Image Transformer
 * Koa Utilities
 * Created by Thomas Sham on 22/10/2020.
 */

import sharp from "sharp";

const DefaultSizes = [
    480, 800, 1200,
];

const DefaultFormats: [string, any][] = [
    ["jpg", {}],
    ["webp", {}],
    ["avif", {}]
];

const DefaultOptions: any = {
    failOnError: false,
}

export function transformStreamBuilder (
    sizes: number[] = DefaultSizes,
    formats = DefaultFormats,
    options = DefaultOptions,
) {
    const srcStream = sharp(options);
    const destStreams = sizes
        .map(
            size => [srcStream.clone().resize(size), size]
        )
        .map(
            ([resizer, size]) => {
                return [
                    formats.map(
                        ([format, options]) => [
                            resizer
                                .clone()
                                .toFormat(
                                    format,
                                    options,
                                ),
                            format
                        ]
                    ),
                    size
                ];
            }
        );
    return [srcStream, destStreams];
}

export default transformStreamBuilder;
