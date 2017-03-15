import {Component} from "react";
export default props => (
    <div>
        <h3>TodoList Demo:</h3>
        <TodoMVC/>
    </div>
)
const ENTER_KEY = 13
const COMPLETED = 'COMPLETED'
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
                .map(index => (<li key={index} style={{
                    listStyleType: 'none',
                    textDecoration: props.items[index].status === COMPLETED ? 'line-through' : ''
                }}>
                    <input type="checkbox" onClick={(event) => {
                        props.onCheck(event, index)
                    }}/>{props.items[index].value}
                    <button onClick={() => props.onDelete(index)}>x</button>
                </li>))
        }
    </ul>
)

const TodoFilter = props => (
    <div>
        <button onClick={() => props.showAll()}>All</button>
        <button onClick={() => props.showActive()}>Active</button>
        <button onClick={() => props.showCompleted()}>Completed</button>
    </div>
)

class TodoMVC extends Component {

    constructor() {
        super()
        this.state = {
            items: [],
            inputValue: ''
        }
    }

    render() {
        return (
            <div>
                <TodoFilter
                    showAll={() => {
                    }}
                    showActive={() => {
                    }}
                    showCompleted={() => {

                    }}/>
                <TodoInput value={this.state.inputValue}
                           onChange={event => {
                               this.setState({inputValue: event.target.value})
                           }}
                           onEnter={() => {
                               if (this.state.inputValue) {
                                   this.setState({
                                       items: [...this.state.items, {value: this.state.inputValue, status: ''}],
                                       inputValue: ''
                                   })
                               }
                           }}
                />

                <TodoList items={this.state.items}
                          onCheck={(event, index) => {
                              this.state.items[index].status = event.target.checked ? COMPLETED : ''
                              this.setState({
                                  items: this.state.items
                              })
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