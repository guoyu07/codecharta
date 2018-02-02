import { Scene } from "three";
import { CodeMapMesh } from "../rendering/codeMapMesh";
/**
 * A service which manages the Three.js scene in an angular way.
 */
declare class ThreeSceneService {
    static SELECTOR: string;
    scene: Scene;
    private labelManager;
    private lights;
    private labels;
    private mapGeometry;
    private mapMesh;
    constructor();
    initLights(): void;
    setMapMesh(mesh: CodeMapMesh, size: number): void;
    clearLabels(): void;
    getMapMesh(): CodeMapMesh;
}
export { ThreeSceneService };
