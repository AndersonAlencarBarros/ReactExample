import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

function BoasVindas (props){
    return <h5>Bem Vindo, {props.name} {props.last}</h5>;
}
// ou, de forma equivalente
// class Welcome extends React.Component{
//     render(){
//         return <h1> Bem Vindo, {this.props.name}</h1> ;
//     }
// }

function App (){ // a funcao 'App' por padrao é definida uma vez e usada para chamar todos os outros componentes
    return(
        <div> 
        <div> 
            <h1><em>{greetings}</em></h1>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dWfOYXNXp-qIuJGY4yQ3JAHaHa%26pid%3DApi&f=1" />
        </div>
        
        <div>
            <BoasVindas name="Paulo" />
            <BoasVindas name="Ana" />
            <BoasVindas name="John" />
        </div>
        </div>
    );
}
 
 

const welcome = <BoasVindas name="Anderson" last="Alencar" /> // define componente do usuario, o atributo é passado para a funcao pre-definida, esses atributos sao chamados de 'props'

const user = {
    firstName: 'Anderson',
    lastName: 'Alencar'
}

const greetings = React.createElement(
    'h1',
    {className: 'title'},
    'Sunset'
);

const sunset = (
    <div> 
        <div> 
            <h1><em>{greetings}</em></h1>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dWfOYXNXp-qIuJGY4yQ3JAHaHa%26pid%3DApi&f=1" />
        </div>
    </div>
);

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

/* Exemplo de uso de componentes 

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
