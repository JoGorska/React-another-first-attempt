import React from "react"


class FormNewTask extends React.Component {

    constructor() {
        super()
        this.state = {
            id: 1,
            text: "",
            completed: false

        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const{name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        
    }
    
    onSubmit(event) {
        

        event.preventDefault()
        console.log(`event target text value ${event.target.text.value}`)
        const objectNewTask = {
            text: event.target.text.value,

        }
        console.log(objectNewTask)

    }

    render() {
        return (
            <main>

                {/* Form starts here */}

                <form onSubmit={this.onSubmit}>
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="text">Write the task here</label>
                        <input 
                            name="text" 
                            value={this.state.text} 
                            onChange={this.handleChange} 
                            className="form-control"
                            id="text"
                        />

                    </div>

                    <button type="submit"  >Submit</button>
                </form>
 
 
            </main>
        )
    }
}


export default FormNewTask