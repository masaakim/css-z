
var z_index = require('../');

var css = ".z1{z-index:10;}.z2{z-index:20;}.z3{z-index:-3;}.z4{z-index:0;}.z5{z-index:9999;}"

z_index.num(css); // 5

z_index.max(css); // 9999
z_index.min(css); // -3
z_index.stats(css);
/*
 * [
 *   { selector: '.z1',
 *     z_val: '10'},
 *   { selector: '.z2',
 *     z_val: '20'},
 *   { selector: '.z3',
 *     z_val: '-3'},
 *   { selector: '.z4',
 *     z_val: '0'},
 *   { selector: '.z5',
 *     z_val: '9999'},
 *   { selector: '.z6',
 *     z_val: 'auto'}
 * ];
 */
