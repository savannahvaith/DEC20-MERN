describe(`A suite - its basically just a function`, () => {

    // parent level variables
    let a; 
    let b; 

    it(`it is just a spec/test`, () => {
        a = true; 
        expect(a).toBe(true);
        // expect(expected).toBe(received);
    });

    test(` Either test or IT can be used`, () => {
        a = false; 
        b = `Some String`;
        expect(b).toContain(`me`);
    });
});

describe(`Testing Matchers`, () => {
    
    // toBe = exact equality
    test(`Exact equality`, () => {
        expect(10+9).toBe(19);
    });

    // toEqual - checks recursively every field in an object/arrray
    test(`Object assignment`, () => {
        const shopping = {ham:true}; 
        shopping['cheese'] = false; 
        expect(shopping).toEqual({ham:true, cheese:false});
    }); 

    // .not. - negation of any matcher
    test(`Adding positive numbers is not zero`, () => {
        for(let a=1; a<10; a++){
            for(let b=0; b<10; b++){
                expect(a+b).not.toBe(0);
            }
        }
    });

    // to be close to
    test(`Decimal Number`, ()=>{
        const value = 0.1 + 0.2; 
        // expect(value).toBe(0.3); // Strict equality fails because IT ISN'T AN EXACT MATCH!!!
        expect(value).toBeCloseTo(0.3);
    });

    test(`There is no i in TEAM`, ()=> {
        expect("team").not.toMatch(/i/);
    }); 

    test(`BUT there is a lie in believe`, () => {
        expect(`believe`).toMatch(/lie/);
    });

    const shoppingList = ["apples", "chocolate", "coffee", "fruits", "wine", "cheese"]; 

    test(`Is there coffee in my life? `, () => {
        expect(shoppingList).toContain("coffee");
    });

    // test for errors/expections
    const submit = () => {
        // throw new Error('soz');
        console.log(`hey`);
    }

    test(`Submit function throw error!`, () => {
        // expect(submit).toThrow();
        // expect(submit).toThrow(Error);
        const submit = jest.fn();
        submit();
        expect(submit).toHaveBeenCalled();
    });

})