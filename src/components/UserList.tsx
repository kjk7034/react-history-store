import * as React from "react";
import UserItem from "./UserItem";
import { UserData } from "types/user";

interface UserListProps {
  datas?: UserData[];
}

class UserList extends React.Component<UserListProps> {
  public render() {
    const { datas } = this.props;
    if (!datas) return null;
    return (
      <ul>
        {datas.map(v => {
          return <UserItem data={v} key={v.id} />;
        })}
      </ul>
    );
  }
}

export default UserList;
