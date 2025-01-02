import React from 'react'
import News from './Components/News';
import NavigationBar from './Components/NavigationBar'
class App extends React.Component{
  render(){
    return(
      <>
      <NavigationBar/>
      <News/>

    
      </>
    );
  }
}
export default App