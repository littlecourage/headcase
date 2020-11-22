import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchAllCategories } from '../../actions/categories_actions';

const mapStateToProps = (state) => {
   
  return {
    categories: Object.values(state.entities.categories)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);