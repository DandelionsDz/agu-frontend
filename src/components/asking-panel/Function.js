import { render } from "@testing-library/react";
import Preview from "./Preview";
import Typing from "./Typing";

function renderStep(step, isAnswering) {
  switch (step) {
    case 0:
      return <Typing isAnswering={isAnswering} />
    case 1:
      return <Preview />
  }
}

export default render;
