/**
 * 
 * Popup service helps to show interactive popup modal/dialog window from plugin
 * 
 * @class EkstepEditor.popupService
 * @author Sunil A S <sunils@ilimi.in>
 */
EkstepEditor.popupService = new(EkstepEditor.iService.extend({
    loadModules: undefined,
    openModal: undefined,
    initService: function(loadModuleFn, openModalFn) {
        this.loadModules = loadModuleFn;
        this.openModal = openModalFn;
    },
    /**
     *
     * loads HTML template and angular module 
     * @param templatePath {string} path to HTML template
     * @param controllerPath {string} path to angular module
     * @memberof EkstepEditor.popupService
     */
    loadNgModules: function(templatePath, controllerPath) {
        this.loadModules && this.loadModules(templatePath, controllerPath);
    },
    /**
     *
     * opens popup modal/dialog window
     * @param config {object} config object refers to ngDialog open method parameter. please refer [ngDialog docs]{@link https://github.com/likeastore/ngDialog#openoptions}
     * @param callback {function} pre close Callback 
     * @memberof EkstepEditor.popupService
     */
    open: function(config, callback) {
        /* istanbul ignore else */
        if (this.openModal) {
            this.openModal(config, callback);
            EkstepEditor.telemetryService.interact({ "type": "click", "subtype": "open", "target": "popup", "pluginid": "", "pluginver": '', "objectid": "", "stage": EkstepEditorAPI.getCurrentStage().id });
        }
    }
}));
