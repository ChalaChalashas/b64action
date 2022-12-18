/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 646:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = eval("require")("file-base64");


/***/ }),

/***/ 66:
/***/ ((module) => {

module.exports = eval("require")("untildify");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(646);
const base64 = __nccwpck_require__(368);
const path = __nccwpck_require__(17);
const untildify = __nccwpck_require__(66);
const fs = __nccwpck_require__(147);  
 
// most @actions toolkit packages have async methods
async function run() {
  try { 
    const filePath = untildify(core.getInput('filePath'));  
    core.info("-----------------------------------------------------------------------------------------------------");  
    core.info("path");
    core.info(filePath);
    let np = path.normalize(filePath);
    core.info("np");
    core.info(np);
    let f = fs.readFileSync(np);
    let b64 = bota(f);
    core.info("b64");
    core.info(b64);
    core.info("-----------------------------------------------------------------------------------------------------");  
    let promise = new Promise(function(resolve, reject) {
      base64.encode(path.normalize(filePath), function(err, base64String) {
        if(err){
          core.info("Failed to base64 encode "+filePath)
          core.error(err);
          reject(err);
          return;
        }
        core.info("Base64 encode successful offfffffffffffffffffffffffffffffff"+filePath);
        core.setSecret(base64String);
        core.setOutput('base64', base64String);
        resolve();
      });
    });
    await promise;
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

})();

module.exports = __webpack_exports__;
/******/ })()
;
