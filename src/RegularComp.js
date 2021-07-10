import React from 'react'

class RegularComp extends React.Component{
constructor(props){
 super(props);
this.state={}

}
render(){
console.log('Regular Component...');

    return <>Regular Component {this.props.name}</>
}

}

export default RegularComp
