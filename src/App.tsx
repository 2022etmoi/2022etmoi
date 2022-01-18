import "./App.scss";
import { Sidebar } from "./components/Sidebar";
import { computeScores } from "./services/scores";

function App() {

    console.log(computeScores([1, 1, 2], [[1, -1, 1]]));

    return (
        <div className="app">
            <Sidebar links={[{
                name: "Page 0",
                icon: "page0.svg",
                component: <div>Page 0</div>,
            },{
                name: "Page 1",
                icon: "page1.svg",
                component: <div>Page 1</div>,
            },{
                name: "Page 2",
                icon: "page2.svg",
                component: <div>Page 2</div>,
            }]}/>
        </div>
    );
}

export default App;
