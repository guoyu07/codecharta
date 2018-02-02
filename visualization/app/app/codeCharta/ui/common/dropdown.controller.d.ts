/// <reference types="angular" />
import { TooltipService, TooltipServiceSubscriber, Tooltips } from "../../core/tooltip/tooltip.service";
import { IScope } from "angular";
/**
 * Controller for the DropdownDirective
 */
declare class DropdownController implements TooltipServiceSubscriber {
    private tooltipService;
    private $scope;
    /**
     *
     * @param {TooltipService} tooltipService
     * @param {Scope} $scope
     */
    constructor(tooltipService: TooltipService, $scope: IScope);
    onTooltipsChanged(tooltips: Tooltips, event: Event): void;
    /**
     * returns the tooltip description related to the given key
     * @param {String} key
     * @returns {String} description
     */
    getTooltipTextByKey(key: any): string;
    toLowerCaseButFirst(word: string): string;
}
export { DropdownController };
