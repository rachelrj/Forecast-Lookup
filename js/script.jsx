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
      displayPrevious : false,
      displayNext : true,
      day: 0
  }
},
previousDay: function(e){
  var previous = this.state.day -1;
  var display = true;
  if(previous <1)
    display = false;
  this.setState({
    displayNext : true,
    displayPrevious : display,
    day : previous
  });
},
nextDay: function(e){
  var next = this.state.day +1;
  var display = true;
  if(next >6)
    display = false;
  this.setState({
    displayPrevious : true,
    displayNext : display,
    day : next
  });
},
render:function(){
  return (
    <div>
        <input className = {this.state.displayPrevious ? '' : 'hiddenButton'} type = "button" value = "previous" id= "previous" onClick={this.previousDay}/>
        <input className = {this.state.displayNext ? '' : 'hiddenButton'} type = "button" value = "next" id = "next" onClick={this.nextDay}/>
      <h2> {this.props.weather[this.state.day].date} </h2>
      <p> {this.props.weather[this.state.day].longDescription} </p>
    </div>
    );
}
});