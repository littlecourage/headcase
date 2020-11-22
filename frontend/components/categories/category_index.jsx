import React from 'react';
import PacksIndexContainer from '../packs/pack_index_container';

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
              <div key={category.id}>
                <h2>{category.name}</h2>
              </div>
            )

          })}
        </div>

        <div>
          {categories.map(category => {
            
            return(
              <div key={category.id}>
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