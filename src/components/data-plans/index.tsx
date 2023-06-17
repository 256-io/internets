import mockDataplans from "./mock-dataplans";

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
                return <tr key={index} >
                    <td>{plan.name}</td>
                    <td>{plan.duration.value+ " "+ plan.duration.unit}</td>
                    <td>{plan.volume.value+ " "+ plan.volume.unit}</td>
                    <td>{plan.price.value+ " "+ plan.price.currency}</td>
                </tr>
            })}
        </tbody>
    </table>)

}

