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
      last_name: {
        input: "",
        changed: false,
        valid: true
      },
      first_name: {
        input: "",
        changed: false,
        valid: true
      },
      type: 'password',
      passwordErrors: false,
      emailErrors: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNewUser = this.handleSubmitNewUser.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderPasswordError = this.renderPasswordError.bind(this);
    this.renderEmailError = this.renderEmailError.bind(this);
    this.isValid = this.isValid.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
    this.checkSubmission = this.checkSubmission.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email.valid && this.state.password.valid) {
      const user = {
        email: this.state.email.input,
        password: this.state.password.input
      }
      this.props.processForm(user);
    }
  }

  handleSubmitNewUser(e) {
    e.preventDefault();
    let valid = this.checkSubmission();
    if (valid) {
      const user = {
        first_name: this.state.first_name.input,
        last_name: this.state.last_name.input,
        email: this.state.email.input,
        password: this.state.password.input
      }
      this.props.processForm(user);
    }
  }

  checkSubmission() {
    if (this.state.email.input.length < 1) {
      let attributes = { ...this.state.email };
      attributes.changed = true;
      attributes.valid = false;
      this.setState({ emailErrors: true, ["email"]: attributes });
    }
    if (this.state.password.input.length < 1) {
      this.setState({ passwordErrors: true });
      let attributes = { ...this.state.password };
      attributes.changed = true;
      attributes.valid = false;
      this.setState({ passwordErrors: true, ["password"]: attributes });
    }
    if (this.state.last_name.input.length < 1) {
      let attributes = { ...this.state.last_name };
      attributes.changed = true;
      attributes.valid = false;
      this.setState({ ["last_name"]: attributes });
    }
    if (this.state.first_name.input.length < 1) {
      let attributes = { ...this.state.first_name };
      attributes.changed = true;
      attributes.valid = false;
      this.setState({ ["first_name"]: attributes });
    }
    if (this.state.email.input.length > 0 && 
      this.state.email.input.includes('@') &&
      this.state.password.input.length > 8 && 
      this.state.first_name.input.length > 0 && 
      this.state.last_name.input.length > 0) {
        return true;
      } else {
        return false;
      }
  }

  handleDemoUser(e) {
    e.preventDefault();
    const makeEmail = () => {
      const letters = "abcdefghijkl123456789";
      let email = '';
      for (let i = 0; i < 10; i ++) {
        let idx = Math.floor(Math.random() * letters.length);
        let letter = letters[idx];
        email += letter;
      }
      email += "@test.com";
      return email;
    }
    const names = ["Cheryl", "Ron", "Kathy", "Jason", "Bailey"];
    const user = ({
      first_name: names[Math.floor(Math.random() * names.length)],
      last_name: "User",
      email: makeEmail(),
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
    } else if (category === "last_name" || category === "first_name") {
      if (attributes.input.length > 0) {
        return true;
      }
    }
    return false;
  }

  update(category) {
    let field = category;
    return (e) => {
      let attributes = Object.assign({}, this.state[field])
      attributes.input = e.currentTarget.value;
      attributes.changed = true;
      if (!this.isValid(field, attributes, e.currentTarget.value)) {
        attributes.valid = false;
      } else {
        attributes.valid = true;
        if (field === 'password') {
          this.setState({passwordErrors: false})
        } else if (field === 'email') {
          this.setState({ emailErrors: false })
        }
      }
      this.setState({[field]: attributes});
    }
  }

  checkForErrors(field) {
    field = field;
    return () => {
      if (field === "email") {
        if (!this.state[field].input.includes("@")) {
          this.setState({emailErrors: true});
        } else {
          this.setState({ emailErrors: false });
        }
      } else if (field === "password") {
        if (this.state[field].input.length < 8) {
          this.setState({ passwordErrors: true });
        } else {
          this.setState({ passwordErrors: false });
        }
      } else if (field === "first_name" || field === 'last_name') {
        if (this.state[field].input.length < 1) {
          let attributes = Object.assign({}, this.state[field])
          attributes.changed = true;
          attributes.valid = false;
          this.setState({ [field]: attributes });
        }
      }
    }

  }

  renderEmailError(title) {
    if (title === 'Sign up') {
      return (
        <li className="error">
          Hmm, try double-checking your email.
        </li>
      );
    } else if (title === 'Log in') {
      return (
        <li className="error">
          Please verify e-mail address is correct.
        </li>
      );
    }
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
      <ul className="error">
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.removeErrors();
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
                  <li><FaCheck className="check_icon" />&emsp;Hundreds of guided meditations on everything from stress to
                  focus to relationships.</li>
                  <li><FaCheck className="check_icon" />&emsp;Stories, soundscapes, and music to help you sleep soundly.</li>
                  <li><FaCheck className="check_icon" />&emsp;Get a new meditation delivered to your phone everyday.</li>
                </ul>
              </div>

              <div className="form-holder">
                <form className="signup_form_box" onSubmit={this.handleSubmitNewUser}>
                  <h2 className="form_title">{`${title}`}</h2>
                  <br />
                  <span>Already have an account? {this.props.navLink}</span>
                  <div className="login-inputs">
                    <br />
                    <br />
                    <input
                      type="text"
                      className={!this.state.first_name.changed ?
                        "signup_input" :
                        this.state.first_name.changed && !this.state.first_name.valid ?
                        "signup_input error_input" :
                        "signup_input valid"
                      }
                      placeholder="First name"
                      value={this.state.first_name.input}
                      onChange={this.update('first_name')}
                      onBlur={this.checkForErrors('first_name')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className={!this.state.last_name.changed ?
                        "signup_input" :
                        this.state.last_name.changed && !this.state.last_name.valid ?
                        "signup_input error_input" :
                        "signup_input valid"
                      }
                      placeholder="Last name"
                      value={this.state.last_name.input}
                      onChange={this.update('last_name')}
                      onBlur={this.checkForErrors('last_name')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className={(!this.state.email.changed && !this.state.emailErrors) ? 
                                  "signup_input" : 
                                  (this.state.email.changed && !this.state.email.valid)
                                  || (this.state.emailErrors) ? 
                                  "signup_input error_input" :
                                  "signup_input valid"
                                }
                      placeholder="Email address"
                      value={this.state.email.input}
                      onChange={this.update('email')}
                      onBlur={this.checkForErrors('email')}
                    />
                    {this.state.emailErrors ? this.renderEmailError(title) : <><br /><br /></>}
                    <div>
                      <input
                        type={this.state.type}
                        id="password-input"
                        className={(!this.state.password.changed && !this.state.passwordErrors) ?
                                    "signup_input" :
                                    (this.state.password.changed && !this.state.password.valid)
                                    || this.state.passwordErrors ?
                                    "signup_input error_input" :
                                    "signup_input valid"
                                  }
                        placeholder="Password (8+ characters)"
                        value={this.state.password.input}
                        onChange={this.update('password')}
                        onBlur={this.checkForErrors('password')}
                      />
                      {
                        (this.state.type === 'password') ? (
                        <RiEyeCloseLine onClick={this.handleToggle} className="eye-icon" id="closed-eye"/>
                        ) : (
                          <RiEyeLine onClick={this.handleToggle} className="eye-icon" id="open-eye" />
                        )
                      }
                    </div>
                  {this.state.passwordErrors ? this.renderPasswordError() : <><br /><br /></>}
                  </div>
                  <div className="buttons">
                    <button className="form_submit">CREATE AN ACCOUNT</button>
                    <br />
                    <button onClick={this.handleDemoUser} className="demo_button">
                      SIGN IN AS DEMO USER
                    </button>
                  </div>
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
            <div className="login-inputs">
              <br/>
              <div>
                <input
                  type="text"
                  className={(!this.state.email.changed && !this.state.emailErrors) ?
                    "login_input" :
                    (this.state.email.changed && !this.state.email.valid)
                    || (this.state.emailErrors) ?
                    "login_input error_input" :
                    "login_input"
                  }
                  placeholder="Email address"
                  value={this.state.email.input}
                  onChange={this.update('email')}
                  onBlur={this.checkForErrors('email')}
                />
              </div>
              {this.state.emailErrors ? this.renderEmailError(title) : <><br /><br /></>}
              <div>
                <input
                  type={this.state.type}
                  id="password-input"
                  className={(!this.state.password.changed && !this.state.passwordErrors) ?
                    "login_input" :
                    (this.state.password.changed && !this.state.password.valid)
                    || this.state.passwordErrors ?
                    "login_input error_input" :
                    "login_input"
                  }
                  placeholder="Password (8+ characters)"
                  value={this.state.password.input}
                  onChange={this.update('password')}
                  onBlur={this.checkForErrors('password')}
                />
                {
                  (this.state.type === 'password') ? (
                    <RiEyeCloseLine onClick={this.handleToggle} className="eye-icon" id="closed-eye" />
                  ) : (
                      <RiEyeLine onClick={this.handleToggle} className="eye-icon" id="open-eye" />
                    )
                }
              </div>
              {this.state.passwordErrors ? this.renderPasswordError() : <><br /><br /></>}
              {this.renderErrors()}
            </div>
            <div className="buttons">
              <button className="form_submit">LOG IN</button>
              <br/>
              <button onClick={this.handleDemoUser} className="demo_button">
                SIGN IN AS DEMO USER
              </button>
            </div>
          </form>
          <br/>
        </div>
      );
    }

  }

  
}

export default SessionForm;

