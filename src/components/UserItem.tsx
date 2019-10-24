import * as React from "react";
import { UserData } from "types/user";
import { Link } from "react-router-dom";

interface UserItemProps {
  data: UserData;
}

class UserItem extends React.Component<UserItemProps> {
  public render() {
    const { id, avatar, name } = this.props.data;
    return (
      <li>
        <Link to={`/view?id=${id}`}>
          <img src={avatar} alt={name} />
          {name}
        </Link>
      </li>
    );
  }
}

export default UserItem;
