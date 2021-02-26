import EndContactCard from '../Components/03-Props/ContactCard-Example/EndContactCard';
import {create} from 'react-test-renderer';
import EndContact from '../Components/03-Props/ContactCard-Example/EndContact';

describe(`End Contact Card Testing with Props`, () => {

    const props = {
        img: `https://placedog.net/300/200?id=43`,
        name: `Harry Pawter`, 
        phone: `01234567890`, 
        email: "harry@therealone.com"
    }

    let componentToTest;

    beforeEach( () => {
        const TestInstance = create(<EndContactCard {...props}/>);
        componentToTest = TestInstance.root; 
        // console.log(componentToTest);
    });

    it(`Should render a h3 with the name of the puppy`, () => {
        const h3 = componentToTest.findByType(`h3`);
        // console.log(img)
        expect(h3.children).toEqual([props.name]);
    });

    it(`Should render the phone in the first p tag`, () => {
        const firstP = componentToTest.findAllByType(`p`)[0];
        console.log(firstP.children[1])
        expect(firstP.children[1]).toContain([props.phone]);
    });

    it(`Should match the snapshot!!`, () => {
        const instance = create(<EndContactCard {...props}/>).toJSON();
        expect(instance).toMatchSnapshot();
    });

    const childComp = jest.mock(`../Components/03-Props/ContactCard-Example/EndContactCard`, () => {
        return function EndContact(props){
            return(<p>Mocked components!</p>);
        }
    });

    it(`should match this:`, () => {
        const instance = create(<EndContact/>).toJSON();
        expect(instance).toReturnWith(childComp);
    });

});