/// <reference types="angular" />
import { DropdownController } from "./dropdown.controller";
import { IDirective } from "angular";
/**
 * Renders a dropdown menu.
 */
export declare class DropdownDirective implements IDirective {
    template: string;
    restrict: string;
    scope: {
        label: string;
        values: string;
        model: string;
        change: string;
        useEnumFilter: string;
    };
    controller: typeof DropdownController;
    controllerAs: string;
    bindToController: boolean;
    constructor();
    /**
     * Links the change function to model changes.
     * @param {Scope} scope
     */
    link(scope: any): void;
}
