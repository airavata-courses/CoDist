import axios from "axios";
import React from "react";

// import displayHistory from "./displayHistory"

class History extends React.Component {
    

    state = {
        title: '',
        body: '',
        posts: []
    };

    componentDidMount()
    {
        this.getBlogPost();
    }

    getBlogPost = () =>{

        console.log("Got data : ---------------------------------- ", );
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then ((response)=>{
            const data = response.data;
            this.setState({posts : data});
            console.log("received data", response);
            console.log("1   data", this.state);

            console.log("2   data", data);
        })
        .catch(()=>{
            alert('Error in receiving data')
        });
    }

    sayHello= () => {
        // this.getBlogPost();
        // console.log("Got data : ", );

        // if (this.state.posts.length > 0){
        //     console.log("Got data : ", this.state.posts);
        // }
        // else{
        //     return this.state.posts.map((post, index) => (
        //         <div key={'index'}>
        //             <tr>
        //                 <td>post.userId</td>
        //                 <td>post.title</td>
        //             </tr>
        //         </div>
        //     ));
        // }
      }


    render() {
      return (

        <div>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
            {this.state.posts.map((item, i) => (
                <tr key={i}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.complete}</td>
                <td>{item.id}</td>
                </tr>
            ))}
        </tbody>

            
        </div>



      );
    }
  }

  export default History