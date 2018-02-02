import { CodeMap } from "./model/CodeMap";
export interface KVObject {
    [key: string]: number;
}
/**
 * Calculates the deltas between given maps and modifies the data structure
 */
export declare class DeltaCalculatorService {
    constructor();
    decorateMapsWithDeltas(firstMap: CodeMap, secondMap: CodeMap): void;
    /**
     * Unifies both maps and inserts unique nodes into the other map. The inserted nodes have all metrics set to zero.
     * This will calculate deltas correctly between versions and add "empty" buildings to ensure all revisions have an
     * equal building pool. These empty buildings should be viewed with the unary metric as area
     * @param {CodeMap} leftMap
     * @param {CodeMap} rightMap
     * @returns {{leftMap: CodeMap; rightMap: CodeMap}}
     */
    fillMapsWithNonExistingNodesFromOtherMap(leftMap: CodeMap, rightMap: CodeMap): {
        leftMap: CodeMap;
        rightMap: CodeMap;
    };
    removeCrossOriginNodes(map: CodeMap): CodeMap;
    private insertLeftIntoRightWithZeroMetrics(left, right);
    private childExistsInHierarchy(hierarchy, child);
    private deepcopy(nodes);
    calculateAttributeListDelta(first: KVObject, second: KVObject): {};
}
