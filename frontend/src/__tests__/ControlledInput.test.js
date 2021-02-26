import ControlledInput from '../Components/06-Forms/ControlledInput';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Form Testing`,  () => {
    describe(`onSubmit Test`, () => {

        // create a fake function 
        // const mockSubmit = jest.fn();
        const data = "Test name";
        
        it(`Should update the name of the state when the text input is typed in`, () => {
            // arrange, act, assert
            
            //arranging
            const {container} = render(<ControlledInput/>);
            const nameInput = container.querySelector(`[name="username"]`); 
            expect(nameInput.value).toEqual(``);
            
            // act - simulated typing
            userEvent.type(nameInput, data);
            
            // assert 
            expect(nameInput.value).toEqual(data);
        });
        
        it(`Should call the handleSubmit() when the submit button is clicked`, () => {
            const mockSubmit = jest.fn();

            // ARRANGE
            // grab the component and store in a variable 
            const {container} = render(<ControlledInput/>);

            // get the input field
            const nameInput = container.querySelector(`[name="username"]`);
            // get the button 
            const button = container.querySelector(`[type="submit"]`);

            // ACT
            userEvent.type(nameInput, data); 
            button.onClick=mockSubmit();

            // ASSERT
            expect(mockSubmit).toHaveBeenCalled();
        });

    });
});