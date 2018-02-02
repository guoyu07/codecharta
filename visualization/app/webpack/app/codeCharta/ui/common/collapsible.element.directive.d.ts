/// <reference types="angular" />
import { IDirective } from "angular";
/**
 * Collapsible element. Should be put inside a {@link CollapsibleDirective}.
 */
export declare class CollapsibleElementDirective implements IDirective {
    private $rootScope;
    private $timeout;
    restrict: string;
    scope: {
        iconClass: string;
        label: string;
    };
    replace: boolean;
    transclude: boolean;
    template: string;
    constructor($rootScope: any, $timeout: any);
    /**
     * calls the materialize function collapsible(...) on the collapsible element. This is needed to initialize the functionality.
     */
    link(): void;
}
