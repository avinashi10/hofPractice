// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
//var numbers = [10, 7, 2, 4, 6, 14, 5, 82, 25, 30, 100, 246];
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(number, index) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

//var tweets = [
  // {
  //   "user": "douglascalhoun",
  //   "message": "that wizard overhauled this worm #techlife",
  //   "createdAt": "2022-09-05T21:39:19.281Z",
  //   "profilePhotoURL": "./assets/img/user-3.png"
  // },
// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var tweetArr = [];
  _.each(tweets, function(item) {
    if (item['user'] === user) {
      tweetArr.push(item);
    }
  });
  return tweetArr;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var filterArr = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return filterArr;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var filterArr = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return filterArr;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var filterArr = _.filter(desserts, function(item) {
    return item['type'] === 'cookie';
  });
  return filterArr;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var filterArr = _.filter(tweets, function(item) {
    return item['user'] === user;
  });
  return filterArr;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var mapArr = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return mapArr;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var mapArr = _.map(desserts, function(obj) {
    if (obj['ingredients'].includes('flour')) {
      obj['glutenFree'] = false;
      return obj;
    } else {
      obj['glutenFree'] = true;
      return obj;
    }
  });
  return mapArr;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var strArr = _.map(tweets, function(obj) {
    return obj['message'];
  });
  return strArr;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var mapArr = _.map(groceries, function(obj) {
    var priceFloat = parseFloat(obj['price'].slice(1));
    var salePrice = priceFloat - coupon;
    obj['salePrice'] = '$' + salePrice;
    return obj;
  });
  return mapArr;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (groceries) {
  var total = _.reduce(groceries, function(obj) {
    var subTotal = 0;
    subTotal += obj['price'];
    return subTotal;
  });
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
