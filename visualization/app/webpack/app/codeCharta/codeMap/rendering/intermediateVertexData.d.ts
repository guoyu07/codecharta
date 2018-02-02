import * as THREE from "three";
export declare class intermediateVertexData {
    positions: THREE.Vector3[];
    normals: THREE.Vector3[];
    uvs: THREE.Vector2[];
    colors: number[];
    subGeometryIdx: number[];
    deltas: number[];
    indices: number[];
    constructor();
    addVertex(pos: THREE.Vector3, normal: THREE.Vector3, uv: THREE.Vector2, color: number, subGeomIdx: number, delta: number): number;
    addFace(i0: number, i1: number, i2: number): void;
}
