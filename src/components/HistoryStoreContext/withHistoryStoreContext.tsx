import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import RestoreContext, { HistoryStoreData } from "./HistoryStoreContext";
import { HistoryStoreProps } from "./HistoryStore";

export interface HistoryStoreComponentProps
  extends RouteComponentProps,
    Omit<HistoryStoreProps, "dataSource"> {}

const withHistoryStoreContext = <P extends object>(
  Component: React.ComponentType<P & HistoryStoreComponentProps>
) =>
  withRouter(function withHistoryStoreContext(
    props: P & HistoryStoreComponentProps
  ) {
    return (
      <RestoreContext.Consumer>
        {(context: any) => {
          const locationKey = props.history.location.key;
          const getData = context.getData(locationKey) as any;
          const addStore = (dataSource: any) =>
            context.addData({
              dataSource,
              key: locationKey,
              scrollTop: window.pageYOffset
            });
          const historyStore = {
            addStore,
            storeData:
              props.history.action === "POP" && getData
                ? getData
                : ({
                    dataSource: undefined,
                    key: locationKey,
                    scrollTop: window.pageYOffset
                  } as HistoryStoreData)
          };
          return (
            <Component
              {...(props as P & RouteComponentProps)}
              historyStore={historyStore}
            />
          );
        }}
      </RestoreContext.Consumer>
    );
  });

export default withHistoryStoreContext;
