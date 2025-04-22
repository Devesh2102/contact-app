import React from "react";
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add = (e)=> {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are required!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    }
    render() {
        return (
            <div className="container-fluid">
                <h5>Add Contact</h5>
                <form className="w-50 m-0" onSubmit={this.add}>
                    <div className="form-group row my-2">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name Here"
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row my-2">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email Here"
                            value={this.state.email}
                            onChange={(e)=> this.setState({email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row my-3">
                        <div className="offset-sm-2 col-sm-10">
                            <button className="btn btn-primary">Add Contact</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddContact;