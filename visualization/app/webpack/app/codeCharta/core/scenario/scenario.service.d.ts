import { Settings } from "../settings/settings.service";
export interface Scenario {
    name: string;
    settings: Settings;
}
/**
 * Applies and manages scenarios.
 */
export declare class ScenarioService {
    private settingsService;
    private scenarios;
    constructor(settingsService: any);
    /**
     * Applies a given scenario to the current codecharta session.
     * @param {Scenario} scenario
     */
    applyScenario(scenario: Scenario): void;
    /**
     * Returns an array of all scenarios.
     * @returns {Scenario[]} all scenarios
     */
    getScenarios(): Scenario[];
    /**
     * Returns the default scenario.
     * @returns {Scenario} the scenario
     */
    getDefaultScenario(): Scenario;
}
