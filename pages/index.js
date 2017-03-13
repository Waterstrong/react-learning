import Input from './input'

export default props => {
    return (
        <div>
            Input Text Demo:
            <Input onChange={event => console.log(event)}
                   onFocus={event => console.log(event)}
                   onClick={event => console.log(event)}/>
        </div>
    )
}
