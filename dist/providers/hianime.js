var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _this = this;
if (typeof providers === 'undefined') {
    var providers = {};
}
var providerInfo = {
    DOMAIN: "https://hianime.nz",
    HeaderDefault: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
};
providers["collections"] = function () { return __awaiter(_this, void 0, void 0, function () {
    var htmlHome, parseHome_1, collections, trendings_1, trendingName, topAiring_1, topAiringName, mostPopular_1, mostPopularName, mostFavorite_1, mostFavoriteName, lastCompleted_1, lastCompletedName, topToday_1, topTodayName, topWeek_1, topWeekName, topMonth_1, topMonthName, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, requestGet("".concat(providerInfo.DOMAIN, "/home"), providerInfo.HeaderDefault, "text")];
            case 1:
                htmlHome = _a.sent();
                parseHome_1 = cheerio.load(htmlHome);
                collections = [];
                trendings_1 = [];
                trendingName = parseHome_1("#anime-trending .block_area-header .cat-heading").text();
                parseHome_1("#anime-trending .item-qtip").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-poster').attr("href");
                    var title = parseHome_1(element).find(".film-title").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    trendings_1.push({
                        film_id: href,
                        poster_url: image,
                        title: title,
                    });
                });
                console.log({ length: parseHome_1("#anime-trending").length });
                if (trendings_1.length > 0) {
                    collections.push({
                        collection_name: trendingName,
                        films: trendings_1,
                    });
                }
                topAiring_1 = [];
                topAiringName = parseHome_1("#anime-featured .row div.col-xl-3").eq(0).find(".anif-block-header").text();
                parseHome_1("#anime-featured .row div.col-xl-3").eq(0).find(".anif-block-ul li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    console.log({ href: href, title: title, image: image });
                    if (href && title && image) {
                        topAiring_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (topAiring_1.length > 0) {
                    collections.push({
                        collection_name: topAiringName,
                        films: topAiring_1,
                    });
                }
                mostPopular_1 = [];
                mostPopularName = parseHome_1("#anime-featured .row div.col-xl-3").eq(1).find(".anif-block-header").text();
                parseHome_1("#anime-featured .row div.col-xl-3").eq(1).find(".anif-block-ul li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        mostPopular_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (mostPopular_1.length > 0) {
                    collections.push({
                        collection_name: mostPopularName,
                        films: mostPopular_1,
                    });
                }
                mostFavorite_1 = [];
                mostFavoriteName = parseHome_1("#anime-featured .row div.col-xl-3").eq(2).find(".anif-block-header").text();
                parseHome_1("#anime-featured .row div.col-xl-3").eq(2).find(".anif-block-ul li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        mostFavorite_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (mostFavorite_1.length > 0) {
                    collections.push({
                        collection_name: mostFavoriteName,
                        films: mostFavorite_1,
                    });
                }
                lastCompleted_1 = [];
                lastCompletedName = parseHome_1("#anime-featured .row div.col-xl-3").eq(3).find(".anif-block-header").text();
                parseHome_1("#anime-featured .row div.col-xl-3").eq(3).find(".anif-block-ul li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        lastCompleted_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (lastCompleted_1.length > 0) {
                    collections.push({
                        collection_name: lastCompletedName,
                        films: lastCompleted_1,
                    });
                }
                topToday_1 = [];
                topTodayName = "Top Today";
                parseHome_1("#top-viewed-day li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        topToday_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (topToday_1.length > 0) {
                    collections.push({
                        collection_name: topTodayName,
                        films: topToday_1,
                    });
                }
                topWeek_1 = [];
                topWeekName = "Top Week";
                parseHome_1("#top-viewed-week li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        topWeek_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (topWeek_1.length > 0) {
                    collections.push({
                        collection_name: topWeekName,
                        films: topWeek_1,
                    });
                }
                topMonth_1 = [];
                topMonthName = "Top Month";
                parseHome_1("#top-viewed-month li").each(function (index, element) {
                    var href = parseHome_1(element).find('.film-name a').attr("href");
                    var title = parseHome_1(element).find(".film-name a").text();
                    var image = parseHome_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        topMonth_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                if (topMonth_1.length > 0) {
                    collections.push({
                        collection_name: topMonthName,
                        films: topMonth_1,
                    });
                }
                return [2, collections];
            case 2:
                error_1 = _a.sent();
                console.error("Error fetching collections:", error_1);
                return [2, []];
            case 3: return [2];
        }
    });
}); };
providers["hot_collection"] = function () { return __awaiter(_this, void 0, void 0, function () {
    var htmlHome, parseHome_2, spotlight_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, requestGet("".concat(providerInfo.DOMAIN, "/home"), providerInfo.HeaderDefault, "text")];
            case 1:
                htmlHome = _a.sent();
                parseHome_2 = cheerio.load(htmlHome);
                spotlight_1 = [];
                parseHome_2("#slider .swiper-wrapper .swiper-slide").each(function (index, element) {
                    var href = parseHome_2(element).find('.desi-buttons a.btn-secondary').attr("href");
                    var title = parseHome_2(element).find('.desi-head-title.dynamic-name').text();
                    var image = parseHome_2(element).find(".film-poster-img").attr("data-src");
                    var type = parseHome_2(element).find('.sc-detail .scd-item').first().text();
                    type = type.trim().toLowerCase();
                    type = type.replace("\n", "").trim();
                    console.log({ href: href, title: title, image: image, type: type });
                    if (href && title && image) {
                        spotlight_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                            type: type
                        });
                    }
                });
                return [2, {
                        films: spotlight_1
                    }];
            case 2:
                error_2 = _a.sent();
                console.error("Error fetching hot collection:", error_2);
                return [2, { collection_name: "", films: [] }];
            case 3: return [2];
        }
    });
}); };
providers["film_info"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var film_preview_info, provider, film_id, poster_url, title, type, splitFilmID, ID, filmInfo, urlDetail, htmlDetail, parseDetail_1, title, image, type, description, current_episode_sub, current_episode_dub, status_1, titleJapan_1, release_1, genres_1, studios_1, producers_1, subtitleTypes, episodes_1, urlEpsiode, dataEpisode, parseEpisode_1, errEpisode_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                film_preview_info = params.film_preview_info, provider = params.provider;
                film_id = film_preview_info.film_id, poster_url = film_preview_info.poster_url, title = film_preview_info.title, type = film_preview_info.type;
                console.log("Fetching film info for ".concat(film_id, " from ").concat(provider));
                splitFilmID = film_id.split("-");
                ID = splitFilmID[splitFilmID.length - 1];
                filmInfo = {
                    film_id: film_id,
                    provider: provider,
                    href: film_id,
                };
                urlDetail = "".concat(providerInfo.DOMAIN).concat(film_id);
                return [4, requestGet(urlDetail, providerInfo.HeaderDefault, "text")];
            case 1:
                htmlDetail = _a.sent();
                parseDetail_1 = cheerio.load(htmlDetail);
                title = parseDetail_1(".anisc-detail .film-name").text();
                title = cleanText(title);
                image = parseDetail_1(".film-poster img").attr("src");
                type = parseDetail_1(".film-stats .tick span.item").eq(0).text() || "";
                description = parseDetail_1(".film-description .text").text() || "";
                description = cleanText(description);
                current_episode_sub = parseDetail_1(".film-stats .tick-item.tick-sub").text() || 0;
                current_episode_dub = parseDetail_1(".film-stats .tick-item.tick-dub").text() || 0;
                status_1 = "";
                titleJapan_1 = "";
                release_1 = "";
                genres_1 = [];
                studios_1 = [];
                producers_1 = [];
                subtitleTypes = [];
                if (current_episode_sub > 0) {
                    subtitleTypes.push("sub");
                }
                if (current_episode_dub > 0) {
                    subtitleTypes.push("dub");
                }
                parseDetail_1(".anisc-info .item").each(function (index, element) {
                    var text = parseDetail_1(element).find(".item-head").text();
                    if (text.toLowerCase().includes("status")) {
                        status_1 = parseDetail_1(element).find("span.name").text();
                    }
                    if (text.toLowerCase().includes("japanese")) {
                        titleJapan_1 = parseDetail_1(element).find("span.name").text();
                        titleJapan_1 = cleanText(titleJapan_1);
                    }
                    if (text.toLowerCase().includes("premiered")) {
                        release_1 = parseDetail_1(element).find("span.name").text();
                        release_1 = cleanText(release_1);
                    }
                    if (text.toLowerCase().includes("genre")) {
                        parseDetail_1(element).find("a").each(function (index, element) {
                            var genre = parseDetail_1(element).text();
                            if (genre) {
                                genre = cleanText(genre);
                                genres_1.push({
                                    name: genre
                                });
                            }
                        });
                    }
                    if (text.toLowerCase().includes("studio")) {
                        parseDetail_1(element).find("a").each(function (index, element) {
                            var studio = parseDetail_1(element).text();
                            if (studio) {
                                studio = cleanText(studio);
                                studios_1.push({
                                    name: studio
                                });
                            }
                        });
                    }
                    if (text.toLowerCase().includes("producer")) {
                        parseDetail_1(element).find("a").each(function (index, element) {
                            var producer = parseDetail_1(element).text();
                            if (producer) {
                                producer = cleanText(producer);
                                producers_1.push({
                                    name: producer
                                });
                            }
                        });
                    }
                });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                episodes_1 = [];
                urlEpsiode = "".concat(providerInfo.DOMAIN, "/ajax/v2/episode/list/").concat(ID);
                return [4, requestGet(urlEpsiode, providerInfo.HeaderDefault, "json")];
            case 3:
                dataEpisode = _a.sent();
                if (dataEpisode.status) {
                    parseEpisode_1 = cheerio.load(dataEpisode.html);
                    parseEpisode_1(".ss-list .ssl-item").each(function (index, element) {
                        var numberEpisode = parseEpisode_1(element).attr("data-number");
                        var href = parseEpisode_1(element).attr("href");
                        var episodeName = parseEpisode_1(element).find(".ep-name").text();
                        episodeName = cleanText(episodeName);
                        var episodeID = parseEpisode_1(element).attr("data-id");
                        if (href && episodeName && episodeID) {
                            episodes_1.push({
                                episode_id: episodeID,
                                episode_number: Number(numberEpisode),
                                title: episodeName,
                                href: href
                            });
                        }
                    });
                }
                if (episodes_1.length > 0) {
                    filmInfo["episodes"] = episodes_1;
                }
                return [3, 5];
            case 4:
                errEpisode_1 = _a.sent();
                console.error("Error fetching episode info:", errEpisode_1);
                return [3, 5];
            case 5:
                filmInfo["title"] = title;
                filmInfo["title_japan"] = titleJapan_1;
                filmInfo["poster_url"] = image;
                filmInfo["type"] = type;
                filmInfo["status"] = status_1;
                filmInfo["current_episode_sub"] = current_episode_sub;
                filmInfo["current_episode_dub"] = current_episode_dub;
                filmInfo["subtitle_type"] = subtitleTypes;
                filmInfo["description"] = description;
                filmInfo["release"] = release_1;
                filmInfo["genre"] = genres_1;
                filmInfo["studio"] = studios_1;
                filmInfo["producer"] = producers_1;
                return [2, filmInfo];
            case 6:
                error_3 = _a.sent();
                console.error("Error fetching film info:", error_3);
                return [2, null];
            case 7: return [2];
        }
    });
}); };
providers["get_link"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var film_info, episode, extraData, callback_direct, callback_subtitle, provider, episode_id, episode_number, title, href, urlGetServer, dataServer, parseServer_1, servers_2, _i, servers_1, serverItem, urlGetIframe, dataIframe, iframeUrl, encodeIframe, dataDirect, directQualities, _a, _b, item, _c, _d, item, errGetLink_1, error_4;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 9, , 10]);
                film_info = params.film_info, episode = params.episode, extraData = params.extraData, callback_direct = params.callback_direct, callback_subtitle = params.callback_subtitle, provider = params.provider;
                episode_id = episode.episode_id, episode_number = episode.episode_number, title = episode.title, href = episode.href;
                console.log("Fetching link for ".concat(episode_id, " from ").concat(provider));
                urlGetServer = "".concat(providerInfo.DOMAIN, "/ajax/v2/episode/servers?episodeId=").concat(episode_id);
                return [4, requestGet(urlGetServer, providerInfo.HeaderDefault, "json")];
            case 1:
                dataServer = _e.sent();
                console.log({ dataServer: dataServer, urlGetServer: urlGetServer });
                parseServer_1 = cheerio.load(dataServer.html);
                servers_2 = [];
                parseServer_1(".servers-sub .item.server-item").each(function (index, element) {
                    var id = parseServer_1(element).attr("data-id");
                    if (id) {
                        servers_2.push({
                            type: "SUB",
                            id: id,
                        });
                    }
                });
                parseServer_1(".servers-dub .item.server-item").each(function (index, element) {
                    var id = parseServer_1(element).attr("data-id");
                    if (id) {
                        servers_2.push({
                            type: "DUB",
                            id: id,
                        });
                    }
                });
                console.log({ servers: servers_2 }, "SERVER");
                _i = 0, servers_1 = servers_2;
                _e.label = 2;
            case 2:
                if (!(_i < servers_1.length)) return [3, 8];
                serverItem = servers_1[_i];
                _e.label = 3;
            case 3:
                _e.trys.push([3, 6, , 7]);
                urlGetIframe = "".concat(providerInfo.DOMAIN, "/ajax/v2/episode/sources?id=").concat(serverItem.id);
                return [4, requestGet(urlGetIframe, providerInfo.HeaderDefault, "json")];
            case 4:
                dataIframe = _e.sent();
                console.log({ dataIframe: dataIframe, urlGetIframe: urlGetIframe });
                iframeUrl = dataIframe.link;
                if (!iframeUrl) {
                    return [3, 7];
                }
                if (iframeUrl.indexOf("megacloud") == -1) {
                    return [3, 7];
                }
                encodeIframe = base64Encode(iframeUrl);
                console.log({ encodeIframe: encodeIframe }, "ENCODE IFRAME");
                return [4, requestGet("https://aquariumtv.app/mega?url_embed=".concat(encodeIframe), {}, "json")];
            case 5:
                dataDirect = _e.sent();
                directQualities = [];
                console.log({ dataDirect: dataDirect }, "DATA DIRECT");
                for (_a = 0, _b = (dataDirect.tracks || []); _a < _b.length; _a++) {
                    item = _b[_a];
                    if (item.file) {
                        callback_subtitle({
                            provider: provider,
                            file: item.file,
                            type: checkSubtitleType(item.file),
                            language: item.label,
                        });
                    }
                }
                for (_c = 0, _d = (dataDirect.sources || []); _c < _d.length; _c++) {
                    item = _d[_c];
                    if (item.url) {
                        directQualities.push({
                            file: item.url,
                            quality: 1080
                        });
                    }
                }
                if (directQualities.length > 0) {
                    callback_direct({
                        provider: provider,
                        direct_urls: directQualities,
                    });
                }
                return [3, 7];
            case 6:
                errGetLink_1 = _e.sent();
                console.error("Error fetching link:", errGetLink_1);
                return [3, 7];
            case 7:
                _i++;
                return [3, 2];
            case 8: return [2, true];
            case 9:
                error_4 = _e.sent();
                console.error("Error fetching link:", error_4);
                return [2, null];
            case 10: return [2];
        }
    });
}); };
providers["search"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var keyword, options, provider, searchResults_1, queryString, urlFilter, responseFilter, parseFilter_1, urlSearch, responseSearch, parseSearch_1, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                keyword = params.keyword, options = params.options, provider = params.provider;
                console.log("Searching for \"".concat(keyword, "\" in ").concat(provider));
                console.log({ options: options });
                searchResults_1 = [];
                if (!(options.type === "filter")) return [3, 2];
                queryString = buildQueryString(__assign(__assign({}, (options.query || {})), { page: options.page || 1 }));
                console.log({ queryString: queryString });
                urlFilter = "".concat(providerInfo.DOMAIN, "/filter?").concat(queryString);
                return [4, requestGet(urlFilter, providerInfo.HeaderDefault, "text")];
            case 1:
                responseFilter = _a.sent();
                parseFilter_1 = cheerio.load(responseFilter);
                parseFilter_1(".film_list-wrap .flw-item").each(function (index, element) {
                    var href = parseFilter_1(element).find(".film-poster .film-poster-ahref").attr("href");
                    var title = parseFilter_1(element).find(".film-name a.dynamic-name").text();
                    title = cleanText(title);
                    var image = parseFilter_1(element).find(".film-poster img").attr("data-src");
                    var type = parseFilter_1(element).find(".film-detail .fd-infor .fdi-item").eq(0).text() || "";
                    var current_episode_dub = parseFilter_1(element).find(".film-poster .tick-sub").text() || 0;
                    var current_episode_sub = parseFilter_1(element).find(".film-poster .tick-dub").text() || 0;
                    if (href && title && image) {
                        searchResults_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                            type: type,
                            current_episode_sub: Number(current_episode_sub),
                            current_episode_dub: Number(current_episode_dub),
                        });
                    }
                });
                return [3, 4];
            case 2:
                urlSearch = "".concat(providerInfo.DOMAIN, "/ajax/search/suggest?keyword=").concat(slugify(keyword));
                return [4, requestGet(urlSearch, providerInfo.HeaderDefault, "json")];
            case 3:
                responseSearch = _a.sent();
                parseSearch_1 = cheerio.load(responseSearch.html);
                parseSearch_1(".nav-item").each(function (index, element) {
                    var href = parseSearch_1(element).attr("href");
                    var title = parseSearch_1(element).find(".film-name").text();
                    title = cleanText(title);
                    var image = parseSearch_1(element).find(".film-poster img").attr("data-src");
                    if (href && title && image) {
                        searchResults_1.push({
                            film_id: href,
                            poster_url: image,
                            title: title,
                        });
                    }
                });
                _a.label = 4;
            case 4: return [2, searchResults_1];
            case 5:
                error_5 = _a.sent();
                console.error("Error searching:", error_5);
                return [2, []];
            case 6: return [2];
        }
    });
}); };
providers["search_config"] = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, {
                filter: {
                    type: {
                        multi_select: false,
                        options: [
                            {
                                name: "All",
                                value: "all"
                            },
                            {
                                name: "Movie",
                                value: "movie"
                            },
                            {
                                name: "TV",
                                value: "tv"
                            },
                            {
                                name: "OVA",
                                value: "ova"
                            },
                            {
                                name: "ONA",
                                value: "ona"
                            },
                            {
                                name: "Special",
                                value: "special"
                            },
                            {
                                name: "Music",
                                value: "music"
                            }
                        ]
                    },
                    status: {
                        multi_select: false,
                        options: [
                            {
                                name: "Finished Airing",
                                value: 1,
                            },
                            {
                                name: "Currently Airing",
                                value: 2
                            },
                            {
                                name: "Not yet aired",
                                value: 3
                            }
                        ]
                    },
                    rated: {
                        multi_select: false,
                        options: [
                            {
                                name: "G",
                                value: "g"
                            },
                            {
                                name: "PG",
                                value: "pg"
                            },
                            {
                                name: "PG-13",
                                value: "pg-13"
                            },
                            {
                                name: "R",
                                value: "r"
                            },
                        ]
                    }
                },
                search: {},
            }];
    });
}); };
