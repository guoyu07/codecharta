/// <reference types="angular" />
import { IDirective } from "angular";
/**
 * Container for {CollapsibleElementDirective}. Inner elements do not replace this. They are put inside the ng-transclude tag.
 */
export declare class CollapsibleDirective implements IDirective {
    restrict: string;
    scope: {};
    replace: boolean;
    transclude: boolean;
    template: string;
    constructor();
}
