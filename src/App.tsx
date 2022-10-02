import { FC } from "react";

import { Array } from "./features/array";
import { Controls } from "./features/controls";

const App: FC = () => (
  <>
    <Controls />
    <Array />
  </>
);

export default App;
