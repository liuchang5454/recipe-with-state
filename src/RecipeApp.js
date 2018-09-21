import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import Navbar from './Navbar';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      recipes: [
        {
          id: 0,
          title: "pasta",
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img: "pasta.png"
        },
        {
          id: 1,
          title: "pasta2",
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img: "pasta.png"
        },
        {
          id: 2,
          title: "pasta3",
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img: "pasta.png"
        }  
      ],
      nextRecipeId: 3,
      showForm: false
    };
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        {showForm ? 
          <RecipeInput 
            onSave={this.handleSave} 
            onClose = {() => {this.setState({showForm: false})}}
          /> :
          null }
        <RecipeList 
          onDelete={this.onDelete}  
          recipes={this.state.recipes}
        />
      </div>
    );
  }
}

export default RecipeApp;