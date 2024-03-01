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

    const peopleWithinDistance = useMemo(() => {
        people?.sort((a: PersonInterface, b: PersonInterface) => a.partner_id - b.partner_id);
        if (people && people?.length > 0) {
            return [...people.filter((x) => withinRadius(x.latitude, x.longitude, OFFICE_LATITUDE, OFFICE_LONGTITUDE, RADIUS_WITHIN))];
        };
        return [];
    }, [people]);

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
