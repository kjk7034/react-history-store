import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface HistoryStoreComponentProps extends RouteComponentProps {
  dataSource?: any;
  locationKey?: string;
}

const withHistoryStore = <P extends object>(
  Component: React.ComponentType<P & HistoryStoreComponentProps>
) =>
  withRouter(function withHistoryStore(props: P & HistoryStoreComponentProps) {
    const locationKey = props.history.location.key;
    const historyStoreData = sessionStorage.getItem(`history-store`);
    const dataSource = historyStoreData
      ? JSON.parse(historyStoreData)[`key-${locationKey}`]
      : undefined;
    return (
      <Component
        {...(props as P & RouteComponentProps)}
        dataSource={dataSource}
        locationKey={locationKey}
      />
    );
  });

export default withHistoryStore;
