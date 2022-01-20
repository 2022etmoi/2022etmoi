/* Import Jest matchers. */
import "jest-enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

/* Configure Enzyme adapter */
configure({ adapter: new Adapter() });
