waiting-for-js
=======
#### A simple class which makes js wait.

## Installation

You can install the wait class using npm:

```bash

npm install waiting-for-js
```

## Usage
Importing the wait class

To use the wait class, you can import it in your JavaScript file:

```javascript
const wait = require('waiting-for-js');
```
or 

```javascript
import wait from 'waiting-for-js'
```

### Waiting for a Specific Time

You can use the wait.for(seconds) method to pause execution for a specified number of seconds. Here's an example of how to wait for 3 seconds:

```javascript

console.log("Before waiting...");
await wait.for(3);
console.log("After waiting for 3 seconds.");

```

### Waiting for a Random Short or Long Time

You can use the wait.for.shortTime() method to wait for a random short time (between 500ms and 2500ms) or wait.for.longTime() to wait for a random long time (between 5000ms and 15000ms). Here's an example of how to use these methods:

```javascript

console.log("Before waiting for a short random time...");
await wait.for.shortTime();
console.log("After waiting for a short random time.");

console.log("Before waiting for a long random time...");
await wait.for.longTime();
console.log("After waiting for a long random time.");
```

### Waiting Until a Condition is Met

You can use the wait.until(func) method to wait until a given condition is met. The method will repeatedly check the condition until it evaluates to true. Here's an example of how to use the wait.until method:

```javascript

let counter = 0;

setTimeout(() => {
counter = 5;
}, 3000);

console.log("Before waiting until the condition is met...");
await wait.until(() => counter === 5);
console.log("After waiting until the condition is met.");
```

