import { render, screen } from '@testing-library/react';

// Puts the Hello component on a virtual screen
function Hello() {
    return <h1>Hello, World</h1>;
}


// First test
test('shows Hello World on screen', () => {
    // Step 1: Render the component
    render(<Hello />);

    // Step 2: Finds the element containing "Hello, World!"
    const heading = screen.getByText('Hello, World');

    // Step 3: Is this element actually on the screen?
    expect(heading).toBeInTheDocument();
});