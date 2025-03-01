import { useState } from "react";
import "./Card.css";

interface CardProps {
  name: string;
  user: string;
  isFollowing: boolean;
}

const formatUsername = (user: string) => {
  return `@${user}`;
};

export const Card = ({ name, user, isFollowing }: CardProps) => {
  const [follow, setFollow] = useState(isFollowing);
  const handdleFollow = () => {
    setFollow(!follow);
  };

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
          <span className="tw-card-user">{formatUsername(user)}</span>
        </div>
      </header>

      <aside>
        <button
          onClick={handdleFollow}
          className={
            follow ? "tw-card-button unfollow" : "tw-card-button follow"
          }
        >
          {follow ? "unfollow" : "follow"}
        </button>
      </aside>
    </article>
  );
};
