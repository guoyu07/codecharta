import * as THREE from "three";
import { node } from "./node";
import { codeMapGeometricDescription } from "./codeMapGeometricDescription";
import { renderSettings } from "./renderSettings";
export interface boxMeasures {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    depth: number;
}
export interface buildResult {
    mesh: THREE.Mesh;
    desc: codeMapGeometricDescription;
}
export declare class geometryGenerator {
    private static MINIMAL_BUILDING_HEIGHT;
    constructor();
    build(nodes: node[], material: THREE.Material, settings: renderSettings): buildResult;
    private mapNodeToLocalBox(n);
    private ensureMinHeightIfDeltaNotNegative(x, d);
    private addFloor(data, n, idx, desc);
    private nodeHasSuitableDeltas(n, heightKey);
    private addBuilding(data, n, idx, desc, settings);
    private estimateColorForBuilding(n, colorKey, range, deltasEnabled);
    private buildMeshFromIntermediateVertexData(data, material);
}
