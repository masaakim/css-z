
var z_index = require('./');

var css = ".z1{z-index:10;}.z2{z-index:20;}.z3{z-index:-3;}.z4{z-index:0;}.z5{z-index:9999;}"

z_index.num(css);
z_index.max(css);
z_index.min(css);
z_index.stats(css);
