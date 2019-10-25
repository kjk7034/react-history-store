import axios from "axios";
import React from "react";
import queryString from "query-string";
import HistoryStore, {
  withHistoryStore,
  HistoryStoreComponentProps
} from "components/HistoryStore";
import UserView from "components/UserView";
import { UserData } from "types/user";

interface ViewProps extends HistoryStoreComponentProps {}

interface ViewState {
  dataSource?: UserData;
}

class View extends React.Component<ViewProps, ViewState> {
  public locationKey = this.props.history.location.key;
  constructor(props: ViewProps) {
    super(props);
    this.state = {
      dataSource: props.dataSource
    };
  }
  public componentDidMount() {
    if (!this.state.dataSource) {
      this.getData();
    }
  }
  public render() {
    const { dataSource } = this.state;
    if (!dataSource) return null;
    const { locationKey } = this.props;
    return (
      <HistoryStore locationKey={locationKey} dataSource={dataSource}>
        <UserView data={dataSource} />
        <button type="button" onClick={this.handlePrev}>
          이전
        </button>
      </HistoryStore>
    );
  }
  private getData = async () => {
    const query = queryString.parse(this.props.location.search);
    const { data } = await axios.get(
      `https://5db0f7ce8087400014d3840e.mockapi.io/list/${query.id}`
    );
    this.setState({
      dataSource: data
    });
  };
  private handlePrev = () => {
    this.props.history.goBack();
  };
}

export default withHistoryStore(View);
