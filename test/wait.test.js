const wait = require('../src/wait.js'); // Assuming 'wait.js' is in the same directory as this test file.

describe('wait class tests', () => {

    // Set the timeout to 10000 milliseconds (10 seconds) for all test cases in this describe block
    jest.setTimeout(100000);

    // Test for wait.for method
    test('wait.for should wait for the specified seconds', async () => {
        const startTime = Date.now();
        await wait.for(2);
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

        expect(elapsedTime).toBeGreaterThanOrEqual(2);
        expect(elapsedTime).toBeLessThan(2.1);
    });

    // Test for wait.until method
    test('wait.until should wait until the condition is true', async () => {
        let counter = 0;

        setTimeout(() => {
            counter = 5;
        }, 3000);

        const startTime = Date.now();
        await wait.until(() => counter === 5);
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

        expect(elapsedTime).toBeGreaterThanOrEqual(3);
        expect(elapsedTime).toBeLessThan(5);
    });

    // Test for wait.for.shortTime method
    test('wait.for.shortTime should wait for a short random time', async () => {
        const startTime = Date.now();
        await wait.shortTime();
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        expect(elapsedTime).toBeGreaterThanOrEqual(500);
        expect(elapsedTime).toBeLessThan(2500);
    });

    // Test for wait.for.longTime method
    test('wait.for.longTime should wait for a long random time', async () => {
        const startTime = Date.now();
        await wait.longTime();
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        expect(elapsedTime).toBeGreaterThanOrEqual(5000);
        expect(elapsedTime).toBeLessThan(25000);
    });

    // Test for wait.wait method
    test('wait.wait should wait for a random time', async () => {
        const startTime = Date.now();
        await wait.wait();
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        expect(elapsedTime).toBeGreaterThanOrEqual(1000);
        expect(elapsedTime).toBeLessThan(4000);
    });
});
