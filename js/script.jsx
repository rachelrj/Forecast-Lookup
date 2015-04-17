var Forecast = React.createClass ({
getDefaultProps: function(){
    return{
      dates: [],
      weathers: [],
      descriptions: []
    }
},
propTypes:{
    dates: React.PropTypes.array.isRequired,
    weathers: React.PropTypes.array.isRequired,
    descriptions: React.PropTypes.array.isRequired,
},
getInitialState:function(){
  return{
      displayPrevious : false,
      displayNext : true,
      day: 0,
      selectedDay: this.props.dates[0],
      selectedDaysWeather: this.props.weathers[0],
      selectedDaysDescription: this.props.descriptions[0]
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
    selectedDay : this.props.dates[previous],
    selectedDaysWeather : this.props.weathers[previous],
    selectedDaysDescription : this.props.descriptions[previous]
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
    selectedDay : this.props.dates[next],
    selectedDaysWeather : this.props.weathers[next],
    selectedDaysDescription : this.props.descriptions[next]
  });
},
render:function(){
  return (
    <div>
        <input className = {this.state.displayPrevious ? '' : 'hiddenButton'} type = "button" value = "previous" id= "previous" onClick={this.previousDay}/>
        <input className = {this.state.displayNext ? '' : 'hiddenButton'} type = "button" value = "next" id = "next" display = {this.displayNext} onClick={this.nextDay}/>
      <h2> {this.state.selectedDay} </h2>
      <p> {this.state.selectedDaysDescription} </p>
    </div>
    );
}
});