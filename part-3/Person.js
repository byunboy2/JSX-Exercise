function Person({ name, age, hobbies=["eat","fly","travel"] }) {
  return (
    <div>
      <p> Learn some information about this person</p>
      <h3>{age >= 18 ? "please go vote!" : "You must be 18"}</h3>
      <h3>{name.length > 8 ? name.slice(0, 6) : name}</h3>
      <ol>{hobbies.map(hobby => <li>{hobby}</li>)}</ol>
    </div>

  );

}