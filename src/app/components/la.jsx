import Link from "next/link";
const La = ({ props }) => {
  return (
    <div className="card">
      <Link href={`http://localhost:3000/${props.id}`}>
        <img src={props.cover_image} alt={props.title} />
      </Link>
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
export default La;
