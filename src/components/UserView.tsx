import * as React from "react";
import { UserData } from "types/user";

interface UserViewProps {
  data: UserData;
}

class UserView extends React.Component<UserViewProps> {
  public render() {
    const { id, avatar, name, createdAt } = this.props.data;
    return (
      <div>
        <h1>
          {name} : {id}
        </h1>
        <img src={avatar} alt={name} />
        <p>createdAt: {createdAt}</p>
      </div>
    );
  }
}

export default UserView;
