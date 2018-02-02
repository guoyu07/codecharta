/// <reference types="angular" />
import { IScope } from "angular";
import { TooltipService, TooltipServiceSubscriber, Tooltips } from "../../core/tooltip/tooltip.service";
import { ScenarioService, Scenario } from "../../core/scenario/scenario.service";
export declare class ScenarioButtonsController implements TooltipServiceSubscriber {
    private scenarioService;
    private tooltipService;
    private $scope;
    private scenarios;
    private visible;
    /**
     *
     * @param {Scenario} scenarioService
     * @param {TooltipService} tooltipService
     * @param {Scope} $rootScope
     * @param {Scope} $scope
     */
    constructor(scenarioService: ScenarioService, tooltipService: TooltipService, $scope: IScope);
    $postLink(): void;
    /**
     * Toggles the visibility
     */
    toggle(): void;
    onTooltipsChanged(tooltips: Tooltips, event: Event): void;
    /**
     * returns the tooltip description related to the given key
     * @param {String} key
     * @returns {String} tooltip
     */
    getScenarioTooltipTextByKey(key: string): string;
    /**
     * called when a scenario button is clicked, applies the linked scenario
     * @param {Scenario} value
     */
    onclick(value: Scenario): void;
}
export declare const scenarioButtonsComponent: {
    selector: string;
    template: any;
    controller: typeof ScenarioButtonsController;
};
