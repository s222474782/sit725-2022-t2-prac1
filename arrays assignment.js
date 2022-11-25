let days of the week = ['monday, 'tuesday', 'wednesday', 'thursday'];

// remove the last element
daysoftheweek.pop();
console.log(daysoftheweek   ); // ['monday', 'tuesday, 'wednesday']

// remove the last element
daysoftheweek.pop();
console.log(daysoftheweek   ); // ['monday', 'tuesday']


//get removed element
console.log(removedElement); // 'tuesday'
console.log(daysoftheweek);  // ['monday']

// remove the first element
daysoftheweek.shift();

console.log(daysoftheweek); // ['monday',]
console.log(daysoftheweek.length); // 