/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    const existingCat = result.find(
      (ele) => ele.category === transaction.category
    );
    if (existingCat) {
      existingCat.totalSpent += transaction.price;
    } else {
      let newCategory = {
        category: transaction.category,
        totalSpent: transaction.price,
      };
      result.push(newCategory);
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
