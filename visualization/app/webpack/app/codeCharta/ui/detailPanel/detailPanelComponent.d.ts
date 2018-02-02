/// <reference types="angular" />
import { SettingsService, Settings, SettingsServiceSubscriber } from "../../core/settings/settings.service";
import { CodeMapControllerSubscriber, CodeMapBuildingTransition } from "../../codeMap/codeMapComponent";
export declare class DetailPanelController implements SettingsServiceSubscriber, CodeMapControllerSubscriber {
    private $rootScope;
    private settingsService;
    private $timeout;
    private details;
    private settings;
    constructor($rootScope: any, settingsService: SettingsService, $timeout: any);
    onBuildingHovered(data: CodeMapBuildingTransition, event: angular.IAngularEvent): void;
    onBuildingSelected(data: CodeMapBuildingTransition, event: angular.IAngularEvent): void;
    /**
     * Called when settings change. Applies them to the common details.
     */
    onSettingsChanged(settings: Settings): void;
    /**
     * called when a new/no building is selected.
     */
    onSelect(data: any): void;
    /**
     * called when a new/no building is hovered.
     */
    onHover(data: any): void;
    /**
     * Checks whether a a building is hovered
     */
    isHovered(): boolean;
    /**
     * Checks whether a a building is selected
     * @return {boolean}
     */
    isSelected(): boolean;
    /**
     * Sets hovered details
     * @param {object} hovered hovered building
     */
    setHoveredDetails(hovered: any): void;
    /**
     * Sets selected details
     * @param {object} selected selected building
     */
    setSelectedDetails(selected: any): void;
    /**
     * clears hovered details
     */
    clearHoveredDetails(): void;
    /**
     * clears selected details
     */
    clearSelectedDetails(): void;
}
export declare const detailPanelComponent: {
    selector: string;
    template: any;
    controller: typeof DetailPanelController;
};
