
// returning props.children because the children props holds all the content your passing between the opening and closing tag of the custom component
// valid to just return the content
const Wrapper = props =>{
return props.children
// only return on thing just the value of props.children
}
// basically an empty component all it does is returns props.children
// this is the same as the built in React.Fragment, it is the built in wrapper class

export default Wrapper