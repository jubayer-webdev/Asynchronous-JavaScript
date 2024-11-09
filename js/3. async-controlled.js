const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};

takeOrder("customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

//! Question 1:
/*
akeOrder("customer 1", processOrder);
takeOrder("customer 1", (customer) => processOrder(customer));

are they equivalent? 
--------------------------------------------------------
Yes, `takeOrder("customer 1", processOrder);` and `takeOrder("customer 1", (customer) => processOrder(customer));` are functionally equivalent in this context, as long as `processOrder` is defined to take one argument.

 */

//! observation 2
/*
Version 1: Using Arrow Functions
takeOrder("customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

Version 2: Using Regular (Anonymous) Functions
takeOrder("customer 1", function(customer) {
    processOrder(customer, function(customer) {
        completeOrder(customer);
    });
});

Version 3: Using Function Names Directly
takeOrder("customer 1", function(customer) {
    processOrder(customer, completeOrder);
});

//* These thee are same.
*/
