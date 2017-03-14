import Input from './input'
import List from './list'
import Appointment from './appointment'

export default () => {
    const data = {a: 'aaa', b: 'bbb', c: 'ccc'};
    return (
        <div>
            <h3>Input Text Demo:</h3>
            <Input onChange={event => console.log(event)}
                   onFocus={event => console.log(event)}
                   onClick={event => console.log(event)}/>

            <h3>Data List Demo:</h3>
            <List data={data}/>

            <h3>Appointment Flow Demo:</h3>
            <Appointment isHuman={true} isBooked={true}/>
            <Appointment isHuman={true} isBooked={false}/>
            <Appointment isHuman={false} isBooked={true}/>
            <Appointment isHuman={false} isBooked={false}/>


            <h3><a href="/todo">TodoList Demo</a></h3>
        </div>
    )
}
