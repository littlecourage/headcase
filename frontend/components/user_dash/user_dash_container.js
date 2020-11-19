import { connect } from 'react-redux';
import UserDash from './user_dash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, null)(UserDash);
