/*
	Keep an eye on the API surface of the various bundles
 */
import test from 'node:test';
import assert from 'node:assert';

import * as full from '../src/index.js';
import * as css from '../src/bootstrap/css.js';
import * as all from '../src/bootstrap/all.js';
import * as fn from '../src/index-fn.js';

const API_FULL = [
	'a98',
	'average',
	'averageAngle',
	'averageNumber',
	'blend',
	'blerp',
	'clampChroma',
	'clampGamut',
	'clampRgb',
	'colorsNamed',
	'convertA98ToXyz65',
	'convertCubehelixToRgb',
	'convertDlchToLab65',
	'converter',
	'convertHsiToRgb',
	'convertHslToRgb',
	'convertHsvToRgb',
	'convertHwbToRgb',
	'convertItpToXyz65',
	'convertJabToJch',
	'convertJabToRgb',
	'convertJabToXyz65',
	'convertJchToJab',
	'convertLab65ToDlch',
	'convertLab65ToRgb',
	'convertLab65ToXyz65',
	'convertLabToLch',
	'convertLabToRgb',
	'convertLabToXyz50',
	'convertLchToLab',
	'convertLchuvToLuv',
	'convertLrgbToOklab',
	'convertLrgbToRgb',
	'convertLuvToLchuv',
	'convertLuvToXyz50',
	'convertOkhslToOklab',
	'convertOkhsvToOklab',
	'convertOklabToLrgb',
	'convertOklabToOkhsl',
	'convertOklabToOkhsv',
	'convertOklabToRgb',
	'convertP3ToXyz65',
	'convertProphotoToXyz50',
	'convertRec2020ToXyz65',
	'convertRgbToCubehelix',
	'convertRgbToHsi',
	'convertRgbToHsl',
	'convertRgbToHsv',
	'convertRgbToHwb',
	'convertRgbToJab',
	'convertRgbToLab',
	'convertRgbToLab65',
	'convertRgbToLrgb',
	'convertRgbToOklab',
	'convertRgbToXyb',
	'convertRgbToXyz50',
	'convertRgbToXyz65',
	'convertRgbToYiq',
	'convertXybToRgb',
	'convertXyz50ToLab',
	'convertXyz50ToLuv',
	'convertXyz50ToProphoto',
	'convertXyz50ToRgb',
	'convertXyz50ToXyz65',
	'convertXyz65ToA98',
	'convertXyz65ToItp',
	'convertXyz65ToJab',
	'convertXyz65ToLab65',
	'convertXyz65ToP3',
	'convertXyz65ToRec2020',
	'convertXyz65ToRgb',
	'convertXyz65ToXyz50',
	'convertYiqToRgb',
	'cubehelix',
	'differenceCie76',
	'differenceCie94',
	'differenceCiede2000',
	'differenceCmc',
	'differenceEuclidean',
	'differenceHueChroma',
	'differenceHueNaive',
	'differenceHueSaturation',
	'differenceHyab',
	'differenceKotsarenkoRamos',
	'differenceItp',
	'displayable',
	'dlab',
	'dlch',
	'easingGamma',
	'easingInOutSine',
	'easingMidpoint',
	'easingSmootherstep',
	'easingSmoothstep',
	'easingSmoothstepInverse',
	'filterBrightness',
	'filterContrast',
	'filterDeficiencyDeuter',
	'filterDeficiencyProt',
	'filterDeficiencyTrit',
	'filterGrayscale',
	'filterHueRotate',
	'filterInvert',
	'filterSaturate',
	'filterSepia',
	'fixupAlpha',
	'fixupHueDecreasing',
	'fixupHueIncreasing',
	'fixupHueLonger',
	'fixupHueShorter',
	'formatCss',
	'formatHex',
	'formatHex8',
	'formatHsl',
	'formatRgb',
	'getMode',
	'hsi',
	'hsl',
	'hsv',
	'hwb',
	'itp',
	'inGamut',
	'interpolate',
	'interpolateWith',
	'interpolateWithPremultipliedAlpha',
	'interpolatorLinear',
	'interpolatorPiecewise',
	'interpolatorSplineBasis',
	'interpolatorSplineBasisClosed',
	'interpolatorSplineMonotone',
	'interpolatorSplineMonotone2',
	'interpolatorSplineMonotoneClosed',
	'interpolatorSplineNatural',
	'interpolatorSplineNaturalClosed',
	'jab',
	'jch',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lchuv',
	'lerp',
	'lrgb',
	'luv',
	'mapAlphaDivide',
	'mapAlphaMultiply',
	'mapper',
	'mapTransferGamma',
	'mapTransferLinear',
	'modeA98',
	'modeCubehelix',
	'modeDlab',
	'modeDlch',
	'modeHsi',
	'modeHsl',
	'modeHsv',
	'modeHwb',
	'modeItp',
	'modeJab',
	'modeJch',
	'modeLab',
	'modeLab65',
	'modeLch',
	'modeLch65',
	'modeLchuv',
	'modeLrgb',
	'modeLuv',
	'modeOkhsl',
	'modeOkhsv',
	'modeOklab',
	'modeOklch',
	'modeP3',
	'modeProphoto',
	'modeRec2020',
	'modeRgb',
	'modeXyb',
	'modeXyz50',
	'modeXyz65',
	'modeYiq',
	'nearest',
	'okhsl',
	'okhsv',
	'oklab',
	'oklch',
	'p3',
	'parse',
	'parseHex',
	'parseHsl',
	'parseHslLegacy',
	'parseHwb',
	'parseLab',
	'parseLch',
	'parseNamed',
	'parseOklab',
	'parseOklch',
	'parseRgb',
	'parseRgbLegacy',
	'parseTransparent',
	'prophoto',
	'random',
	'rec2020',
	'removeParser',
	'rgb',
	'round',
	'samples',
	'serializeHex',
	'serializeHex8',
	'serializeHsl',
	'serializeRgb',
	'toGamut',
	'trilerp',
	'unlerp',
	'useMode',
	'useParser',
	'wcagContrast',
	'wcagLuminance',
	'xyb',
	'xyz50',
	'xyz65',
	'yiq'
];
const API_CSS = [
	'a98',
	'hsl',
	'hsv',
	'hwb',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lrgb',
	'oklab',
	'oklch',
	'p3',
	'prophoto',
	'rec2020',
	'rgb',
	'xyz50',
	'xyz65'
];

