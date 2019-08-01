import * as React from "react";
import { useAppState } from "../lib/state";

export const UserBadge = () => {
  const state = useAppState();

  return (
    <div className="userBadge">Welcome: {state.model.logged.username}</div>
  );
};
