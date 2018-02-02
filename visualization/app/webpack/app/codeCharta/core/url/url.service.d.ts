/// <reference types="angular" />
import { ILocationService, IHttpService } from "angular";
/**
 * This service offers an application specific url API.
 */
export declare class UrlService {
    private $location;
    private $http;
    static SELECTOR: string;
    constructor($location: ILocationService, $http: IHttpService);
    /**
     * returns an url parameter value by its key.
     * @param {string} key
     * @returns {string} url parameter value
     */
    getParam(key: string): string;
    /**
     * returns an url parameter value by its name/key.
     * @param {string} name
     * @param {string} [url=current location]
     * @returns {string} url parameter value
     */
    getParameterByName(name: string, url?: string): string;
    /**
     * returns the current locations url
     * @returns {string} url
     */
    getUrl(): string;
    /**
     * returns the files content specified in the 'file' url parameter
     * @returns {Promise} which returns the files content on resolution
     */
    getFileDataFromQueryParam(): Promise<Object>;
    /**
     * returns the files content specified in the 'file' parameter
     * @returns {Promise} which returns the files content on resolution
     */
    getFileDataFromFile(file: string): Promise<Object>;
}
