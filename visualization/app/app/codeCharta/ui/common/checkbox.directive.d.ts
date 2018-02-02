/// <reference types="angular" />
import { IDirective } from "angular";
/**
 * A simple checkbox customized for CodeCharta. Watches for model changes and calls the bound change-function
 */
declare class CheckboxDirective implements IDirective {
    template: string;
    scope: any;
    restrict: string;
    constructor();
    /**
     * Watches model changes and links the change function to it.
     */
    link(scope: any): void;
}
export { CheckboxDirective };
