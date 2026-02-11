import { render, screen } from '@testing-library/react';
import App from './components/App';

describe('App Component', () => {
  it('renders the Hero section with key text', () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Derek David/i);
    expect(nameElements.length).toBeGreaterThan(0);
    expect(nameElements[0]).toBeInTheDocument();
  });
});
