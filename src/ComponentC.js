import React from 'react'

class ComponentC extends React.Component{
constructor(props){
 super(props);
this.state={}
console.log('LifeCycleC Constructor');

}

static getDerivedStateFromProps=function(props,state){
  console.log(' LifeCycleC In getDerivedStatefromProps');
  return null
}
getSnapshotBeforeUpdate = function(prevProps,prevState){
  console.log('LifeCycleC In getSnapshotBeforeUpdate');
  return null
}
componentDidUpdate = function(){
  console.log('LifeCycleC In componentDidUpdate');
}
shouldComponentUpdate = function(){
  console.log('LifeCycleC In shouldComponentUpdate');
  return true
}
componentDidMount = function(){
  console.log('LifeCycleC In ComponentDidMount');
}
render(){
console.log('LifeCycleC In render');

return <></>
}
}
export default ComponentC;