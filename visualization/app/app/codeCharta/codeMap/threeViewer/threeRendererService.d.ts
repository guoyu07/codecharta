import { WebGLRenderer } from "three";
/**
 * A service which manages the Three.js renderer in an angular way.
 */
export declare class ThreeRendererService {
    static SELECTOR: string;
    static CLEAR_COLOR: number;
    static CLEAR_ALPHA: number;
    static RENDER_OPTIONS: {
        antialias: boolean;
        preserveDrawingBuffer: boolean;
    };
    renderer: WebGLRenderer;
    constructor();
    /**
     * Inits the renderer.
     */
    init(containerWidth: number, containerHeight: number): void;
}
