import Input from './input'
import List from './list'

export default props => {
    const data = {a: 'a', b: 'b', c: 'c'};
    return (
        <div>
            Input Text Demo:
            <Input onChange={event => console.log(event)}
                   onFocus={event => console.log(event)}
                   onClick={event => console.log(event)}/>

            <br/>
            Data List Demo:
            <List data={data}/>
        </div>
    )
}
