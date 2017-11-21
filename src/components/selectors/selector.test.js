import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
    describe('authorFormattedForDropdowns', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
            ];

            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];
        });
    });
});