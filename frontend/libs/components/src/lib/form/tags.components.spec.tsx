import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { TagList } from './tags.component';

describe('Tags Component', () => {
    let tags: string;
    beforeEach(() => {
        tags = "['1','3','4','5']"
    })

    it('should render correctly', () => {
        const {getByText} = render(
            <TagList tags={tags}/>
        );
        expect(getByText(/#1/)).toBeTruthy();
        expect(getByText(/#3/)).toBeTruthy();
        expect(getByText(/#4/)).toBeTruthy();
        expect(getByText(/#5/)).toBeTruthy();
    });

});
