import * as React from "react";
import Item from "./Item";
import { UserData } from "types/user";

interface ListProps {
  datas?: UserData[];
}

class List extends React.Component<ListProps> {
  public render() {
    const { datas } = this.props;
    if (!datas) return null;
    return (
      <ul>
        {datas.map(v => {
          return <Item data={v} key={v.id} />;
        })}
      </ul>
    );
  }
}

export default List;
