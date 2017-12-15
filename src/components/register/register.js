import React from 'react';
import {connect} from 'react-redux';
import actions from '../../actions/registerAction';



class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      username:'',
      password:''
    };
  }

  onUserUpdate(field,event){
    //console.log("Data Updated:"+ field +" : "+ event.target.value);

    if(field=='username'){
      this.setState({
        username:event.target.value
      });
      return;
    }

    if(field=='password'){
      this.setState({
        password:event.target.value
    });
      return;
    }
  }


  addUser(event){
    //console.log("username is---"+ JSON.stringify(this.state.username));
    //console.log("password is---"+ JSON.stringify(this.state.password));

    const user={
      username:this.state.username,
      password:this.state.password
    };

    this.props.registerUser(user);

  }

  render() {
    return (
      <form>
        <div>
        <label>
          User Name:
          <input type="text" onChange={this.onUserUpdate.bind(this,'username')}/>
        </label>
        </div>

        <div>
          <label>
            Email:
            <input type="text" onChange={this.onUserUpdate.bind(this,'password')}/>
          </label>
        </div>

        <button onClick={this.addUser.bind(this)}>Add User</button>
      </form>
    );
  }
}



const mapStateToProps=(state)=>{
  return {
    user:state.user
  };
};

const mapDispatchToProps=(dispatch)=>{
    return{
      registerUser:(user)=>{
        dispatch(actions.registerUser(user));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);
