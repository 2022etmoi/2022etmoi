import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

/* Import Jest matchers. */
import "jest-enzyme";

/* Configure Enzyme adapter */
configure({ adapter: new Adapter() });
