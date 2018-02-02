import { ThreeSceneService } from "./threeSceneService";
import { ThreeCameraService } from "./threeCameraService";
import { ThreeOrbitControlsService } from "./threeOrbitControlsService";
import { ThreeRendererService } from "./threeRendererService";
import { ThreeUpdateCycleService } from "./threeUpdateCycleService";
import { SettingsService } from "../../core/settings/settings.service";
/**
 * A service to angularize the Three.js canvas.
 */
export declare class ThreeViewerService {
    private threeSceneService;
    private threeCameraService;
    private threeOrbitControlsService;
    private threeRendererService;
    private threeUpdateCycleService;
    private settingsService;
    static SELECTOR: string;
    constructor(threeSceneService: ThreeSceneService, threeCameraService: ThreeCameraService, threeOrbitControlsService: ThreeOrbitControlsService, threeRendererService: ThreeRendererService, threeUpdateCycleService: ThreeUpdateCycleService, settingsService: SettingsService);
    /**
     * Initializes the canvas and all necessary services.
     * @param {Object} element DOM Element which should be the canvas
     */
    init(element: Element): void;
    /**
     * Applies transformations on window resize.
     */
    onWindowResize(): void;
    /**
     * Calls the animation loop.
     */
    animate(): void;
}
