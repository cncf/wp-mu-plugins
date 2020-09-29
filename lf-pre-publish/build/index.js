/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Register Pre Publish Checklists
 *
 * @package
 * @since 1.0.0
 *
 */

/*
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceAfter
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceBefore
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.IncorrectExact
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.Incorrect
 * @phpcs:disable PEAR.Functions.FunctionCallSignature.Indent
 */
var registerPlugin = wp.plugins.registerPlugin;
var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;
var select = wp.data.select;
var count = wp.wordcount.count;
var serialize = wp.blocks.serialize;
var Fragment = wp.element.Fragment;

var _select = select('core'),
    getMedia = _select.getMedia;

var iconError = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
  fill: "#cc0000",
  d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
}));
var iconWarning = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
  fill: "#F17E28",
  d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 5h2v10h-2v-10zm1 14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
}));
var iconSuccess = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
  fill: "#4CA76A",
  d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
}));
/**
 * CSS in JS styles.
 */

var ppcHeader = {
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '10px'
};
/**
 * Results component for displaying feedback.
 *
 * @param {*} props Props.
 * @return {string} Result component.
 */

var Result = function Result(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, props.icon, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    style: ppcHeader
  }, props.title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, props.message));
};
/**
 * Count words in posts.
 *
 * @return {string} Result.
 */


function countWords() {
  var blocks = select('core/block-editor').getBlocks(); // Get the word count.

  var wordCount = count(serialize(blocks), 'words');
  var wordCountResult;
  var resultTitle = 'Word Count - ';

  if (wordCount <= 300) {
    wordCountResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconError,
      title: resultTitle + wordCount,
      message: "Posts under 300 words will likely not rank on Google."
    });
  }

  if (wordCount > 300 && wordCount < 500) {
    wordCountResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconWarning,
      title: resultTitle + wordCount,
      message: "Posts should have over 500 words to improve chances of Google ranking."
    });
  }

  if (wordCount >= 500 && wordCount < 1500) {
    wordCountResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconSuccess,
      title: resultTitle + wordCount,
      message: "The length of this post is great!"
    });
  }

  if (wordCount >= 1500) {
    wordCountResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconSuccess,
      title: resultTitle + wordCount,
      message: "Perfect! This is long form content that Google will love."
    });
  }

  return wordCountResult;
}
/**
 * Count Categories and give feedback.
 *
 * @return {string} Result.
 */


function countCategories() {
  var categories = select('core/editor').getEditedPostAttribute('categories');
  var countCategoriesResult;
  var resultTitle = 'Post Category';

  if (categories.length === 0) {
    countCategoriesResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconError,
      title: resultTitle,
      message: "You need to choose a category for the post."
    });
  }

  if (categories.length === 1) {
    countCategoriesResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconSuccess,
      title: resultTitle,
      message: "You have chosen a category for this post."
    });
  }

  if (categories.length > 1) {
    countCategoriesResult = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconError,
      title: resultTitle,
      message: "You have chosen more than one category. Please only select one category."
    });
  }

  return countCategoriesResult;
}
/**
 * Check for H1 heading level content in array.
 *
 * @param {*} block Gutenberg block.
 * @return {boolean} True or false match.
 */


function checkH1(block) {
  return block.attributes.level === 1 && block.name === 'core/heading';
}
/**
 * Count H1 headings in block content.
 *
 * @return {Object} Result
 */


function countH1() {
  var blocks = select('core/block-editor').getBlocks();

  if (!blocks.some(checkH1)) {
    return null;
  }

  var countH1Result = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
    icon: iconError,
    title: "H1 Headers",
    message: "You shouldn't have H1 header tags in the body content. Consider switching to H2."
  });
  return countH1Result;
}
/**
 * Check Webinar Date is present.
 *
 * @return {string} result.
 */


function checkWebinarDate() {
  // check for webinar date.
  var date = select('core/editor').getEditedPostAttribute('meta').lf_webinar_date;
  if (date) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
    icon: iconError,
    title: "Webinar Date",
    message: "A date should be set for the webinar."
  });
}
/**
 * Check for presence of featured image ID.
 *
 * @return { number } result.
 */


function getFeaturedImageId() {
  // Get the featured image ID.
  var featuredImageId = select('core/editor').getEditedPostAttribute('featured_media');
  if (featuredImageId === 0) return null;
  return featuredImageId;
}
/**
 * Check presence of Featured Image.
 *
 * @return {string} result.
 */


