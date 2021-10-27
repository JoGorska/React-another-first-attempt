import React from "react"


class FormNewTask extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            vegetarian: false,
            nutsAlergy: false,
            
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const{name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        
    }
    
    render() {
        return (
            <main>
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange} 
                            className="form-control"
                            id="firstName"
                        />

                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input 

                            name="lastName" 
                            value={this.state.lastName} 
                            onChange={this.handleChange} 
                            id="lastName"
                            className="form-control"
                        />
                    </div>
                    

                    <div className="mb-3">

                        <label className="form-label" htmlFor="age">Age</label>
                        <input 
                            
                            name="age" 
                            value={this.state.age} 
                            onChange={this.handleChange}
                            id="age"
                            className="form-control"
                        />
                    </div>
                    


                    
                    {/* Create radio buttons for gender here */}

                    <div className="form-check">
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                            id="male"
                            className="form-check-input"
                        /> 
                        <label className="form-check-label" htmlFor="male">Male</label>

                    </div>

                    <div className="form-check mb-3">

                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                            id="female"
                            className="form-check-input"
                        /> 
                        <label className="form-check-label" htmlFor="female">Female</label>

                    </div>

                    
                    {/* Create select box for location here */}
                    
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                        className="form-select mb-3">
                        
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Russia">Russia</option>
                    </select>
                        

                    
                    {/* Create check boxes for dietary restrictions here */}
                    

                    <div className="form-check mb-3">
                        <input 
                            type="checkbox"
                            name="vegetarian"
                            checked={this.state.vegetarian}
                            id="vegetarian"
                            onChange={this.handleChange}
                            className="form-check-input"
                            
                        />
                        <label htmlFor="vegetarian" className="form-check-label">Vegetarian </label>
                    </div>
      
                    <div className="form-check mb-3">
                        <input 
                            type="checkbox"
                            name="nutsAlergy"
                            id="nuts"
                            checked={this.state.nutsAlergy}
                            onChange={this.handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="nuts" className="form-check-label">Nuts alergy </label>
                    </div>
                    
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.nutsAlergy ? "Nuts Alergy" : null}, {" "}
                    {this.state.vegetarian ? "vegetarian" : null}
                </p>
            </main>
        )
    }
}


export default FormNewTask