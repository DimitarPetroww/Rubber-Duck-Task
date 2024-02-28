import { Person as PersonInterface } from "../../common/interfaces";

import './tableRow.css';

const TableRow = ({ person }: { person: PersonInterface }) => {
    return (
        <tr className="table-row" key={person.partner_id}>
            <td className="table-data" data-testid="partner-id">
                {person?.partner_id}
            </td>
            <td className="table-data">
                {person?.name}
            </td>
        </tr>
    );
}

export default TableRow;
