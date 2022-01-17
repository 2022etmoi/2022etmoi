import "./App.scss";
import { Sidebar } from "./components/Sidebar";

function App() {
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
