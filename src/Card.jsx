function Card(props) {
    return (
     
      <>
      <div className="card">
        <img className="card-image" src={props.src} alt="ERROR" />
        <div className="card-body">
          <h2 className="card-title">{props.laptitle}</h2>
          <p className="card-txt">{props.lapdesc}</p>
          <input type="submit" className="butt" value={"Order"} />
          <br />
          <br />
        </div>
      </div>
      </>
     
    );
  }
  export default Card;
  