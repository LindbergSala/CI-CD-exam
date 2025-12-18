import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import router from '../router';

describe('G-Krav Tester', () => {
    beforeEach(async () => {
        sessionStorage.clear();
        await router.navigate('/'); 
    });

    // User Story 1, 2 & 4: Boka, Välja skor, Få kvitto
    it('ska kunna genomföra en hel bokning och få kvitto', async () => {
        const user = userEvent.setup();
        render(<App />);

        // 1. Fyll i tid och antal
        await user.type(screen.getByTestId('date'), '2023-12-24');
        await user.type(screen.getByTestId('time'), '18:00');
        await user.type(screen.getByTestId('players'), '2');
        await user.type(screen.getByTestId('lanes'), '1');

        // 2. Välj skor (2 par)
        const addShoe = screen.getByTestId('add-shoe');
        await user.click(addShoe);
        await user.click(addShoe);
        const inputs = screen.getAllByTestId(/^shoe-input-/);
        await user.type(inputs[0], '42');
        await user.type(inputs[1], '38');

        // 3. Skicka bokning
        await user.click(screen.getByTestId('book-btn'));

        // 4. Verifiera kvitto & totalsumma (2 pers * 120 + 1 bana * 100 = 340)
        await waitFor(() => expect(screen.getByText('See you soon!')).toBeInTheDocument());
        expect(screen.getByTestId('booking-id')).toHaveValue('STR5678');
        expect(screen.getByTestId('total-price')).toHaveTextContent('340 sek');
    });

    // User Story 3: Ta bort skor
    it('ska kunna ta bort valda skor', async () => {
        const user = userEvent.setup();
        render(<App />);
        
        await user.click(screen.getByTestId('add-shoe'));
        await user.click(screen.getByTestId('add-shoe'));
        // Ta bort första skon
        await user.click(screen.getByTestId('remove-shoe-0'));
        
        // Ska bara finnas 1 kvar
        expect(screen.getAllByTestId(/^shoe-input-/)).toHaveLength(1);
    });

    // User Story 5: Navigation
    it('ska visa meddelande om man navigerar till kvitto utan bokning', async () => {
        const user = userEvent.setup();
        render(<App />);
        
        await user.click(screen.getByTestId('nav-icon'));
        await user.click(screen.getByText('Confirmation'));
        
        expect(screen.getByText('Inga bokning gjord!')).toBeInTheDocument();
    });
});