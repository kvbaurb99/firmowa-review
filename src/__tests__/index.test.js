import { render, screen } from '@testing-library/react';
import Navbar from "@/Components/Navigation/Navbar";

describe('Navbar', () => {
    it('contains the text "cow"', () => {
        render(<Navbar />);
        const cowText = screen.queryByText('cow');
        expect(cowText).toBeInTheDocument();
    });
});