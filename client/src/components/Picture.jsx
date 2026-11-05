// Renders an img with a WebP source first, falling back to the original file.
// Optional srcset/sizes enable responsive variants when they exist.
export default function Picture({
  src,
  alt,
  className,
  loading,
  width,
  height,
  srcSet,
  webpSrcSet,
  sizes,
  ...rest
}) {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet || webpSrc} sizes={sizes} />
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        decoding="async"
        {...rest}
      />
    </picture>
  )
}
