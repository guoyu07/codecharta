/// <reference types="angular" />
import { ThreeCameraService } from "./threeCameraService";
import { IRootScopeService, IAngularEvent } from "angular";
import { OrbitControls, PerspectiveCamera } from "three";
export interface CameraChangeSubscriber {
    onCameraChanged(camera: PerspectiveCamera, event: IAngularEvent): any;
}
/**
 * Service to manage the three orbit controls in an angular way.
 */
declare class ThreeOrbitControlsService {
    private threeCameraService;
    private $rootScope;
    static SELECTOR: string;
    static CAMERA_CHANGED_EVENT_NAME: string;
    controls: OrbitControls;
    constructor(threeCameraService: ThreeCameraService, $rootScope: IRootScopeService);
    subscribe(subscriber: CameraChangeSubscriber): void;
    /**
     * Inits the controls on the given DOM Element
     * @param domElement Element with the canvas on it
     */
    init(domElement: any): void;
    /**
     * Called when the orbit controls receive an user input
     * @param {Camera} camera
     */
    onInput(camera: PerspectiveCamera): void;
}
export { ThreeOrbitControlsService };
