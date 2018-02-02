import * as THREE from "three";
import { node } from "./node";
import { renderSettings } from "./renderSettings";
export declare class LabelManager {
    private parentObjectInScene;
    private labels;
    constructor(argParentObjectInScene: THREE.Object3D);
    addLabel(node: node, settings: renderSettings): void;
    scale(x: number, y: number, z: number): void;
    /**
    * Returns a text sprite
    * @param {string} message
    * @param {number} fontsize
    * @returns {THREE.Sprite}
    */
    private makeText(message, fontsize);
}
