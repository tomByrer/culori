import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
import convertRgbToXyb from './convertRgbToXyb.js';
import convertXybToRgb from './convertXybToRgb.js';

/*
	The XYB color space, used in JPEG XL.
	Reference: https://ds.jpeg.org/whitepapers/jpeg-xl-whitepaper.pdf
*/

const definition = {
	mode: 'xyb',
	channels: ['x', 'y', 'b', 'alpha'],
	parse: ['--xyb'],
	serialize: '--xyb',

	toMode: {
		rgb: convertXybToRgb
	},

	fromMode: {
		rgb: convertRgbToXyb
	},

	ranges: {
		x: [-0.015, 0.028],
		y: [0, 0.845],
		b: [0, 0.845]
	},

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
