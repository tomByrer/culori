# Culori

<figure style='text-align: center'>
	<img src='./.github/man-rainbow.jpg' width='400'/>
	<figcaption style='font-size: 0.8em'>“Man before a rainbow” (ca. 1700) — <a href='https://www.rijksmuseum.nl/en/collection/RP-P-1896-A-19368-1803'>Rijksmuseum</a>, via <a href='https://publicdomainreview.org'>The Public Domain Review</a>.</figcaption>
</figure>

⚠ _Until __v1.0.0__ the API is a work-in-progress and will be changing quite a bit._

Culori is a general-purpose color library for JavaScript. It incorporates, and extends, ideas from Mike Bostock's [D3.js](https://github.com/d3) and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js).

__Color Spaces__. Culori supports all the formats defined in the [CSS Colors Level 4][css4-colors]: [Named colors][css4-named-colors], [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (3 to 8 digits), [RGB](https://drafts.csswg.org/css-color/#rgb-functions), [HSL](https://drafts.csswg.org/css-color/#the-hsl-notation), [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation), [Lab and LCh](https://drafts.csswg.org/css-color/#lab-colors), and [Grays](https://drafts.csswg.org/css-color/#grays). Additionally, the [Linear RGB](https://en.wikipedia.org/wiki/SRGB#The_sRGB_transfer_function_(%22gamma%22)), [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (also known as HSB), [HSI](https://en.wikipedia.org/wiki/HSL_and_HSV), and [Cubehelix](https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/) color spaces are supported.

__Color Differences__. Culori can compute [color differences](https://en.wikipedia.org/wiki/Color_difference) with either a simple Euclidean distance or the CIELAB Delta E* metric as formulated by CIE76, CIE94, CIEDE2000 and CMC l:c (1984). They're also available [as a D3 plugin](https://github.com/danburzo/d3-color-difference). It can also find the closest N colors from a set of colors based on any of these differences.

## Foreword

If you're thinking _Do we really need another JavaScript color library?_, I hear you. Reader, for the most part, we don't. Mike Bostock's [d3-color](https://github.com/d3/d3-color), and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js) are two robust libraries that provide most of what you need for working with colors on the web<sup>1</sup>. I'll admit Culori<sup>2</sup> is foremost a reflection of my own curiousity in understanding color spaces at a deeper level. But it also ended up a fairly fast, and fairly comprehensive, toolkit for manipulating colors — and with an implementation that has certain advantages.

The _alpha_ channel which governs a color's opacity is treated differently than in other libaries, in that we don't equate an _undefined_ alpha with an alpha of 1. The hex string <kbd>#ff0000</kbd> _should_ eventually be interpreted as a fully-opaque red color, but at the color-manipulation level we want to draw the distinction between <kbd>#ff0000</kbd> and <kbd>#ff0000ff</kbd>, which has an explicit alpha channel. 

When developing the API, I tried to balance brevity, convenience and flexibility. It ended up a more-or-less functional API, i.e. a collection of functions you can pipe data through. It's not as readable as a fluent API where you chain methods, but it's much more flexible, I think.

---

<sup>1</sup> Other popular libraries you may want to look at are [TinyColor](https://github.com/bgrins/TinyColor) by [Brian Grinstead](http://briangrinstead.com), [color](https://github.com/Qix-/color) by Heather Arthur, [color.js](https://github.com/brehaut/color-js) by Andrew Brehaut et al, and [chromatist](https://github.com/jrus/chromatist) by [Jacob Rus](http://www.hcs.harvard.edu/~jrus/).

<sup>2</sup> from the Romanian word for ‘colors’.

## Getting Started

TODO

## API Reference

* [Basics](#basics)
* [Interpolation](#interpolation)
* [Difference](#difference)

### Basics

§ culori.__parse__( _string_ ) → _color_ or _undefined_

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return _undefined_.

§ culori.__converter__( _mode = "rgb"_ ) → _function_

Returns a function that can then convert any color to the _mode_ color space:

```js
var rgb = culori.converter('rgb');
rgb('#f0f0f0');
```

Currently, the available modes are: 

Mode | For | Shortcut
---- | --- | --------
`rgb` | RGB color space | __culori__( _color_ )  and culori.__rgb__( _color_ )
`hsl` | HSL color space | culori.__hsl__( _color_ ) 
`hsv` | HSV color space | culori.__hsv__( _color_ )
`hsi` | HSI color space | culori.__hsi__( _color_ )
`hwb` | HWB color space | culori.__hwb__( _color_ )
`lab` | Lab color space | culori.__lab__( _color_ ) 
`lch` | LCh color space | culori.__lch__( _color_ )
`lrgb`| Linearized RGB color space | culori.__lrgb__( _color_ )
`cubehelix` | Cubehelix color space | culori.__cubehelix__( _color_ )

§ culori.__formatter__( _format = 'rgb'_ )

§ culori.__round__( _n = 8_ )

Returns a function that rounds numbers to at most _n_ digits of precision.

### Interpolation

§ culori.__interpolate__( _colors_, _mode = "rgb"_ )

Returns an interpolator between an array of colors in the _mode_ color space.

§ culori.__samples__( _n = 2_, _γ = 1_ )

Returns an array of _n_ equally-spaced samples from the `[0, 1]` range, with `0` and `1` at the ends. The function also accepts a _γ_ (gamma) parameter which will map each value _t_ to _t_<sup>γ</sup>.

```js
culori.samples(3); // => [0, 0.5, 1]
culori.samples(5); // => [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for `culori.interpolate` to generate color scales:

```js
let grays = culori.interpolate(['#fff', '#000']);
samples(5).map(grays);
```

#### Interpolation functions

§ culori.__interpolateFunctionLinear__

§ culori.__interpolateFunctionSpline__

§ culori.__interpolateFunctionMonotone__

§ culori.__interpolateFunctionCosine__

#### Interpolation modes

§ culori.__interpolateNumber__

§ culori.__interpolateHue__

§ culori.__interpolateAlpha__

### Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas.

#### Formulas

Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors. 

Formula | Notes
------- | -----
§ culori.__differenceEuclidean__( _mode = 'rgb'_ ) | Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.
§ culori.__differenceCie76__() | Returns a [CIE76](https://en.wikipedia.org/wiki/Color_difference#CIE76) Delta E* function. It is analogous to computing the Euclidean distance in the Lab color space.
§ culori.__differenceCie94__( _kL = 1_, _K1 = 0.045_, _K2 = 0.015_ ) | Returns a [CIE94](https://en.wikipedia.org/wiki/Color_difference#CIE94) Delta E* function.
§ culori.__differenceCiede2000__( _Kl = 1_, _Kc = 1_, _Kh = 1_ ) | Returns a [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) Delta E* function.
§ culori.__differenceCmc__() |  Returns a [CMC l:c 1984](https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)) Delta E* function. Please note that _differenceCmc_ is not a metric, therefore it cannot be used with _nearest()_.

#### Nearest color(s)

§ culori.__nearest__( _colors_, _metric = differenceEuclidean()_, _accessor = identity_ ) → _function(color, n = 1, τ = Infinity)_.

For a given _metric_ color difference formula, and an array of _colors_, returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_.

Pass _n = Infinity_ to get all colors in the array with a maximum distance of _τ_.

## Color Spaces

TODO

### HSL

The figure above shows a slice of the HSL color space for a particular hue:

<img src='./.github/hsl-spectrum.png' width='200'/>

### HSV

The figure above shows a slice of the HSV color space for a particular hue:

<img src='./.github/hsv-spectrum.png' width='200'/>

### HSI

The figure above shows a slice of the HSI color space for a particular hue:

<img src='./.github/hsi-spectrum.png' width='200'/>

## Culori Recipes

#### Relative luminance of a color

The [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) of a color is defined as:

```
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

Where R, G, and B are the components from the LRGB color space.

To compute it in Culori:

```js
function luminance(color) {
	let c = culori.lrgb(color);
	return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
}
```

__Note:__ The WCAG defines the luminance using a [deprecated value](https://github.com/w3c/wcag/issues/236#issuecomment-379526596) for converting sRGB to LRGB. If you'd like a strict implementation, you'll need to write your own sRGB → LRGB conversion.

#### Contrast ratio

Using the `luminance()` function above, the `contrast()` ratio is simply the ratio between the luminances of two colors, with the values shifted by 0.05 to avoid division by zero when comparing against black.

```js
function contrast(colorA, colorB) {
	let L1 = luminance(colorA);
	let L2 = luminance(colorB);
	return (L1 + 0.05) / (L2 + 0.05);
}
```

## Extending Culori

TODO

## Further reading

* [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) on Wikipedia
* [CSS Color Module Level 4][css4-colors]
* [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value)

## Colophon

* _Author_ [Dan Burzo](http://danburzo.ro)
* _License_ [MIT](./LICENSE)
* _Inspired by_ [d3-color](https://github.com/d3/d3-color), [d3-interpolate](https://github.com/d3/d3-interpolate), [chroma.js](https://github.com/gka/chroma.js)
* _Dependencies_ none
* _Bundled with_ [rollup](https://github.com/rollup/rollup), [buble](https://github.com/Rich-Harris/buble)
* _Tested with_ [tape](https://github.com/substack/tape)


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors