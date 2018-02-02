import { CodeMap } from "./model/CodeMap";
import { DataValidatorService } from "./data.validator.service";
import { DataService } from "./data.service";
/**
 * This service loads maps into the DataService
 */
export declare class DataLoadingService {
    private dataValidatorService;
    private dataService;
    constructor(dataValidatorService: DataValidatorService, dataService: DataService);
    /**
     * Validates and loads a map from the given file content into the dataService
     * @param {Object} fileContent well formed (schema.json) fileContent
     * @param {Number} revision the revision id
     * @returns {Promise} which resolves when the filecontent is valid and stored in dataService.
     * The Promise rejects when errors happen. The errors are provided as parameters of the rejection function
     */
    loadMapFromFileContent(fileName: string, fileContent: any, revision: number): Promise<CodeMap>;
}
