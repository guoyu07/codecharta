/// <reference types="angular" />
import { IDirective } from "angular";
/**
 * Renders a number field.
 */
export declare class NumberFieldDirective implements IDirective {
    template: string;
    restrict: string;
    /**
     * Binds 'model', 'label', a minimal value 'min' and a 'change' function.
     **/
    scope: {
        model: string;
        label: string;
        min: string;
        change: string;
    };
    constructor();
    /**
     * Links the change function to model changes.
     */
    link(scope: any): void;
}
