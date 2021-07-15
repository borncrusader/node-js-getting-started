function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

const fetch = require('node-fetch')

async function asyncCall() {
  while (true) {
    const result = await fetch('http://srinath-nodejs-1.herokuapp.com');
    console.log(result.status);

    await sleep(100);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

asyncCall().catch((e) => {console.log(e);});
