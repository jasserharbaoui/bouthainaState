import React from "react"
import Profile from "./person"


class App extends React.Component{

    state = {
        Person:{
        fullName:"Welcom I'm Bouthaina",
        boi:"this my profile",
        imgUrl:"https://tse3.explicit.bing.net/th?id=OIP.Y8Vhr-YXBHxbIB9naQfu2QHaE7&pid=Api&P=0&h=180",
        profesion:"student"
        },
        shows:false

    };

    shows = ()=>{
        this.setState(Profile => ({
            shows: !Profile.shows
        }));
    };


       toggle(){
        this.setState({shows: !this.state.shows})

       }



    render(){
        const {shows} = this.state
        return(
            <div style={{border:"solid 2px black",backgroundColor:"beige" ,display:"flex",justifyContent:"center"}}>
                <h1 style={{color:"blueviolet"}}>Click here to view my profile</h1>
                 <div>

                    <button style={{width:"100px", backgroundColor:"blue"}} onClick={()=>this.toggle()}>{(this.state.shows) ? "hide" : "show"}</button>
                 </div>
                <div>
                  {(this.state.shows)&& <div>
                    <p style={{color:"blue", fontSize:"30px"}}>{this.state.Person.boi}</p>
                <img width={400} src={this.state.Person.imgUrl} alt="profile"/>
                <h2 style={{color:"blue", fontFamily:"initial"}}>{this.state.Person.fullName}</h2>
                <h2 style={{color:"blue", fontFamily:"initial"}}>{this.state.Person.profesion}</h2>
                </div>}
                {shows && <Profile/>}
                </div>
            </div>
        )
    }
}

export default App