function simpleFunction () {
    return "hello"; 
}

async function asyncFunc1(){
    return 1; // Promise.resolve(1);
}

describe(`async function`, () => {
    it(`test simple func`, () => {
        expect(simpleFunction()).toEqual("hello");
    });
    
    it(`AsyncFunc1() return 1`, () => {
        expect(asyncFunc1()).resolves.toEqual(1);
    });

    it(`await`, () => {
        async function iuseAwait(){
            let promprom = new Promise((resolve,reject) => {
                setTimeout( () => resolve("bazinga"), 2000);
            });
            let result = await promprom;
        };
        expect(iuseAwait()).resolves.toMatch("bazinga");
    });

})