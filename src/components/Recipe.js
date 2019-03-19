import React, { Component } from 'react';

export class Recipe extends Component {
  render() {
    const{
      image,
      title,
      recipe_id
    } = this.props.recipe;
    const {handleDetails} = this.props;
    return (
      <React.Fragment>
          <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
          <img 
          src={image}
          className="d-block w-100"
          style={{height:"20rem", display:"flex", boxSizing: "border-box"}}
          alt="recipe"
          />
          <div className="card-body text-capitalize">
          <h6>{title}</h6>
          </div>
          <div className="card-footer">
          <button type="button"
          className="btn btn-primary text-capitalize" onClick={()=>handleDetails(0, recipe_id)}
          >details</button>
          {/*<a href={source_url} className="btn btn-success mx-2 text-capitalize"
             target="_blank"  rel="noopener noreferrer"
          >
    recipe url</a>*/}

          </div>
          </div>
          </div>

      </React.Fragment>
    )
  }
}

export default Recipe
