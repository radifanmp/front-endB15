import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './increment';

class App extends Component {
  render(){
    return (
      //Layouting
      <div className="App">
        <Header title="This is Lola Zeita"/>
        <Increment />
        <Content caps= "+18" />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
  }

class Content extends Component {

  getBatch(){
    return 16-1;
  }
  

  render(){
    const bootcampName = "DumbWays.id";
    return(
      <div className="App-content">
        <h1>{this.props.caps}</h1>
        <h1>Welcome to {bootcampName} Batch {this.getBatch()} Yang Tampan dan Pemberani</h1>

          <img src= {'https://asset.indosport.com/article/image/q/80/280647/lola_zieta_cosplayer_seksi_kesayangan_para_pencinta_mobile_legend1-169.jpg?w=750&h=423'} style={{width:"50%", height: "50%"}}/> <br />

        <button onClick={() => {alert("Hallo Siswa Bootcamp B15")}}>Click Me</button> <br />
      </div>
    );
  }
}

export default App;
