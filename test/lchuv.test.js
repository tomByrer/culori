import test from 'node:test';
import assert from 'node:assert';
import { lchuv, rgb, formatCss } from '../src/index.js';

test('lchuv', t => {
	assert.deepEqual(
		lchuv('white'),
		{
			mode: 'lchuv',
			l: 100.00000139649632,
			c: 0.000013192899605235416,
			h: 129.3684297210339
		},
		'white'
	);
	assert.deepEqual(lchuv('black'), { mode: 'lchuv', l: 0, c: 0 }, 'black');
	assert.deepEqual(
		lchuv('red'),
		{
			mode: 'lchuv',
			l: 54.29054294696968,
			c: 176.94953872495253,
			h: 8.434231142939021
		},
		'red'
	);
	assert.deepEqual(
		lchuv('#00cc0080'),
		{
			mode: 'lchuv',
			l: 71.74973747305378,
			c: 99.4709666171262,
			h: 134.23124010020916,
			alpha: 0.5019607843137255
		},
		'#00cc0080'
	);
});

test('color(--lchuv)', t => {
	assert.deepEqual(lchuv('color(--lchuv 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'lchuv'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--lchuv 30 0.5 1 / 0.25)'),
		'color(--lchuv 30 0.5 1 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--lchuv none 0.5 none)'), 'lchuv to rgb is ok');
	assert.deepEqual(
		rgb('color(--lchuv none 0.5 none)'),
		rgb('color(--lchuv 0 0.5 0)')
	);
	assert.ok(lchuv('rgb(none 100 20)'), 'rgb to lchuv is ok');
	assert.deepEqual(lchuv('rgb(none 100 20)'), lchuv('rgb(0 100 20)'));
});
