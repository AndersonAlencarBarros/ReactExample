import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'carbon-components-react';

import './index.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';

// <App /> funcao principal que contem todos os 
// os outros componentes
// ReactDOM.render(<App />, document.getElementById('root'));

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Anderson',
    lastName: 'Alencar'
}

const sunset = (
    <div> 
        <div> 
            <h1><em>Sunset</em></h1>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dWfOYXNXp-qIuJGY4yQ3JAHaHa%26pid%3DApi&f=1" />
        </div>
    </div>
);

// Exemplo do uso de 'props':
// A seguir sera definida um componente 'BoasVindas'
// que receberao 'name' e 'last' como props
function BoasVindas (props){
    return <h5>Bem Vindo, {props.name} {props.last}</h5>;
}

// define um componente do usuario 'BoasVindas' 
// como uma a funcao predefinida
// e envia os atributos 'name' e 'last',
// esses atributos sao chamados de 'props'  
const welcome = <BoasVindas name="Anderson" last="Alencar" /> 

// ou, de forma equivalente
// class Welcome extends React.Component{
//     render(){
//         return <h1> Bem Vindo, {this.props.name}</h1> ;
//     }
// }

// a funcao 'App' por padrao é definida uma vez 
// e usada para chamar todos os outros componentes
function App (){
    return(
        <div>             
            <div> 
                <h1><em>{greetings}</em></h1>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dWfOYXNXp-qIuJGY4yQ3JAHaHa%26pid%3DApi&f=1" />
            </div>
            
            <div>
                <BoasVindas name="AeroNildo" />
                <BoasVindas name="Ana" />
                <BoasVindas name="John" />
            </div>

            <div>
                <Clock />
            </div>
            
            <div>    
                <ActionLink />
                <Button>Teste</Button>
            </div>
        </div>
    );
}

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
    <button>
      <a href="#" onClick={handleClick}>
        Click me
      </a>
      </button>
    );
}

// Equivalente a <h1 className="title">Sunset</h1>
const greetings = React.createElement(
    'h1',
    {className: 'title'},
    'Sunset'
);

// Exemplo de State e Lifecycle
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    // Lifecycle methods - destruir componentes 
    // 'componentDidMount' executa quando o componente 
    // é renderizado na DOM 
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    // Executando quando o componente é removido da DOM
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    // setState() é responsavel por atualizar o state.
    tick(){
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div>   
          <h5> São {this.state.date.toLocaleTimeString()}.</h5>
        </div>
      );
    }
  }
   
ReactDOM.render(
    // sunset,
    <App />,
    // welcome,
    document.getElementById('root')
);

 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Exemplo de uso de componentes 
// como o codigo pode ser modularizado
// e separado em pequenas partes

/*
function Avatar(props){
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} 
        />
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>    
    );
}


function Comment (props){
    return(
        <div className="Comment"> 
            <UserInfo user={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>       
        </div>
    );
} */