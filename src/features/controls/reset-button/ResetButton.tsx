import { FC } from "react";

import { useAppDispatch } from "../../../app/hooks";
import { Button } from "../../../shared/button";

const resetArray = () => ({ type: "reset" });

export const ResetButton: FC = () => {
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(resetArray());

  return <Button text="Create Array" onClick={onClick} />;
};
