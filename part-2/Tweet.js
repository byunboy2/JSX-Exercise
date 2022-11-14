function Tweet({username, name, date, message}) {
  const myStyles = {
    color: "blue",
  }
  return ( <div>
    <span>
    <b style={myStyles}>{username}, {date}: </b> {message} -- {name}
    </span>;
    </div>)
}

// function Tweet(){
//   return <div>Hello</div>
// }