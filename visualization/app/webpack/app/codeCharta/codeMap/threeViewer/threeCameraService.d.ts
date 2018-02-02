import { SettingsServiceSubscriber, Settings, SettingsService } from "../../core/settings/settings.service";
import { PerspectiveCamera } from "three";
/**
 * Manages the three js camera in an angular way.
 */
declare class ThreeCameraService implements SettingsServiceSubscriber {
    static SELECTOR: string;
    static VIEW_ANGLE: number;
    static NEAR: number;
    static FAR: number;
    camera: PerspectiveCamera;
    /**
     * @constructor
     */
    constructor();
    onSettingsChanged(settings: Settings, event: Event): void;
    /**
     * Inits the camera with a specific container width and height
     * @param {number} containerWidth initial width
     * @param {number} containerHeight initial height
     * @param {number} x camera position component x
     * @param {number} y camera position component y
     * @param {number} z camera position component z
     */
    init(settingsService: SettingsService, containerWidth: number, containerHeight: number, x: number, y: number, z: number): void;
    setPosition(x: number, y: number, z: number): void;
}
export { ThreeCameraService };
