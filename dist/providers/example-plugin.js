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
if (typeof providers === 'undefined') {
    var providers = {};
}
providers["collections"] = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (page) {
        if (page === void 0) { page = 1; }
        return __generator(this, function (_a) {
            try {
                console.log("Fetching collections for page ".concat(page));
                return [2, [
                        {
                            collection_name: "Anime Mới Cập Nhật",
                            provider: "example-plugin",
                            films: [
                                {
                                    film_id: "anime001",
                                    poster_url: "https://example.com/poster1.jpg",
                                    title: "One Piece",
                                    type: "TV",
                                    status: "Ongoing",
                                    current_episode: 1080
                                },
                                {
                                    film_id: "anime002",
                                    poster_url: "https://example.com/poster2.jpg",
                                    title: "Naruto Shippuden",
                                    type: "TV",
                                    status: "Completed",
                                    current_episode: 500
                                },
                                {
                                    film_id: "anime003",
                                    poster_url: "https://example.com/poster3.jpg",
                                    title: "Bleach",
                                    type: "TV",
                                    status: "Ongoing",
                                    current_episode: 366
                                }
                            ]
                        },
                        {
                            collection_name: "Anime Phổ Biến",
                            provider: "example-plugin",
                            films: [
                                {
                                    film_id: "anime004",
                                    poster_url: "https://example.com/poster4.jpg",
                                    title: "Attack on Titan",
                                    type: "TV",
                                    status: "Completed",
                                    current_episode: 75
                                },
                                {
                                    film_id: "anime005",
                                    poster_url: "https://example.com/poster5.jpg",
                                    title: "Demon Slayer",
                                    type: "TV",
                                    status: "Ongoing",
                                    current_episode: 44
                                }
                            ]
                        }
                    ]];
            }
            catch (error) {
                console.error("Error fetching collections:", error);
                return [2, []];
            }
            return [2];
        });
    });
};
providers["hot_collection"] = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2, {
                    collection_name: "Anime Hot Nhất",
                    provider: "example-plugin",
                    films: [
                        {
                            film_id: "anime005",
                            poster_url: "https://example.com/poster5.jpg",
                            title: "Demon Slayer",
                            type: "TV",
                            status: "Ongoing",
                            current_episode: 44
                        },
                        {
                            film_id: "anime006",
                            poster_url: "https://example.com/poster6.jpg",
                            title: "Jujutsu Kaisen",
                            type: "TV",
                            status: "Ongoing",
                            current_episode: 24
                        }
                    ]
                }];
        }
        catch (error) {
            console.error("Error fetching hot collection:", error);
            return [2, { collection_name: "", films: [] }];
        }
        return [2];
    });
}); };
providers["film_info"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var film_id, provider;
    return __generator(this, function (_a) {
        try {
            film_id = params.film_id, provider = params.provider;
            console.log("Fetching film info for ".concat(film_id, " from ").concat(provider));
            if (film_id === "anime001") {
                return [2, {
                        film_id: "anime001",
                        provider: "example-plugin",
                        title: "One Piece",
                        title_japan: "ワンピース",
                        href: "https://example.com/anime/one-piece",
                        poster_url: "https://example.com/poster1.jpg",
                        type: "TV",
                        status: "Ongoing",
                        current_episode: 1080,
                        score: 9.5,
                        description: "Gol D. Roger, the King of the Pirates, attained everything this world has to offer...",
                        year: 1999,
                        country: "Japan",
                        genre: [
                            { name: "Action" },
                            { name: "Adventure" },
                            { name: "Comedy" }
                        ],
                        actor: [
                            { name: "Tanaka Mayumi" },
                            { name: "Okamura Akemi" }
                        ],
                        seasons: [
                            {
                                season_id: "one-piece-season-1",
                                season_number: 1,
                                title: "East Blue Saga",
                                href: "https://example.com/anime/one-piece/season/1",
                                episodes: [
                                    {
                                        episode_id: "ep001",
                                        episode_number: 1,
                                        title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
                                        href: "https://example.com/anime/one-piece/ep1"
                                    },
                                    {
                                        episode_id: "ep002",
                                        episode_number: 2,
                                        title: "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!",
                                        href: "https://example.com/anime/one-piece/ep2"
                                    }
                                ]
                            }
                        ]
                    }];
            }
            else {
                return [2, {
                        film_id: film_id,
                        provider: "example-plugin",
                        title: "Sample Anime",
                        href: "https://example.com/anime/sample",
                        poster_url: "https://example.com/poster.jpg",
                        type: "TV",
                        status: "Ongoing",
                        seasons: [
                            {
                                season_id: "sample-season-1",
                                season_number: 1,
                                title: "Season 1",
                                href: "https://example.com/anime/sample/season/1"
                            }
                        ]
                    }];
            }
        }
        catch (error) {
            console.error("Error fetching film info:", error);
            return [2, null];
        }
        return [2];
    });
}); };
providers["get_episode_info"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var season_id, provider;
    return __generator(this, function (_a) {
        try {
            season_id = params.season_id, provider = params.provider;
            console.log("Fetching episode info for ".concat(season_id, " from ").concat(provider));
            return [2, {
                    provider: "example-plugin",
                    episodes: [
                        {
                            episode_id: "ep001",
                            episode_number: 1,
                            title: "Episode 1",
                            href: "https://example.com/anime/sample/ep1"
                        },
                        {
                            episode_id: "ep002",
                            episode_number: 2,
                            title: "Episode 2",
                            href: "https://example.com/anime/sample/ep2"
                        },
                        {
                            episode_id: "ep003",
                            episode_number: 3,
                            title: "Episode 3",
                            href: "https://example.com/anime/sample/ep3"
                        }
                    ]
                }];
        }
        catch (error) {
            console.error("Error fetching episode info:", error);
            return [2, { provider: "example-plugin", episodes: [] }];
        }
        return [2];
    });
}); };
providers["get_link"] = function (film_info, extraData, callback_direct, callback_subtitle) { return __awaiter(_this, void 0, void 0, function () {
    var provider, episode_id, href, extra_data, callback_direct_1, callback_subtitle_1, directLink, subtitleLink;
    return __generator(this, function (_a) {
        try {
            provider = film_info.provider, episode_id = film_info.episode_id, href = film_info.href, extra_data = film_info.extra_data, callback_direct_1 = film_info.callback_direct, callback_subtitle_1 = film_info.callback_subtitle;
            console.log("Fetching link for ".concat(episode_id, " from ").concat(provider));
            directLink = {
                provider: "example-plugin",
                file: "https://example.com/videos/sample.mp4",
                quality: 720
            };
            subtitleLink = {
                provider: "example-plugin",
                language: "vi",
                file: "https://example.com/subtitles/sample.vtt",
                type: "stream"
            };
            if (typeof callback_direct_1 === 'function') {
                callback_direct_1(directLink);
            }
            if (typeof callback_subtitle_1 === 'function') {
                callback_subtitle_1(subtitleLink);
            }
            return [2, directLink];
        }
        catch (error) {
            console.error("Error fetching link:", error);
            return [2, null];
        }
        return [2];
    });
}); };
providers["search"] = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var provider, keyword, searchParams;
    return __generator(this, function (_a) {
        try {
            provider = params.provider, keyword = params.keyword, searchParams = params.params;
            console.log("Searching for \"".concat(keyword, "\" in ").concat(provider));
            return [2, [
                    {
                        provider: "example-plugin",
                        title: "Search result 1 for \"".concat(keyword, "\""),
                        href: "https://example.com/anime/result1",
                        poster_url: "https://example.com/poster1.jpg",
                        type: "TV",
                        status: "Ongoing"
                    },
                    {
                        provider: "example-plugin",
                        title: "Search result 2 for \"".concat(keyword, "\""),
                        href: "https://example.com/anime/result2",
                        poster_url: "https://example.com/poster2.jpg",
                        type: "Movie",
                        status: "Completed"
                    }
                ]];
        }
        catch (error) {
            console.error("Error searching:", error);
            return [2, []];
        }
        return [2];
    });
}); };
