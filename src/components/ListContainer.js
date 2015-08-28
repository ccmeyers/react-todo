var React = require('react');
var Rebase = require('re-base');
var AddItem = require('./AddItem');
var List = require('./List');

var base = Rebase.createClass('https://burning-fire-6749.firebaseio.com/todos');

var ListContainer = React.createClass({
  getInitialState: function(props){
    return {
      list: []
    }
  },
  componentDidMount: function(){
    this.ref = base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true
    });
  },
  componentWillUnmount: function(){
    base.removeBinding(this.ref);
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