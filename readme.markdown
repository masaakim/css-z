# css-z [![Build Status](https://travis-ci.org/morishitter/css-z.svg)](https://travis-ci.org/morishitter/css-z)

Analize z-index property in CSS code.

## Installation

```
npm install css-z
```

## Example

```javascript
var z_index = require('../');

var css = ".z1{z-index:10;}.z2{z-index:20;}.z3{z-index:-3;}.z4{z-index:0;}.z5{z-index:9999;}.z6{z-index:auto;}"

z_index.num(css); // 6

z_index.max(css); // 9999

z_index.min(css); // -3

z_index.stats(css);
/*
 * [
 *   { selector: '.z1',
 *     z_value: '10'},
 *   { selector: '.z2',
 *     z_value: '20'},
 *   { selector: '.z3',
 *     z_value: '-3'},
 *   { selector: '.z4',
 *     z_value: '0'},
 *   { selector: '.z5',
 *     z_value: '9999'},
 *   { selector: '.z6',
 *     z_value: 'auto'}
 * ];
 */
```

## License
The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
