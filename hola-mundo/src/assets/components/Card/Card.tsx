import "./Card.css";

interface CardProps {
  name: string;
  user: string;
  isFollowing: boolean;
}

export const Card = ({ name, user, isFollowing }: CardProps) => {
  return (
    <article className="tw-card">
      <header className="tw-card-header">
        <img
          className="tw-card-avatar"
          src={`https://unavatar.io/{user}`}
          alt="avatar"
          height={50}
        />
        <div>
          <strong className="tw-card-name">{name} </strong>
          <span className="tw-card-user">@{user}</span>
        </div>
      </header>

      <aside>
        <button className="tw-card-button">
          {isFollowing ? "unfollow" : "follow"}
        </button>
      </aside>
    </article>
  );
};
