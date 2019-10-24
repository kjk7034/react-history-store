import * as React from "react";

import { HistoryStoreData } from "components/HistoryStoreContext";

export interface HistoryStoreProps {
  historyStore: {
    storeData: HistoryStoreData;
    addStore: (data: HistoryStoreData) => void;
  };
  dataSource?: any;
}

class HistoryStore extends React.Component<HistoryStoreProps, any> {
  componentDidMount() {
    const { storeData } = this.props.historyStore;

    if (storeData && storeData.scrollTop) {
      window.scrollTo(0, storeData.scrollTop);
    }
  }
  componentWillUnmount() {
    const { addStore } = this.props.historyStore;
    addStore && addStore(this.props.dataSource);
  }
  public render() {
    return this.props.children;
  }
}

export default HistoryStore;
