function greet(name){
    console.log("Hello,", name);
};

// expected behaviour
greet("nitesh")
greet("hitesh")

// unexpected behavious
greet({a: "a"});
greet(true);
greet(false);
greet(null);

/*
To ensure and protect our code behaviour here TypeScript comes.

TypeScript - JavaScript + Types Strict makes its powerful version of JavaScript;


Whats wrong with JS ? to learn ts
    - no type safety
    - errors show up at runtime
    - Weak tooling support
    - Hard to scale
*/
