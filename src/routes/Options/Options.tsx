import "./Options.scss";

import { DeleteOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Button, PhotoCredits } from "../../components";
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
            <div className="route-options__wrapper">
                <h1>Options</h1>
                <ul className="options-list">
                    <li className="options-list__item">
                        <h2>Effacer les données</h2>
                        <p>Effacer mes réponses pour recommencer de zéro.</p>
                        <Button disabled={optionClear} type="danger" size="small"
                            onClick={handleOptionClear}>Effacer <DeleteOutlined/></Button>
                        {optionClear &&
                            <Link to="/app">
                                <Button size="small">Voir les propositions</Button>
                            </Link>
                        }
                    </li>
                    <li className="options-list__item">
                        <h2>Licenses photos</h2>
                        <p>Voici les références pour les images des canditats.</p>
                        <PhotoCredits />
                    </li>
                </ul>
            </div>
        </div>
    );
}
