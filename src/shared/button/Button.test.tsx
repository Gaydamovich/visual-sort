import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Testing Button component", () => {
  const ButtonComponent = <Button text="Кнопка" onClick={() => {}} />;

  it("Get snapshot Button component", () => {
    const { asFragment } = render(ButtonComponent);
    expect(asFragment()).toMatchSnapshot();
  });
});
