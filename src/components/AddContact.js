import React from "react";
import Swal from 'sweetalert2';
import {Link} from "react-router-dom"
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }

    showAlert = (title, text, icon = 'info') => {
        Swal.fire({
            title,
            text,
            icon,
            timer: 1500,
            showConfirmButton: false,
        });
    };


    add = (e)=> {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            this.showAlert('Error!', 'All fields are required!', 'error');
            return
        }
        this.props.addContactHandler(this.state);
        Swal.fire({
            title: 'Success!',
            text: 'Contact added successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            this.props.navigate("/");
        });

        this.setState({ name: "", email: "" });
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
                            <button className="btn btn-primary me-5 px-3">Add Contact</button>
                            <Link to="/" className="ms-5"><button className="btn btn-primary px-3">Back to Contact List</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddContact;