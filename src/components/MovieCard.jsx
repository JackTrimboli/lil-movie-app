const MovieCard = (props) => {
  return (
    <div>
      {props.image ? <img src={props.image.url} /> : null}

      {/* {props.title ? props.title.text : "No Text :("} */}
    </div>
  );
};

export default MovieCard;
