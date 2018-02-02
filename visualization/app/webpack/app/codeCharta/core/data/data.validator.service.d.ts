import { CodeMapNode } from "./model/CodeMap";
/**
 * This service validates the given data against the schema and other validation steps
 */
export declare class DataValidatorService {
    /**
     * @constructor
     */
    constructor();
    /**
     * Checks if a nodes children are unique in name
     * @param {Object} node
     * @returns {boolean} true if the node has unique children
     */
    hasUniqueChildren(node: CodeMapNode): any;
    /**
     * validates the given file data against the schema file and checks for unique names in a parents direct children.
     * @param {Object} well formed fileContent (schema.json)
     * @returns {Promise} which resolves when the filecontent is valid, rejects with errors otherwise
     */
    validate(data: any): Promise<void>;
}
