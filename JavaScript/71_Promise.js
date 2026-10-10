// Promise = An object that manages asynchronous operations
//         Wrap a Promise Object around { Asynchronous code }
//         "I promise to return a value "
//
//   PENDING -> RESOLVED or REJECTED
//   new Promise(resolve , reject ) => { asynchronous code }
//
    //          Promise
    //             |
    //     ----------------
    //     |              |
    //   success        failure
    //     |              |
    //   resolve         reject
    //     |              |
    //   .then()        .catch()
    


//Promise { 'Hello' } -> It is normal output of promise object when we print it in console

//---------------------Example 1 : Printing status-----------------------------
// when we print a promise  it shows the  status and value if it completed

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

const result = getData();
console.log(result);

const p = new Promise((resolve, reject) => {
  resolve("Hello");
});

console.log(p);
p.then((value) => {
  console.log(value);
});

const q = new Promise((resolve, reject) => {
  reject("Hello");
});

//console.log(q); // if we write directly for reject showing error
q.catch((error) => {
  console.log(error);
});

//------------------------ Example 2 : Use of Promise-------------------------

// Suppose we need to do:

// 1. Get User
//       ↓
// 2. Get User ID
//       ↓
// 3. Use User ID to get Orders
//       ↓
// 4. Show Order History

// We cannot do step 3 before step 2,
//  because we don't have the user ID to see his orders.

// const user = getUser(); // suppose it take 2 seconds
// const orders = getOrders(user.id);// prints undefined as
// // value not present js runs without waiting

// getUser()
//   .then((user) => {
//     return getOrders(user.id);
//   })
//   .then((orders) => {
//     console.log(orders);
//   });

//   getUser()
//     ↓
// WHEN user is available
//     ↓
// THEN getOrders(user.id)
//     ↓
// WHEN orders are available
//     ↓
// THEN show orders

//-------------------Example 3-------------------------------

//Do these in the order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog 🐕");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the kitchen 🧹");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You take out the trash ♻️");
    callback();
  }, 500);
}
// Call back Hell

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("All tasks are over");
    });
  });
});

// Using the promises in each function return promises
// now no need of callbacks

function walkDog1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}

function cleanKitchen1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen 🧹");
    }, 2500);
  });
}

function takeOutTrash1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash ♻️");
    }, 500);
  });
}

walkDog1()
  .then((value) => {
    console.log(value);
    return cleanKitchen1();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash1();
  })
  .then((value) => {
    console.log(value);
    console.log(" Sai Ram!");
  });

//-------------------Example 4-------------------------------

function walkDog41() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;

      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't the dog 🐕");
      }
    }, 1500);
  });
}

function cleanKitchen42() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clean = false;

      if (clean) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You  didn't clean the kitchen 🧹");
      }
    }, 2500);
  });
}

function takeOutTrash43() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = false;

      if (trash) {
        resolve("You take out the trash🧹");
      } else {
        reject("You didn't take out the trash🧹");
      }
    }, 500);
  });
}

walkDog41()
  .then((value) => {
    console.log(value);
    return cleanKitchen42();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash43();
  })
  .then((value) => {
    console.log(value);
    console.log("Sai Ram!");
  })
  .catch((error) => {
    console.log(error);
  });

//------------------ EXAMPLE 5----------------------

// If you have multiple catch and error blocks

// promise.then(A).then(B).catch(C).then(D).then(E).catch(F);


// 1) if you have no error then runs the then() skips the catch block

// 2) if you have error the all the then() block will before
//  catch will skip . the catch block resolves that 
// errror so then blocks after coming runs and catch 
// blocks skips works normally after the error
// is resolved


// cases : 

// 1) No error happens

// promise
//    ↓
//   A ✅
//    ↓
//   B ✅
//    ↓
//   C ❌ skipped
//    ↓
//   D ✅
//    ↓
//   E ✅
//    ↓
//   F ❌ skipped


// Case 2: Error after  A 

// promise
//    ↓
//   A ❌ ERROR
//    ↓
//   B ❌ skipped
//    ↓
//   C ✅ runs
//    ↓
//   D ✅ runs
//    ↓
//   E ✅ runs
//    ↓
//   F ❌ skipped


// Case 3: Error happens in B

// promise
//    ↓
//   A ✅
//    ↓
//   B ❌ ERROR
//    ↓
//   C ✅ runs
//    ↓
//   D ✅ runs
//    ↓
//   E ✅ runs
//    ↓
//   F ❌ skipped


// Case 4: Error happens in D

// promise
//    ↓
//   A ✅
//    ↓
//   B ✅
//    ↓
//   C ❌ skipped
//    ↓
//   D ❌ ERROR
//    ↓
//   E ❌ skipped
//    ↓
//   F ✅ runs