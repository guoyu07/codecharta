import * as THREE from "three";
import { node } from "./node";
export declare class codeMapBuilding {
    id: number;
    boundingBox: THREE.Box3;
    color: number;
    node: node;
    parent?: codeMapBuilding;
    constructor(id: number, box: THREE.Box3, node: node, color?: number);
}
