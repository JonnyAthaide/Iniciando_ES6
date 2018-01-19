var USD = new Intl("en-US", { style:"currency", currency:"USD" });
var BRL = new Intl("pt-BR", { style:"currency", currency:"BRL" });

console.log(USD.format(13213.34));
console.log(BRL.format(13213.34));
