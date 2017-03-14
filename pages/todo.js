import {Component} from "react";
export default props => (
    <div>
        <h3>TodoList Demo:</h3>
        <TodoMVC/>
    </div>
)


const TodoList = props => (
    <ul>
        {
            Object.keys(props.items)
                .map(index => (<li key={index} style={{listStyleType: 'none'}}>
                    <input type="checkbox"/>{props.items[index]}
                    <button onClick={() => props.onDelete(index)}>x</button>
                </li>))
        }
    </ul>
)

class TodoMVC extends Component {

    constructor() {
        super()
        this.state = {
            items: [],
            value: ''
        }
    }

    render() {
        return (
            <div>
                <input placeholder="Add todo item..." type="text" value={this.state.value}
                       onChange={event => {
                           this.setState({value: event.target.value})
                       }}
                       onKeyPress={event => {
                           if (event.which === 13) {
                               this.setState(pre => ({
                                   items: [...pre.items, this.state.value],
                                   value: ''
                               }))
                           }
                       }}
                />

                <TodoList items={this.state.items} onDelete={ index => {
                    this.setState(pre => {
                        pre.items.splice(index, 1)
                        {items: pre.items}
                    })
                }}/>
            </div>
        )
    }
}