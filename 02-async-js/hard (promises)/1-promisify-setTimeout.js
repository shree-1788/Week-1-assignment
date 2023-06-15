/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res, rej) =>
    setTimeout((ele) => {
      res();
    }, n * 1000)
  );
}

try {
  wait(4)
    .then(() => {
      console.log("Resoled now");
    })
    .catch((err) => {
      console.log(`${err.message}`);
    });
} catch (error) {
  console.log(error);
}
