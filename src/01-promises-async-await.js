// A small helper: a Promise that finishes after 'ms' milliseconds.
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// A pretend 'server' that returns a fake user after a small delay.
function getUserFromServer(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: id, name: `Studen ${id}` });
        }, 400);
    });
}

async function main()  {
    console.log('=== 1. Promises & async/await ===\n');

    // -------- A) Using .then ---------
    console.log('A) .then style:');  // Logs the message.
    console.log('   start'); // Also logs the message.
    await wait(500).then(() => { // Waits 500ms and then logs the message.
        console.log('   500ms passed'); // Message which is logged after 500ms.
    });

    // -------- B) Using async/await ---------
    console.log('\nB) async/await style (does the same thing)');
    console.log('   start');
    await wait(500);
    console.log('   500ms passed');

    // -------- C) Calling a fake server ---------
    console.log('\nC) calling a fake server');
    console.log('   Asking for user 7...');
    const user = await getUserFromServer(7); 
    console.log('   got back:', user);

    // -------- D) Doing work in PARALLEL with Promise.all --------
    /* If three jobs do not depend on each other, run them at the same time.
    They all finish in the time of the SLOWEST one. */
    console.log('\nD) parallel work with Promise.all');
    console.log('   starting 3 things at the same time...');
    const start = Date.now();
    await Promise.all([wait(300), wait(300), wait(300)]);
    const elapsed = Date.now() - start;
    console.log(`   all 3 finished in about ${elapsed}ms`);
    console.log('   (one-by-one would take ~900ms)');

    // -------- E) Handling errors ---------
    /* If a Promise rejects, await throws an error.
    We catch it with try/catch, just like a normal exception.*/
    console.log('\nE) handling errors with try/catch');
    try {
        await new Promise((_, reject) => {
            reject(new Error('Something went wrong!'));
        });
    } catch (err) {
        console.log('   caught error:', err.message);
    }

    console.log('\nDone.\n');
}

main();