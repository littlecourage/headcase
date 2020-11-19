import React from 'react';
import { FaCheck } from 'react-icons/fa';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      last_name: "",
      first_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = ({
      email: "demouser@email.email",
      password: "password"
    })
    this.props.loginDemo(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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
            <img src={window.loginBackgroundUrl} alt="background image" className="login_img" />
            
            <div className="signup_inner">
              <div className="text_block">
                <h1 className="tag_line">Get some Headspace for a</h1>
                <h1 className="tag_line">healthier, happier life.</h1>
                <br/>
                <br/>
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
                  {this.renderErrors()}
                  <br />
                  <span>Already have an account? {this.props.navLink}</span>

                  <div>
                    <br />
                    <br />
                    <input
                      type="text"
                      className="signup_input"
                      placeholder="First name"
                      value={this.state.first_name}
                      onChange={this.update('first_name')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className="signup_input"
                      placeholder="Last name"
                      value={this.state.last_name}
                      onChange={this.update('last_name')}
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      className="signup_input"
                      placeholder="Email address"
                      value={this.state.email}
                      onChange={this.update('email')}
                    />
                    <br />
                    <br />
                    <input
                      type="password"
                      className="signup_input"
                      placeholder="Password (8+ characters)"
                      value={this.state.password}
                      onChange={this.update('password')}
                    />
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
            {this.renderErrors()}
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
                type="password"
                className="login_input"
                placeholder="Password (8+ characters)"
                value={this.state.password}
                onChange={this.update('password')}
              />
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

