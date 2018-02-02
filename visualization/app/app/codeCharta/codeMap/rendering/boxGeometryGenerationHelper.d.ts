import { intermediateVertexData } from "./intermediateVertexData";
import { boxMeasures } from "./geometryGenerator";
export declare class boxGeometryGenerationHelper {
    private static createPositionsUVs(minPos, maxPos, positions, uvs);
    private static createFrontFacingPositionsUVsFromBackFacingData(minPos, maxPos, positions, uvs);
    private static createVerticesAndFaces(minPos, maxPos, color, delta, subGeomIdx, positions, uvs, data);
    static addBoxToVertexData(data: intermediateVertexData, measures: boxMeasures, color: number, subGeomIdx: number, delta: number): void;
}
