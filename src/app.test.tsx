import { render, screen } from '@testing-library/react';
import App from './App';

const mockData = [
    {
        "latitude": "43.410263",
        "partner_id": 20,
        "name": "Genadi Genadiev",
        "longitude": "24.6104551"
    },
    {
        "latitude": "42.685363",
        "partner_id": 1,
        "name": "Borislav Stoyanov",
        "longitude": "23.3117541"
    },
    {
        "latitude": "41.936514",
        "partner_id": 2,
        "name": "Grigor Dimitrov",
        "longitude": "25.5501271"
    },
    {
        "latitude": "42.128459",
        "partner_id": 3,
        "name": "Rangel Rangelov",
        "longitude": "24.7375581"
    }
];

jest.mock('./hooks/useFetch.ts', () => ({
    useFetch: () => ({ data: mockData, erorr: null })
}))

test('it should render partners in table sorted in ascending order by partner_id & it should render partner_id and name only for partners that are within 100km range (partner_id: 2, partner_id: 3)', () => {
    render(<App/>);

    const tableRows = screen.getAllByTestId('partner-id');

    expect(tableRows.map(partner => partner.textContent)).toEqual(['2', '3']);
});