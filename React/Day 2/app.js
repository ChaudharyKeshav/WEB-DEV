// const element= React.createElement('h1',{id:'title'},"Learing React fro coder Army");



// const element= <h1 id="title" className="first">hi keshav</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//  const element2=(
//     <div>
//     <h1 id="title" className="first">hi keshav</h1>
//     <h2 id="title" className="second">hi keshav</h2>
//     </div>
//  )
//  const box=ReactDOM.createRoot(document.getElementById("root"));
//  box.render(element2);


// Function Component
// function App(name){
//    return(
//       <h1>hellow {name} you will do it!!!!</h1>
//    )
// }
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(/*<App/>*/ App("keshav"));



//we can write any Element(HTML)/expression of javaScript inside curly braces{}..
// Number ,arr, string will be displayed
//object will give error
// const age =19;
// const isLoggedIn=true;
// const element=<h1>hello {isLoggedIn? "Logged In":"Kindly sign IN"} </h1>;
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);



// const courses=["HTML","CSS","JAVASCRIPT","REACT"];
// const element=(<ul>
//    {courses.map((course) => <li>{course}</li>)  }
//    </ul>
//    );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


// // PROPS very important
// const ab={
//    backgroundColor:"orange",
//    color:"white"
// }
// function App(props){
//    return(
//       <h1 style={ab}>hello keshav learning props..{props.name}</h1>
//    )
// }
// const element=<App name="keshav" age={21}></App>

// // {
// //    name: "Keshav",
// //    age: 21
// // }

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

function Header(props){
   return (
      <h1>Welcome {props.name} to Indian Election Commission</h1>
   )
}
function Main(props){
   return(
      <h2>Keshav Chaudhary you {props.age>18 ? "Eligible" : "Not Elegible"} for Voting in India. </h2>
   )
}
function Footer(){
   return(
      <h2>Thanks for visiting...</h2>
   )
}

function App(){
   return (
      <>
      <Header name="Keshav " age={21}></Header>
      <Main name="Keshav " age={21}></Main>
      <Footer></Footer>
      </>
     
   )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);