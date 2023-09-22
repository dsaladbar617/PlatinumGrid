import { DefaultSession } from "next-auth";

const UserCard = ({ user }: { user: DefaultSession["user"] }) => {
  return (
    <div>
      <div>
        <p>Current Logged in User</p>
        <h5>{user?.name}</h5>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
