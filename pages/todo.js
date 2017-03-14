import {Component} from "react";
export default props => (
    <div>
        <h3>TodoList Demo:</h3>
        <TodoMVC/>
    </div>
)
const ENTER_KEY = 13
const TodoInput = props => (
    <input placeholder="Add todo item..." type="text" value={props.value}
           onChange={(event) => props.onChange(event)}
           onKeyPress={event => {
               if (event.which === ENTER_KEY) {
                   props.onEnter()
               }
           }}
    />
)

const TodoList = props => (
    <ul>
        {
            Object.keys(props.items)
                .map(index => (<li key={index} style={{listStyleType: 'none'}}>
                    <input type="checkbox" onClick={() => props.onCheck(index)}/>{props.items[index]}
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
                <TodoInput value={this.state.value}
                           onChange={event => {
                               this.setState({value: event.target.value})
                           }}
                           onEnter={() => {
                               this.setState({
                                   items: [...this.state.items, this.state.value],
                                   value: ''
                               })
                           }}
                />

                <TodoList items={this.state.items}
                          onCheck={index => {

                          }}
                          onDelete={ index => {
                              this.setState({
                                  items: this.state.items.filter((item, ix) => ix != index)
                              })
                          }}/>
            </div>
        )
    }
}