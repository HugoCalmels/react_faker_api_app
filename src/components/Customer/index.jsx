const Customer = (props) => {

  return (
    <div key={props.id}>
      <p key={props.id}>{props.firstName} {props.lastName} </p>
      {/* omg ca marche vrmt le mailto, plus lowerCase */}
      <a href={`mailto:${props.lastName.toLowerCase()}.${props.firstName.toLowerCase()}@gmail.com`}>Envoyer un message</a>
      <br />
      {/* inception de variables, de la variable JS ${}, dans une variable JSX {} */}
      <a href={`tel:${props.phone}`}>{props.phone}</a>
      <img src={props.avatar} alt="random person"></img>
    </div>
  )
}


export default Customer