var Forecast = React.createClass ({
getDefaultProps: function(){
    return{
      weather: []
    }
},
propTypes:{
    weather: React.PropTypes.array.isRequired
},
getInitialState:function(){
  return{
      day: 0
  }
},
previousDay: function(e){
  this.setState({
    day : this.state.day - 2
  });
},
nextDay: function(e){
  this.setState({
    day : this.state.day + 2
  });
},
render:function(){
  return (
    <div>
      <input className = {(this.state.day > 0) ? '' : 'hiddenButton'} type = "button" value = "previous" id= "previous" onClick={this.previousDay}/>
      <input className = {(this.state.day < 6) ? '' : 'hiddenButton'} type = "button" value = "next" id = "next" onClick={this.nextDay}/>
      <div id = 'day'>
        <h2> {this.props.weather[this.state.day].date} </h2>
        <p> {this.props.weather[this.state.day].longDescription} </p>
      </div>
      <div id = 'night'>
        <h2> {this.props.weather[this.state.day+1].date} </h2>
        <p> {this.props.weather[this.state.day+1].longDescription} </p>
      </div>
    </div>
    );
}
});