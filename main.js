var avgPrice = items.reduce(function(total, item) {
  return total + item.price;
}, 0) / items.length;

console.log(avgPrice);


var tweener = items.filter(function(item) {
  return item.price > 14 && item.price < 18;
});

console.log(tweener);


var gbp = items.filter(function(item) {
  return item.currency_code === 'GBP';
});

console.log(gbp[0].title + ' costs ' + gbp[0].price);


var wooden = items.filter(function(item) {
  return item.materials = 'wood';
});

console.log(wooden);


var multi = items.filter(function(total, item) {
  return total + item.materials >= 8;
});

console.log(multi);


var madeBySeller = items.filter(function(item) {
  return item.who_made != 'someone_else';
});

console.log(madeBySeller);









