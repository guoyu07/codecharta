/**
 * This service allows other parts of the application to hook into the update cycle and get called on each cycle.
 */
export declare class ThreeUpdateCycleService {
    static SELECTOR: string;
    private updatables;
    constructor();
    register(onUpdate: Function): void;
    /**
     * Updates all registered callback functions
     */
    update(): void;
}
