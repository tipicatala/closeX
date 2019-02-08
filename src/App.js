import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";
//import UserInfo from './UserInfo';
// import UserInfo from "./UserInfo";
// import ShowDate from "./ShowDate";
// import Username from "./Username";


// class App extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//             now: 0,
//             text: 'I hope you enjoy learning React!',
//             author: {
//                 name: 'Hello Kitty',
//                 avatarUrl: 'https://placekitten.com/g/200/200',
//             }
//         }
//     }
  
//     render() {

        
//         return (
//         <div>
            
//             <Avatar url={this.state.author.avatarUrl} name={this.state.author.name}></Avatar>
//             <Comment text={this.state.text}></Comment>
            
//             <ShowDate date= {this.state.date.getDate()} month={this.state.date.getMonth()} year={this.state.date.getFullYear()}></ShowDate>
//         </div>
//         );
//       }
// }

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        name: 'evolk',
        counter: 0,
        data: []
    
      }
    }
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.setState({data: response.data})
        })
    }

    close =(props)=>{
        var a= this.state.data;
        delete a[props.target.id];
        this.setState({data: a})
    }

    render() {
      return (
        <TestComponent items={this.state.data} close={this.close}/>
      );
    }
  }

  function TestComponent(props){
    //console.log(props.items)
    return(
        
        <ul>
            {props.items.map( (el, i) => <li id={i}> {el.title} <button id={i} onClick={props.close}>x</button></li>)} 
        </ul>
    )
  }


  
export default App;