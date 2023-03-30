const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("helloo!");
};

console.log("Before");
anotherFn();
console.log("After");
