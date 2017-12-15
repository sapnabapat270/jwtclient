import React,{PropTypes} from 'react';
import Header from '../common/header';

class Home extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes={
  children:PropTypes.object.isRequired
};

export default Home;
