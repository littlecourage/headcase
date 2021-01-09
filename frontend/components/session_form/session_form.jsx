import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        input: "",
        changed: false,
        valid: true
      },
      password: {
        input: "",
        changed: false,
        valid: true
      },
      lastName: {
        input: "",
        changed: false,
        valid: true
      },
      firstName: {
        input: "",
        changed: false,
        valid: true
      },
      type: 'password',
      passwordErrors: false,
      emailErrors: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderPasswordError = this.renderPasswordError.bind(this);
    this.renderEmailError = this.renderEmailError.bind(this);
    this.isValid = this.isValid.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.firstName.valid && this.state.lastName.valid && this.state.validEmail.valid && this.state.validPassword.valid) {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = ({
      email: "email@email.email",
      password: "password"
    })
    this.props.loginDemo(user);
  }

  handleToggle() {
    if (this.state.type === "password") {
      this.setState({type: 'text'})
    } else if (this.state.type === "text") {
      this.setState({ type: 'password' })
    }
  }

  isValid(category, attributes, value) {
    if (category === "email") {
      if (attributes.input.includes("@")) {
        return true;
      }
    } else if (category === "password") {
      if (attributes.input.length >= 8) {
        return true;
      }
    } else if (category === "lastName" || category === "firstName") {
      if (attributes.input.length > 0) {
        return true;
      }
    }
    return false;
  }

  update(category) {
    let field = category;
    return (e) => {

      let attributes = { ...this.state.field };
      attributes.input = e.currentTarget.value;
      attributes.changed = true;

      if (!this.isValid(field, attributes, e.currentTarget.value)) {
  
        attributes.valid = false;
      } else {
        attributes.valid = true;
      }
      this.setState({[field]: attributes});
    }
  }

  checkForErrors(field) {
    debugger
    field = field
    if (field === "email") {
      if (!this.state.field.input.includes("@")) {
        this.setState({emailErrors: true});
      } else {
        this.setState({ emailErrors: false });
      }
    } else if (field === "password") {
      if (this.state.field.input.length >= 8) {
        this.setState({ passwordErrors: true });
      } else {
        this.setState({ passwordErrors: false });
      }
    }

  }

  renderEmailError() {
    return (
      <li className="error">
        Hmm, try double-checking your email.
      </li>
    );
  }

  renderPasswordError() {
    return (
      <li className="error">
        Your password needs to be at least 8 characters.
      </li>
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'signup'){
      let title = 'Sign up';
      return (
          <div className="signup_outer">
            <img src={window.loginBackgroundUrl} alt="background image" className="signup_img" />
            
            <div className="signup_inner">
              <div className="text_block">
                <h1 className="tag_line">Get some Headcase for a</h1>
                <h1 className="tag_line">healthier, happier life.</h1>
                <ul>
                  <li><FaCheck className="check_icon" />&emsp;Hundreds of guided meditations on everything from stress to</li>
                  <li><span>&emsp;</span>&emsp;focus to relationships.</li>
                  <li><FaCheck className="check_icon" />&emsp;Stories, soundscapes, and music to help you sleep soundly.</li>
                  <li><FaCheck className="check_icon" />&emsp;Get a new meditation delivered to your phone everyday.</li>
                </ul>
              </div>

              <div>
                <form className="signup_form_box" onSubmit={this.handleSubmit}>
                  <h2 className="form_title">{`${title}`}</h2>
                  <br />
                  <span>Already have an account? {this.props.navLink}</span>
                  <div>
                    <br />
                    <br />
                    <input
                      type="text"
                      className={!this.state.firstName.changed ?
                        "signup_input" :
                        this.state.firstName.changed && !this.state.firstName.valid ?
                        "signup_input error_input" :
                        "signup_input valid"
                      }
                      placeholder="First name"
                      value={this.state.firstName.input}
                      onChange={this.update('firstName')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className={!this.state.lastName.changed ?
                        "signup_input" :
                        this.state.lastName.changed && !this.state.lastName.valid ?
                        "signup_input error_input" :
                        "signup_input valid"
                      }
                      placeholder="Last name"
                      value={this.state.lastName.input}
                      onChange={this.update('lastName')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className={!this.state.email.changed ? 
                                  "signup_input" : 
                                  this.state.email.changed && !this.state.email.valid ?
                                  "signup_input error_input" :
                                  "signup_input valid"
                                }
                      placeholder="Email address"
                      value={this.state.email.input}
                      onChange={this.update('email')}
                      onfocusout={this.checkForErrors('email')}
                    />
                    {!this.state.emailErrors ? this.renderEmailError() : null}
                    <br />
                    <br />
                    <input
                      type={this.state.type}
                      className={!this.state.password.changed ?
                                  "signup_input" :
                                  this.state.password.changed && !this.state.password.valid ?
                                  "signup_input error_input" :
                                  "signup_input valid"
                                }
                      placeholder="Password (8+ characters)"
                      value={this.state.password.input}
                      onChange={this.update('password')}
                      onfocusout={this.checkForErrors('password')}
                    />
                    {
                      (this.state.type === 'password') ? (
                      <RiEyeCloseLine onClick={this.handleToggle} className="eye-icon" id="closed-eye"/>
                      ) : (
                        <RiEyeLine onClick={this.handleToggle} className="eye-icon" id="open-eye" />
                      )
                    }
                    {!this.state.passwordErrors ? this.renderPasswordError() : null}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <button className="form_submit">CREATE AN ACCOUNT</button>
                  <br />
                  <button onClick={this.handleDemoUser} className="demo_button">
                    SIGN IN AS DEMO USER
                  </button>
                </form>
              </div>
            </div>
          </div>
      )
    } else {
      let title = 'Log in';
      return (
        <div className="login_container" >
          <img src={window.loginBackgroundUrl} alt="background image" className="login_img"/>
          <form className="login_form_box" onSubmit={this.handleSubmit}>
            <h2 className="form_title">{`${title}`}</h2>
            <br />
            <span>New To Headcase? {this.props.navLink}</span>
            <div>
              <br/>
              <input
                type="text"
                className="login_input"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
              />
              <br/>
              <br/>
              <input
                type={this.state.type}
                className="login_input"
                placeholder="Password (8+ characters)"
                value={this.state.password}
                onChange={this.update('password')}
              />
              {
                (this.state.type === 'password') ? (
                  <RiEyeCloseLine onClick={this.handleToggle} className="eye-icon" id="closed-eye" />
                ) : (
                    <RiEyeLine onClick={this.handleToggle} className="eye-icon" id="open-eye" />
                  )
              }
              {this.renderErrors()}
              <br/>
              <br/>
            </div>
            <button className="form_submit">LOG IN</button>
            <br/>
            <button onClick={this.handleDemoUser} className="demo_button">
              SIGN IN AS DEMO USER
            </button>
          </form>
          <br/>
        </div>
      );
    }

  }

  
}

export default SessionForm;

