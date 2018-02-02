import { DataLoadingService } from "./core/data/data.loading.service";
import { UrlService } from "./core/url/url.service";
import { SettingsService } from "./core/settings/settings.service";
import { ScenarioService } from "./core/scenario/scenario.service";
import { DataService } from "./core/data/data.service";
/**
 * This is the main controller of the CodeCharta application
 */
export declare class CodeChartaController {
    private dataLoadingService;
    private urlService;
    private settingsService;
    private scenarioService;
    private dataService;
    private pkg;
    constructor(dataLoadingService: DataLoadingService, urlService: UrlService, settingsService: SettingsService, scenarioService: ScenarioService, dataService: DataService);
    init(): void;
    /**
     * Tries to load the file specified in the given url. Loads sample data if it fails.
     */
    loadFileOrSample(): void;
    /**
     * called after map loading finished. Applies the default scenario.
     */
    loadingFinished(): void;
    /**
     * initializes keypress handlers
     */
    initHandlers(): void;
    /**
     * Prints errors to the browser console and alerts the user
     * @param {Object} errors an errors object
     */
    printErrors(errors: Object): void;
}
export declare const codeChartaComponent: {
    selector: string;
    template: any;
    controller: typeof CodeChartaController;
};