const API_ALL = [
	'a98',
	'cubehelix',
	'dlab',
	'dlch',
	'hsi',
	'hsl',
	'hsv',
	'hwb',
	'itp',
	'jab',
	'jch',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lchuv',
	'lrgb',
	'luv',
	'okhsl',
	'okhsv',
	'oklab',
	'oklch',
	'p3',
	'prophoto',
	'rec2020',
	'rgb',
	'xyb',
	'xyz50',
	'xyz65',
	'yiq'
];

const API_FN = [
	'average',
	'averageAngle',
	'averageNumber',
	'blend',
	'blerp',
	'clampChroma',
	'clampGamut',
	'clampRgb',
	'colorsNamed',
	'convertA98ToXyz65',
	'convertCubehelixToRgb',
	'convertDlchToLab65',
	'converter',
	'convertHsiToRgb',
	'convertHslToRgb',
	'convertHsvToRgb',
	'convertHwbToRgb',
	'convertItpToXyz65',
	'convertJabToJch',
	'convertJabToRgb',
	'convertJabToXyz65',
	'convertJchToJab',
	'convertLab65ToDlch',
	'convertLab65ToRgb',
	'convertLab65ToXyz65',
	'convertLabToLch',
	'convertLabToRgb',
	'convertLabToXyz50',
	'convertLchToLab',
	'convertLchuvToLuv',
	'convertLrgbToOklab',
	'convertLrgbToRgb',
	'convertLuvToLchuv',
	'convertLuvToXyz50',
	'convertOkhslToOklab',
	'convertOkhsvToOklab',
	'convertOklabToLrgb',
	'convertOklabToOkhsl',
	'convertOklabToOkhsv',
	'convertOklabToRgb',
	'convertP3ToXyz65',
	'convertProphotoToXyz50',
	'convertRec2020ToXyz65',
	'convertRgbToCubehelix',
	'convertRgbToHsi',
	'convertRgbToHsl',
	'convertRgbToHsv',
	'convertRgbToHwb',
	'convertRgbToJab',
	'convertRgbToLab',
	'convertRgbToLab65',
	'convertRgbToLrgb',
	'convertRgbToOklab',
	'convertRgbToXyb',
	'convertRgbToXyz50',
	'convertRgbToXyz65',
	'convertRgbToYiq',
	'convertXybToRgb',
	'convertXyz50ToLab',
	'convertXyz50ToLuv',
	'convertXyz50ToProphoto',
	'convertXyz50ToRgb',
	'convertXyz50ToXyz65',
	'convertXyz65ToA98',
	'convertXyz65ToItp',
	'convertXyz65ToJab',
	'convertXyz65ToLab65',
	'convertXyz65ToP3',
	'convertXyz65ToRec2020',
	'convertXyz65ToRgb',
	'convertXyz65ToXyz50',
	'convertYiqToRgb',
	'differenceCie76',
	'differenceCie94',
	'differenceCiede2000',
	'differenceCmc',
	'differenceEuclidean',
	'differenceHueChroma',
	'differenceHueNaive',
	'differenceHueSaturation',
	'differenceHyab',
	'differenceKotsarenkoRamos',
	'differenceItp',
	'displayable',
	'easingGamma',
	'easingInOutSine',
	'easingMidpoint',
	'easingSmootherstep',
	'easingSmoothstep',
	'easingSmoothstepInverse',
	'filterBrightness',
	'filterContrast',
	'filterDeficiencyDeuter',
	'filterDeficiencyProt',
	'filterDeficiencyTrit',
	'filterGrayscale',
	'filterHueRotate',
	'filterInvert',
	'filterSaturate',
	'filterSepia',
	'fixupAlpha',
	'fixupHueDecreasing',
	'fixupHueIncreasing',
	'fixupHueLonger',
	'fixupHueShorter',
	'formatCss',
	'formatHex',
	'formatHex8',
	'formatHsl',
	'formatRgb',
	'getMode',
	'inGamut',
	'interpolate',
	'interpolateWith',
	'interpolateWithPremultipliedAlpha',
	'interpolatorLinear',
	'interpolatorPiecewise',
	'interpolatorSplineBasis',
	'interpolatorSplineBasisClosed',
	'interpolatorSplineMonotone',
	'interpolatorSplineMonotone2',
	'interpolatorSplineMonotoneClosed',
	'interpolatorSplineNatural',
	'interpolatorSplineNaturalClosed',
	'lerp',
	'mapAlphaDivide',
	'mapAlphaMultiply',
	'mapper',
	'mapTransferGamma',
	'mapTransferLinear',
	'modeA98',
	'modeCubehelix',
	'modeDlab',
	'modeDlch',
	'modeHsi',
	'modeHsl',
	'modeHsv',
	'modeHwb',
	'modeItp',
	'modeJab',
	'modeJch',
	'modeLab',
	'modeLab65',
	'modeLch',
	'modeLch65',
	'modeLchuv',
	'modeLrgb',
	'modeLuv',
	'modeOkhsl',
	'modeOkhsv',
	'modeOklab',
	'modeOklch',
	'modeP3',
	'modeProphoto',
	'modeRec2020',
	'modeRgb',
	'modeXyb',
	'modeXyz50',
	'modeXyz65',
	'modeYiq',
	'nearest',
	'parse',
	'parseHex',
	'parseHsl',
	'parseHslLegacy',
	'parseHwb',
	'parseLab',
	'parseLch',
	'parseNamed',
	'parseOklab',
	'parseOklch',
	'parseRgb',
	'parseRgbLegacy',
	'parseTransparent',
	'random',
	'removeParser',
	'round',
	'samples',
	'serializeHex',
	'serializeHex8',
	'serializeHsl',
	'serializeRgb',
	'toGamut',
	'trilerp',
	'unlerp',
	'useMode',
	'useParser',
	'wcagContrast',
	'wcagLuminance'
];

test('culori', t => {
	assert.deepEqual(Object.keys(full).sort(), API_FULL.sort());
});

test('culori/css', t => {
	assert.deepEqual(Object.keys(css).sort(), API_CSS.sort());
});

test('culori/all', t => {
	assert.deepEqual(Object.keys(all).sort(), API_ALL.sort());
});

test('culori/fn', t => {
	assert.deepEqual(Object.keys(fn).sort(), API_FN.sort());
});
