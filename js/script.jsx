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
getCurrentDate: function(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if(this.state.day > 1)
    dd = dd + 1;
  if(this.state.day > 3)
    dd = dd + 1;
  if(this.state.day > 5)
    dd = dd + 1;
  today = mm+'/'+dd+'/'+yyyy;
  return today;
},
getCurrentCity: function(){
  return $( '#location-entry').val();
},
render:function(){
  return (
    <div>
      <input className = {(this.state.day > 0) ? '' : 'hiddenButton'} type = "button" value = "previous" id= "previous" onClick={this.previousDay}/>
      <p id = 'currentDate'>
          {this.getCurrentDate()}
      </p>
      <input className = {(this.state.day < 6) ? '' : 'hiddenButton'} type = "button" value = "next" id = "next" onClick={this.nextDay}/>
      <h2> {this.getCurrentCity()} </h2>
      <div id = 'day'>
        <h3> {this.props.weather[this.state.day].date} </h3>
        <p> {this.props.weather[this.state.day].longDescription} </p>
      </div>
      <div id = 'night'>
        <h3> {this.props.weather[this.state.day+1].date} </h3>
        <p> {this.props.weather[this.state.day+1].longDescription} </p>
      </div>
    </div>
    );
}
});