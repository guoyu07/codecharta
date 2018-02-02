import { codeMapBuilding } from "./codeMapBuilding";
import * as THREE from "three";
export interface intersectionResult {
    intersectionFound: boolean;
    building?: codeMapBuilding;
}
export declare class codeMapGeometricDescription {
    private buildings;
    private mapSize;
    private scales;
    constructor(mapSize: number);
    add(building: codeMapBuilding): void;
    setScales(scales: THREE.Vector3): void;
    intersect(ray: THREE.Ray): intersectionResult;
}
