import { useMemo } from "react";
import './App.css';

import { useFetch } from "./hooks";
import { withinRadius } from "./utils/calculateDistance";
import { OFFICE_LATITUDE, OFFICE_LONGTITUDE, RADIUS_WITHIN } from "./utils/constants";
import { Person as PersonInterface } from './common/interfaces';

import Aside from './components/Aside';
import Table from './components/Table';

function App() {
    const { data: people, error } = useFetch<PersonInterface[]>('/data.json');

    const sortedPeople = useMemo(() => people?.sort((a: PersonInterface, b: PersonInterface) => a.partner_id - b.partner_id), [people])

    const peopleWithinDistance = useMemo(() => {
        if (sortedPeople && sortedPeople?.length > 0) {
            return [...sortedPeople.filter((x) => withinRadius(x.latitude, x.longitude, OFFICE_LATITUDE, OFFICE_LONGTITUDE, RADIUS_WITHIN))];
        };
        return [];
    }, [sortedPeople]);

    if (error) return <div>Error loading data...</div>;

    if(!people) return <div>Loading...</div>;

    return (
        <div className='container'>
            <Aside />
            <main>
                <Table people={peopleWithinDistance} />
            </main>
        </div>
    );
}

export default App;
