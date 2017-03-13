import Flow from './flow'

export default props => (
    <div>
        <Flow condition={props.isHuman}
              yes={<Flow condition={props.isBooked}
                         yes="Back to Book it."
                         no="Conference"/>}
              no="You're not a Human!"/>
    </div>
)