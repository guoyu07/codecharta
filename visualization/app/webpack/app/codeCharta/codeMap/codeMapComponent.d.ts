/// <reference types="angular" />
import { codeMapBuilding } from "./rendering/codeMapBuilding";
import { ThreeCameraService } from "./threeViewer/threeCameraService";
import { IAngularEvent, IRootScopeService } from "angular";
import { ThreeViewerService } from "./threeViewer/threeViewerService";
import { CodeMapService } from "./codeMapService";
export interface CodeMapBuildingTransition {
    from: codeMapBuilding;
    to: codeMapBuilding;
}
export interface CodeMapControllerSubscriber {
    onBuildingHovered(data: CodeMapBuildingTransition, event: IAngularEvent): any;
    onBuildingSelected(data: CodeMapBuildingTransition, event: IAngularEvent): any;
}
/**
 * Controls the codeMapDirective
 */
export declare class CodeMapController {
    private $rootScope;
    private threeCameraService;
    private threeRendererService;
    private threeSceneService;
    private threeUpdateCycleService;
    private threeViewerService;
    private $element;
    private codeMapService;
    private hovered;
    private selected;
    private mouse;
    constructor($rootScope: any, threeCameraService: ThreeCameraService, threeRendererService: any, threeSceneService: any, threeUpdateCycleService: any, threeViewerService: ThreeViewerService, $element: Element, codeMapService: CodeMapService);
    $postLink(): void;
    static subscribe($rootScope: IRootScopeService, subscriber: CodeMapControllerSubscriber): void;
    /**
     * Update method which is bound to the {@link UpdateCycleService}
     */
    update(): void;
    /**
     * updates {CodeMapController.mouse} on mouse movement
     * @param {MouseEvent} event
     */
    onDocumentMouseMove(event: any): void;
    /**
     * updates {CodeMapController} on mouse down
     */
    onDocumentMouseDown(): void;
    /**
     * Called when a building is hovered.
     * @param from old building
     * @param to new building
     * @emits {building-hovered} on hover
     */
    onBuildingHovered(from: codeMapBuilding, to: codeMapBuilding): void;
    /**
     * called when a building is selected.
     * @param from previously selected building
     * @param to currently selected building
     * @emits {building-selected} when building is selected
     */
    onBuildingSelected(from: codeMapBuilding, to: codeMapBuilding): void;
}
export declare const codeMapComponent: {
    selector: string;
    template: string;
    controller: typeof CodeMapController;
};
