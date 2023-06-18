
function Price({ price }: { price: Price }) {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: price.currency }).format(price.value)
}

export default function SinglePlanRow({ plan }: { plan: Dataplan }) {

    return <tr>
        <td>{plan.name}</td>
        <td>{`${plan.duration.value} ${plan.duration.unit}`}</td>
        <td>{`${plan.volume.value} ${plan.volume.unit}`}</td>
        <td><Price price={plan.price} /></td>

    </tr>

}