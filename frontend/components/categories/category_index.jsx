import React from 'react';
import PacksIndexContainer from '../packs/pack_index_container';
import { HashLink } from 'react-router-hash-link';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <div>
          {categories.map(category => {

            return (
              <HashLink key={category.id} to={`discover/#${category.name}`}>
                <h2>{category.name}</h2>
              </HashLink>
            )

          })}
        </div>

        <div>
          {categories.map(category => {
            
            return(
              <div key={category.id} id={category.name}>
                <h2>{category.name}</h2>
                <PacksIndexContainer category={category} />
              </div>
            )
            
          })}
        </div>
      </div>
    )

  }



}

export default CategoryIndex;