export declare const TOOLTIPS_CHANGED_EVENT_ID = "tooltips-changed";
export declare const NO_DESCRIPTION = "no description";
export interface Tooltips {
    [key: string]: string;
}
export interface TooltipServiceSubscriber {
    onTooltipsChanged(tooltips: Tooltips, event: Event): any;
}
/**
 * Return tooltips containing descriptions
 */
declare class TooltipService {
    private $rootScope;
    static SELECTOR: string;
    private _tooltips;
    constructor($rootScope: any);
    subscribe(subscriber: TooltipServiceSubscriber): void;
    tooltips: Tooltips;
    /**
     * returns the tooltip description related to the given key
     * @param {String} key
     * @returns {String} the description related to the given key
     */
    getTooltipTextByKey(key: string): string;
    /**
     * Function used for recursiveness with getTooltipTexByKey
     * @param {String} match matched string
     * @param {String} p1 first regex group
     * @returns {String}
     */
    replaceString(match: any, p1: any): string;
}
export { TooltipService };
