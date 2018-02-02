/// <reference types="angular" />
import { CodeMap } from "./model/CodeMap";
import { IRootScopeService, IAngularEvent } from "angular";
import { DeltaCalculatorService } from "./data.deltaCalculator.service";
import { DataDecoratorService } from "./data.decorator.service";
export interface DataModel {
    revisions: CodeMap[];
    metrics: string[];
    renderMap: CodeMap;
}
export interface DataServiceSubscriber {
    onDataChanged(data: DataModel, event: IAngularEvent): any;
}
/**
 * This service stores and sets the current revisions, map and metrics
 */
export declare class DataService {
    private $rootScope;
    private deltaCalculatorService;
    private dataDecoratorService;
    private _data;
    private _lastReferenceIndex;
    private _lastComparisonMap;
    private _deltasEnabled;
    constructor($rootScope: IRootScopeService, deltaCalculatorService: DeltaCalculatorService, dataDecoratorService: DataDecoratorService);
    readonly data: DataModel;
    subscribe(subscriber: DataServiceSubscriber): void;
    notify(): void;
    /**
     * Puts a CodeMap into a given revision slot
     * @param {CodeMap} map A well formed code map
     * @param {number} revision the maps position in the revisions array
     */
    setMap(map: CodeMap, revision: number): void;
    getReferenceMapName(): string;
    getComparisonMapName(): string;
    /**
     * Sets metrics from a revision by id.
     * @param {number} index id
     */
    setMetrics(index: number): void;
    /**
     * resets all maps (deletes them)
     */
    resetMaps(): void;
    /**
     * Selects and sets the first map to compare.  this is the map which is substracted from the main map
     * @param {number} index the maps index in the revisions array
     */
    setComparisonMap(index: number): void;
    /**
     * Selects and sets the second map to compare. this is the main visible map
     * @param {number} index the maps index in the revisions array
     */
    setReferenceMap(index: number): void;
    onActivateDeltas(): void;
    onDeactivateDeltas(): void;
    applyNodeMerging(): void;
}
