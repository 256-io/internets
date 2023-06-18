import mockDataplans from "./mock-dataplans";
import SinglePlanRow from "./single-plan-row";

function TableHeader() {
    return <thead>
        <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Volume</th>
            <th>Price</th>
        </tr>
    </thead>;
}

export default function Dataplans() {

    return (<table className="w-full" >
        <TableHeader />
        <tbody>
            {mockDataplans.map((plan, index) => {
                return <SinglePlanRow key={index} plan={plan} />
            })}
        </tbody>
    </table>)

}

