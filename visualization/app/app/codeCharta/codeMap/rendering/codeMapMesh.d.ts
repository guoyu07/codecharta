import * as THREE from "three";
import { codeMapGeometricDescription } from "./codeMapGeometricDescription";
import { intersectionResult } from "./codeMapGeometricDescription";
import { codeMapBuilding } from "./codeMapBuilding";
import { node } from "./node";
import { renderSettings } from "./renderSettings";
export interface mousePos {
    x: number;
    y: number;
}
export declare class CodeMapMesh {
    private threeMesh;
    private material;
    private geomGen;
    private mapGeomDesc;
    private nodes;
    private currentlyHighlighted;
    private currentlySelected;
    settings: renderSettings;
    private lightingParams;
    constructor(nodes: node[], settings: renderSettings);
    private initMaterial(settings);
    private setDeltaColorsFlipped();
    private setDeltaColorsUnflipped();
    getThreeMesh(): THREE.Mesh;
    setHighlighted(buildings: codeMapBuilding[], color?: number): void;
    setSelected(buildings: codeMapBuilding[], color?: number): void;
    getCurrentlyHighlighted(): codeMapBuilding[] | null;
    getCurrentlySelected(): codeMapBuilding[] | null;
    clearHighlight(): void;
    clearSelected(): void;
    getMeshDescription(): codeMapGeometricDescription;
    private calculatePickingRay(mouse, camera);
    checkMouseRayMeshIntersection(mouse: mousePos, camera: THREE.Camera): intersectionResult;
    setScale(x: number, y: number, z: number): void;
}
