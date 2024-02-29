import { Person as PersonInterface } from "../../common/interfaces";

import './table.css';
import TableRow from "./tableRow";

const Table = ({ people }: { people: PersonInterface[] }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header"># </th>
                    <th className="table-header">Name</th>
                </tr>
            </thead>
            <tbody>
                {people?.map((x) => <TableRow person={x} key={x.partner_id} />)}
            </tbody>
        </table>
    );
}

export default Table;
