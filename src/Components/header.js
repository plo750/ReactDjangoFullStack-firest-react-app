import React from 'react' // Anything inside this file will became a component

// React function as component
function Header(props) {
  return ( // Will retunr only one element use <div> for that or <React.Fragment>, no create extra container
    <React.Fragment>
      <h1>{ props.info }</h1>
    </React.Fragment>
  );
}
// Need to export before to use
//export { Header }; // option 1
export default Header; // option 1