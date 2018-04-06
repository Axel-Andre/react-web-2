import React from "react";
class Form extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            city: '',
            surname: '',
            previousValue:"lol"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [previousValue]:state.city,            
            [name]: value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.surname);
        console.log(this.state.city);
    }
    render() {
        // this.props.data.map(function(object, i){
        // console.log(object);
        // });
        return (
            <div>
                <h2>Formulaire</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>Previous value : {this.state.previousValue}</p>
                    <label>
                        Name:
    <input name="surname" type="text" onChange={this.handleChange} />
                    </label>
                    <label>
                        Selectbox
    <select name="city" onChange={this.handleChange}>
                            {this.props.data.map((r, i) =>
                                <option key={i} value={r}>{r}</option>
                            )}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Form;