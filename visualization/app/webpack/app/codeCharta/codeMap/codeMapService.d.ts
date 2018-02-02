import { SettingsServiceSubscriber, Settings, SettingsService } from "../core/settings/settings.service";
/**
 * Main service to manage the state of the rendered code map
 */
export declare class CodeMapService implements SettingsServiceSubscriber {
    private threeSceneService;
    private treeMapService;
    private settingsService;
    static SELECTOR: string;
    private mapMesh;
    private labelManager;
    constructor(threeSceneService: any, treeMapService: any, settingsService: SettingsService);
    onSettingsChanged(settings: Settings, event: Event): void;
    /**
     * Applies the given settings and redraws the scene
     * @param {Settings} s
     * @listens {settings-changed}
     */
    applySettings(s: Settings): void;
    updateMapGeometry(s: any): void;
    /**
    * scales the scene by the given values
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    scaleMap(x: any, y: any, z: any): void;
}
