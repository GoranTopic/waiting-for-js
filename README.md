salvery-js
=======
#### A simple lib to make manage multiple processes on nodejs. It its makes so that it can scale on multiple machines

## Installation
```
npm install salvery-js
```
## Usage
```javascript
import slavery from 'slavery.js';

// make diffrent time outs
let make_timeout = s =>
    new Promise( resolve => {
        setTimeout( () => {
            resolve(s)
        }, s * 1000)
    })

let timeouts = [ 1, 2, 3, 4, 5, 6, 7, 8 ].reverse()

// optinos to pass to the engine    
let options = {
    numberOfSlaves: 9, // number of processes to run concurrently, this includes the master process
    // if this is not set, it will create process relative the the number of cores in the machine
    port: 3003, // port to be used to communicate between salve and master
    host: 'localhost', // network host
}

// create the engine
    slavery(options)
        .master( async master => { // initialize the master
            /* this is the functions that will run in the master */
            // wait until at least one salve is connected
            await master.untilConnected();  
            // random array of big numbers
            // for every number in the array
            for (let timeout of timeouts ){
                // get a slave that is not currely working
                let slave = await master.getIdel(); 
                slave.run(timeout)
                    .then( result => // result returned by slave
                        console.log( result )
                    );
            }
        })
.slave( async (parameter, slave) => { // create the salve 
            /* 
             * it takes a function which is to be run then master runs: 'slave.run(params)
             * the params passed to slave.run(params) is the first paramter of this function, in this case 'counter'.
             * the second is the slave object. 
             * */
            let timeout = make_timeout(parameter);
            let s = await timeout;
            // run some code
            if( s > 7 )
                return { result: `waited for ${s} seconds, 😡` }
            else if( s > 5 )
                return { result: `waited for ${s} seconds, 😐` }
            else if( s > 2  )
                return { result: `waited for ${s} seconds, 😃` }
            else
                return { result: `waited for ${s} seconds, 😄` }
        })
});
```
