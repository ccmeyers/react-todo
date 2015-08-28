var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
  getInitialState: function(){
    return {
      list: []
    }
  },
  handleAddItem: function(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    });
  },
  handleRemoveItem: function(index){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  },
  render: function(){
    return (
      <div className="container">
        <h3>ToDo List</h3>
        <AddItem add={this.handleAddItem} />
        <List items={this.state.list} remove={this.handleRemoveItem}/>
      </div>
    )
  }
});

module.exports = ListContainer;