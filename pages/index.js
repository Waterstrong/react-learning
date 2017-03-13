import Input from './input'
import List from './list'
import Appointment from './appointment'

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
            <br/>
            Appointment Flow Demo:
            <Appointment isHuman={true} isBooked={true}/>
            <Appointment isHuman={true} isBooked={false}/>
            <Appointment isHuman={false} isBooked={true}/>
            <Appointment isHuman={false} isBooked={false}/>
        </div>
    )
}
