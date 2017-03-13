export default props => (
    <ul>
        {
            Object.keys(props.data).map(key => (<li>{key}: {props.data[key]}</li>))
        }
    </ul>
)