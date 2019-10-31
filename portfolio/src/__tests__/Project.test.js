import React from 'react';
import renderer from 'react-test-renderer';
import Project from '../components/Project List/Project.js';
import logo from '../images/pfp.jpg';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

describe('Project tests', () => {
    it('renders without crashing', () => {
        const input = {
            name: "Project test",
            description: 'im making a description for my test!!!!',
            img: logo
        }
        const newProject = renderer.create(
            <Project project={input} />
        )

        expect(newProject).toMatchSnapshot();

    })

    it('renders project title', () => {
        const input = {
            name: "Project test",
            description: 'im making a description for my test!!!!',
            img: logo
        }
        const component = render(<Project project={input} />)

        const item = document.querySelector('.item')
        const title = component.getByText('Project test')

        expect(title).toHaveClass('title');
        expect(item).toContainElement(title);
        expect(title).toBeInTheDocument();
    })

    it('renders project description', () => {
        const input = {
            name: "Project test",
            description: 'im making a description for my test!!!!',
            img: logo
        }
        const component = render(<Project project={input} />)

        const item = document.querySelector('.item')
        const description = component.getByLabelText('project-description')

        expect(item).toContainElement(description);
        expect(description).toBeInTheDocument();
    })

    it('renders error when not given right information', () => {
        const input = {
            name: 0,
            description: 'im making a description for my test!!!!',
            img: logo
        }
        const component = render(<Project project={input} />)

        const title = component.getByText(/error/i)

        expect(title).toBeInTheDocument();
    })
})