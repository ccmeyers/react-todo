var React = require('react');

var AddItem = React.createClass({
  handleSubmit: function(e){
    if (e.keyCode === 13) {
      this.props.add(this.refs.newItem.getDOMNode().value);
      this.refs.newItem.getDOMNode().value = '';
    }
  },
  render: function(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="newItem"
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = AddItem;