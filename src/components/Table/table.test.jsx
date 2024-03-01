import { render, screen } from '@testing-library/react';
import Table from './table';

test('it should render partners in a table', () => {
    const partners = [
        {
            "latitude": "43.410263",
            "partner_id": 20,
            "name": "Genadi Genadiev",
            "longitude": "24.6104551"
        },
        {
            "latitude": "42.6667888",
            "partner_id": 6,
            "name": "RubberDuck Sofia",
            "longitude": "23.2923923"
        },
        {
            "latitude": "42.0112539",
            "partner_id": 9,
            "name": "Nasco Chachev",
            "longitude": "24.8658271"
        }
    ];

    render(<Table people={partners} />)

    expect(screen.getByText(partners[0].name)).toBeInTheDocument();
});