import Link from "next/link";
const Card = ({ props }) => {
  return (
    <div className="card">
      <img src={props.cover_image} alt={props.title} />
      <Link href={props.url}>
        <button className="re">technology</button>
      </Link>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="user-info">
        <img src={props.user.profile_image} alt={props.user.name} />
        <p>{props.user.name}</p>
      </div>
    </div>
  );
};
export default Card;