function checkFeaturedImage() {
  if (getFeaturedImageId()) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
    icon: iconError,
    title: "Featured Image",
    message: "There is no featured image set."
  });
}
/**
 * Runs the checks on Post featured images.
 *
 * @return {string} result.
 */


function postImages() {
  // Get the featured image
  var featuredImageID = select('core/editor').getEditedPostAttribute('featured_media');
  var featuredImageObj = featuredImageID ? getMedia(featuredImageID) : null;

  if (featuredImageID === 0) {
    return null;
  }

  if (featuredImageID && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(featuredImageObj) === 'object' && featuredImageObj !== null) {
    var featuredWidth = featuredImageObj.media_details.width;
    var featuredHeight = featuredImageObj.media_details.height;
    var imageTitle = 'Featured Image Size';

    if (featuredWidth < 540 || featuredHeight < 285) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
        icon: iconError,
        title: imageTitle,
        message: "Your featured image size is too small. It needs to be at least 540px width and 285px height. Ideal size for blog posts is 1200x630px."
      });
    }

    if (featuredWidth >= 540 && featuredWidth < 1200 || featuredHeight >= 285 && featuredHeight < 630) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
        icon: iconWarning,
        title: imageTitle,
        message: "Your featured image size meets the minimum requirements, but we would recommend using a size of at least 1200x630px."
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconSuccess,
      title: imageTitle,
      message: "The featured image is a great size!"
    });
  }

  return null;
}
/**
 * Runs the checks on Page featured images.
 *
 * @return {string} result.
 */


function pageImages() {
  // Get the featured image
  var featuredImageID = select('core/editor').getEditedPostAttribute('featured_media');
  var imageTitle = 'Featured Image';
  var featuredImageObj = featuredImageID ? getMedia(featuredImageID) : null;

  if (featuredImageID === 0) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconWarning,
      title: imageTitle,
      message: "It's recommended to set a featured image so that the page will have a unique heading."
    });
  }

  if (featuredImageID && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(featuredImageObj) === 'object' && featuredImageObj !== null) {
    var featuredWidth = featuredImageObj.media_details.width;
    var featuredHeight = featuredImageObj.media_details.height;

    if (featuredWidth < 1440 || featuredHeight < 260) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
        icon: iconError,
        title: imageTitle,
        message: "The featured image is too small. We recommend a size of 1440x260px."
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Result, {
      icon: iconSuccess,
      title: imageTitle,
      message: "The featured image is a great size!"
    });
  }

  return null;
}
/**
 * Pre Publish Checklist container.
 *
 * @return {string} checklist.
 */


var PrePublishCheckList = function PrePublishCheckList() {
  // specify which post types will display Pre Publish Checklists.
  var displayChecklistsOn = ['post', 'page', 'lf_webinar']; // get the post type of whatever post we are.

  var postType = wp.data.select('core/editor').getCurrentPostType(); // check if external URL is set on News post.

  var hasNewsExternalLink = select('core/editor').getEditedPostAttribute('meta').lf_post_external_url; // don't load PPC if post is already published, post type not in array, or if post is News.

  if (wp.data.select('core/editor').isCurrentPostPublished() || !displayChecklistsOn.includes(postType) || hasNewsExternalLink) {
    return null;
  }
  /**
   * To run on Post post type.
   *
   * @return {string} content.
   */


  function runOnPost() {
    if ('post' !== postType) return null;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, checkFeaturedImage(), postImages(), countCategories(), countH1(), countWords());
  }
  /**
   * To run on Page post type.
   *
   * @return {string} content.
   */


  function runOnPage() {
    if ('page' !== postType) return null;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, pageImages(), countH1(), countWords());
  }
  /**
   * To run on Webinar post type.
   *
   * @return {string} content.
   */


  function runOnWebinar() {
    if ('lf_webinar' !== postType) return null;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, checkWebinarDate());
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PluginPrePublishPanel, {
    title: 'Pre-Publish Checklist',
    initialOpen: true,
    icon: "clipboard"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    style: {
      fontStyle: 'italic',
      marginBottom: '20px',
      display: 'block'
    }
  }, "Save draft, or preview post, to re-run all the below checks."), runOnPost(), runOnPage(), runOnWebinar());
};

registerPlugin('pre-publish-checklist', {
  render: PrePublishCheckList
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map