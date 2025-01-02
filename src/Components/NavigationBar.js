import React from 'react'
class NavigationBar extends React.Component{
  render(){
    return(
    <>
    <nav className="navbar navbar-expand-lg text-bg-success p-3" >
        <div className="container-fluid">
            <a className="navbar-brand"style={{color:"white"}} href="/">Bullatienly.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" style={{color:"white"}}aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"style={{color:"white"}} href="/">About</a>
                </li>
            </ul>
            </div>
        </div>
    </nav> 
    </>
    );
  }
}
export default NavigationBar