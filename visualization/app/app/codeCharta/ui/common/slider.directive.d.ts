/// <reference types="angular" />
/**
 * Renders a slider.
 */
import { IDirective } from "angular";
export declare class SliderDirective implements IDirective {
    template: string;
    restrict: string;
    scope: {
        model: string;
        label: string;
        min: string;
        max: string;
        step: string;
        decimals: string;
        change: string;
    };
    constructor();
    /**
     * Links the change function to model changes.
     * @param {Scope} scope
     */
    link(scope: any): void;
}
