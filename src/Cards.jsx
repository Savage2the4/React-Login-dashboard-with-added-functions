
function Cards(props){
    return(
        <div className="card">
            <img className="card_image" src={props.img} alt="Profile pic"></img>
            <h1 className="card_title"> {props.des} </h1>
            <p className="card_text">Name: {props.name} <br />
            Age: {props.age} <br />
            Ocupation: {props.work}</p>
        </div>
    )
}

export default Cards