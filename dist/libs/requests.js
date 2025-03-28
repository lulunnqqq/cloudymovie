var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
if (typeof libsExports === 'undefined') {
    var libsExports = {};
}
libsExports.requestGet = function (url_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(_this, __spreadArray([url_1], args_1, true), void 0, function (url, headers, response_type) {
        var response, error_1;
        if (headers === void 0) { headers = {}; }
        if (response_type === void 0) { response_type = "json"; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4, fetch(url, {
                            method: 'GET',
                            headers: headers,
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: ".concat(response.status));
                    }
                    if (!(response_type === "json")) return [3, 3];
                    return [4, response.json()];
                case 2: return [2, _a.sent()];
                case 3: return [4, response.text()];
                case 4: return [2, _a.sent()];
                case 5: return [3, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error("[requestGet] Error fetching ".concat(url, ":"), error_1);
                    throw error_1;
                case 7: return [2];
            }
        });
    });
};
libsExports.requestPost = function (url_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(_this, __spreadArray([url_1], args_1, true), void 0, function (url, data, headers, response_type) {
        var response, error_2;
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = {}; }
        if (response_type === void 0) { response_type = "json"; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4, fetch(url, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: ".concat(response.status));
                    }
                    if (!(response_type === "json")) return [3, 3];
                    return [4, response.json()];
                case 2: return [2, _a.sent()];
                case 3: return [4, response.text()];
                case 4: return [2, _a.sent()];
                case 5: return [3, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error("[requestPost] Error posting to ".concat(url, ":"), error_2);
                    throw error_2;
                case 7: return [2];
            }
        });
    });
};
libsExports.cleanText = function (text) {
    return text.replace(/\n/g, "").trim();
};
libsExports.fetchAPI = function (baseUrl_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(_this, __spreadArray([baseUrl_1], args_1, true), void 0, function (baseUrl, params, headers) {
        var url;
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL(baseUrl);
                    Object.keys(params).forEach(function (key) {
                        if (params[key] !== undefined && params[key] !== null) {
                            url.searchParams.append(key, params[key].toString());
                        }
                    });
                    return [4, libsExports.requestGet(url.toString(), headers)];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
libsExports.extractTitle = function (htmlString) {
    var titleRegex = /<title>(.*?)<\/title>/i;
    var match = titleRegex.exec(htmlString);
    return match ? match[1] : null;
};
libsExports.extractLinks = function (htmlString) {
    var linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>/gi;
    var links = [];
    var match;
    while ((match = linkRegex.exec(htmlString)) !== null) {
        links.push(match[1]);
    }
    return links;
};
libsExports.extractImages = function (htmlString) {
    var imgRegex = /<img\s+[^>]*src="([^"]*)"[^>]*>/gi;
    var images = [];
    var match;
    while ((match = imgRegex.exec(htmlString)) !== null) {
        images.push(match[1]);
    }
    return images;
};
libsExports.sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
console.log('Loaded requests library with functions:', Object.keys(libsExports).join(', '));
