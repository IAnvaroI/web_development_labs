import React from 'react';
import ReactDOM from 'react-dom';

class StartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        if (name === "color") {
            document.getElementById("startFormId").style.color = value;
        }
    }

    handleSubmit(e) {
        var startForm = document.forms["startFormId"];
        var name = startForm['name'].value;
        var surname = startForm['surname'].value;
        var level = startForm['level'].value;
        var color = startForm['color'].value;
        var birthday = startForm['birthday'].value;
        var pass = startForm['pass'].value;
        var comment = startForm['comment'].value;
        // alert(name + " " + surname + " " + level + " " + color + " " + birthday + " "+  birthday.split('-')[0] + " " + pass + " " + comment);

        if((name.search(/[^A-Za-z]/g)) !== -1 || name === "") {
            e.preventDefault();
            alert("First name must be filled out and consists of letters.");
        }
        else if((surname.search(/[^A-Za-z]/g)) !== -1 || surname === "") {
            e.preventDefault();
            alert("Last name must be filled out and consists of letters.");
        }
        else if(level === "") {
            e.preventDefault();
            alert("Level must be filled out.");
        }
        else if((color.search(/ff0000/g)) !== -1) {
            e.preventDefault();
            alert("Color cannot be a red one.");
        }
        else if(birthday.split('-')[0] < 1900 && birthday.split('-')[0] !== "") {
            e.preventDefault();
            alert("You birthday cannot be earlier than 1900.");
        }
        else if((pass.length < 8 || pass.length > 20) && pass !== "") {
            e.preventDefault();
            alert("Pass can consist of 8-20 symbols.");
        }
        else if(comment.length > 300 && comment !== "") {
            e.preventDefault();
            alert("Comment can consist of 0-300 symbols.");
        }
        else{
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "/start_form/request",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {
                    name: name,
                    surname: surname,
                    level: level,
                    color: color,
                    birthday: birthday,
                    pass: pass,
                    comment: comment
                },
                success: function (msg) {
                    // alert(msg);
                    window.location.replace(msg);
                },
                error: function (msg) {
                    alert("Ajax error");
                }
            });
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="errors">
                    {/*<ul id="list">*/}
                    {/*@foreach ($errors->all() as $error)*/}
                    {/*<li>{{ $error }}</li>*/}
                    {/*@endforeach*/}
                    {/*</ul>*/}
                </div>
                <form onSubmit={this.handleSubmit} className="text-center" action="" id="startFormId">
                    <div className="col-sm-6 float-left">
                        <div className="form-row justify-content-center">
                            <div className="form-group col-sm-6">
                                <label htmlFor="name" id="nameLabel">Enter your name</label>
                                <input className="form-control" id="name" name="name" type="text"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group  col-sm-6">
                                <label htmlFor="surname">Enter your surname</label>
                                <input className="form-control" id="surname" name="surname" type="text"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <label>Choose your chess skill level</label>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="beginner" name="level" type="radio" value="Beginner"
                                   onChange={this.handleInputChange}/>
                            <label className="form-check-label" htmlFor="beginner">Beginner</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="apprentice" name="level" type="radio" value="Apprentice"
                                   onChange={this.handleInputChange}/>
                            <label className="form-check-label" htmlFor="apprentice">Apprentice</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="adept" name="level" type="radio" value="Adept"
                                   onChange={this.handleInputChange}/>
                            <label className="form-check-label" htmlFor="adept">Adept</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="expert" name="level" type="radio" value="Expert"
                                   onChange={this.handleInputChange}/>
                            <label className="form-check-label" htmlFor="expert">Expert</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="master" name="level" type="radio" value="Master"
                                   onChange={this.handleInputChange}/>
                            <label className="form-check-label" htmlFor="master">Master</label>
                        </div>
                    </div>
                    <div className="col-sm-6 float-right">
                        <input id="hiddenText" name="text" type="hidden" value="some text"/>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-sm-6">
                                <label id="colorLabel" htmlFor="color">Choose font color</label>
                                <input className="form-control" id="color" name="color" type="color"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-sm-6">
                                <label id="birthdayLabel" htmlFor="birthday">Choose the date of birth</label>
                                <input className="form-control" id="birthday" name="birthday" type="date"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-sm-6">
                                <label htmlFor="pass">Enter your password</label>
                                <input className="form-control" id="pass" name="pass" type="password" max="10"
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-sm-6">
                        <textarea className="form-control" name="comment" id="comment" maxLength="300" rows="5"
                                  placeholder="Enter your comment" onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <input className="btn btn-primary" id="submit" type="submit" name="entering"
                               onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>

        );
    }
}

export default StartForm;

if (document.getElementById('startForm')) {
    ReactDOM.render(<StartForm/>, document.getElementById('startForm'));
}
