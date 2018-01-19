"use strict";

var US = Intl.DateTimeFormat("en-US");
var BR = Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date("2018-01-18")));
console.log(BR.format(new Date("2018-01-18")));
