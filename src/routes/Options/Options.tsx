import "./Options.scss";

import { DeleteOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";
import { StorageService } from "../../services/";

/**
 * A route to display options.
 */
export function Options() {
    const storageService = StorageService.getInstance();

    const [optionClear, setOptionClear] = useState(false);
    const handleOptionClear = useCallback(()=> {
        storageService.clear();
        setOptionClear(true);
    }, [storageService]);

    return (
        <div className="route-options">
            <header>
                <h1>Options</h1>
            </header>
            <div className="route-options__wrapper">
                <ul className="options-list">
                    <li className="options-list__item">
                        <h2>Effacer les données</h2>
                        <p>Effacer mes votes pour recommencer de zéro.</p>
                        <Button disabled={optionClear} type="danger" size="small" onClick={handleOptionClear}>Effacer <DeleteOutlined/></Button>
                        {optionClear &&
                            <Link to="/app">
                                <Button size="small">Commencer à voter</Button>
                            </Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}
