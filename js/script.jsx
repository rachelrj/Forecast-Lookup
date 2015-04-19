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
      day: 0,
      selectedDay: this.props.weather[0].date,
      selectedDaysShortDescription: this.props.weather[0].shortDescription,
      selectedDaysLongDescription: this.props.weather[0].longDescription
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
    day : previous,
    selectedDay : this.props.weather[previous].date,
    selectedDaysShortDescription : this.props.weather[previous].shortDescription,
    selectedDaysLongDescription : this.props.weather[previous].longDescription
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
    day : next,
    selectedDay : this.props.weather[next].date,
    selectedDaysShortDescription : this.props.weather[next].shortDescription,
    selectedDaysLongDescription : this.props.weather[next].longDescription
  });
},
render:function(){
  return (
    <div>
        <input className = {this.state.displayPrevious ? '' : 'hiddenButton'} type = "button" value = "previous" id= "previous" onClick={this.previousDay}/>
        <input className = {this.state.displayNext ? '' : 'hiddenButton'} type = "button" value = "next" id = "next" onClick={this.nextDay}/>
      <h2> {this.state.selectedDay} </h2>
      <p> {this.state.selectedDaysLongDescription} </p>
    </div>
    );
}
});