const _ = require('./lodash.js')

let nums = [1,2,3,4,5,6,7,8,9,0]

let unique = _.uniq(nums)

let sum = _.sum(unique)

console.log('sum', sum)

let people =[
	{
		name: 'mae',
		age: 20
	},
	{
		name: 'chang',
		age: 44
	},
	{
		name: 'jeff',
		age: 22
	}
]

let chang = _.find(people, (e) =>{
	return e.name == 'chang'
})

console.log('chang', chang);

let orderd = _.orderBy(people, 'age' ['desc'])

console.log('orderd', orderd)

let ages_double = _.map(people, (e) => {
	return {
		name: e.name,
		age: e.age * 2
	}
})
console.log('ages_double', ages_double)

let products =[
	{
		name: 'toy',
		price: 2,
		code: 123
	},
	{
		name: 'toy',
		price: 2,
		code: 123
	},
	{
		name: 'car',
		price: 50,
		code: 456
	},
	{
		name: 'phone',
		price: 55,
		code: 786
	},
	{
		name: 'computer',
		price: 32,
		code: 342
	}
]
//ordering y price in descending order
let order_price = _.orderBy(products, 'price' ['desc'])
//finding products by unique code
let uniq_code = _.uniqBy(order_price,(e) => {
  return e.price
});
// let uniq_code = _.uniq(products, 'code')
console.log('print', uniq_code)


//adding 10% tax to the price of the unique coded items
let add_tax = _.map(uniq_code, (f) => {
	return {
		name: f.name,
		price: f.price * 1.1,
		code: f.code
	}
})
// console.log('addtax', add_tax)

//now getting sum of prices once tax has been added
let sumBy = _.sumBy(add_tax, function(o) { return o.price; })
console.log('sumBy', sumBy)
