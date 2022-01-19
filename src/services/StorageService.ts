import {Proposition, PropositionID } from "../types/Proposition";
import { UserAnswer } from "../types/Answer";
/**
 * A service to manage local storage data exchanges.
 */
export class StorageService {

    private static instance?: StorageService;
    private STORAGE_FIELDS = {
        USER_ANSWERS: "user-answers"
    };

    /**
     * A static method to retrieve the singleton instance of this service.
     * If the instance doesn't exist, the singleton will initialize.
     * @returns The StorageService instance.
     */
    static getInstance() : StorageService{
        if (! StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    /**
     * A getter to retrieve data in the given field.
     * @param field The local storage cell to set.
     * @param parse Whether or not parse retrieved data.
     */
    private get<T>(field:string, parse = false): T | undefined {
        const data = localStorage.getItem(field);
        if (data) {
            return parse ? JSON.parse(data) : data;
        }
    }

    /**
     * A setter to store data in the given field.
     * @param field The local storage cell to set.
     * @param data The data set.
     * @param stringify Whether or not stringify retrieved data.
     */
    private set(field: string, data: any, stringify = false) {
        localStorage.setItem(field, stringify ? JSON.stringify(data) : data);
    }

    /**
     * A method to save a user answer in the local storage.
     * @param propositionId The proposition identifier.
     * @param userAnswer The user answer.
     */
    public saveAnswer(proposition: Proposition, userAnswer: UserAnswer) {
        const storageData = this.get<[PropositionID,UserAnswer, number][] | undefined>(this.STORAGE_FIELDS.USER_ANSWERS, true);

        const payload: [PropositionID, UserAnswer, number] = [proposition.id, userAnswer, proposition.revision];

        // Remove the precedent proposition user answer.
        const filteredData = storageData?.filter(answer => answer[0] !== proposition.id);

        // Merge current data with new one or save the new one directly.
        const data = filteredData ? [...filteredData, payload] : [payload];

        this.set( this.STORAGE_FIELDS.USER_ANSWERS,data,true);
    }

    /**
     * A method to get user answers from the local storage.
     */
    public getAnswers() {
        return this.get<[PropositionID,UserAnswer][]>(this.STORAGE_FIELDS.USER_ANSWERS, true);
    }

    /**
     * A method to clear the local storage.
     */
    public clear() {
        localStorage.clear();
    }

    constructor() {
        // Silence is golden...
    }
}
