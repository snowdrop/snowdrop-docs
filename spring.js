(function(System, SystemJS) {
    "bundle";
    System.registerDynamic("feature/search/SearchController.js", ["jquery"], !0, function(a, b, c) {
        function d(a, b) {
            this.root = a,
                this._input = f("input", a).get(0),
                this._showHideClass = b
        }
        function e() {}
        var f = (this || self,
            a("jquery"));
        c.exports = d,
            d.prototype.hide = function() {
                this._hide()
            }
            ,
            d.prototype.show = function(a) {
                this._hide();
                var b = this._showHideClass;
                a && (b += " " + a),
                    this._hide = function() {
                        f(this.root).removeClass(b),
                            this._input.blur(),
                            this._hide = e
                    }
                    ,
                    f(this.root).addClass(b),
                    this._input.focus()
            }
            ,
            d.prototype._hide = e
    }),
        System.registerDynamic("feature/search/main.js", ["./SearchController", "jquery"], !0, function(a, b, c) {
            function d(a, b) {
                var c;
                return f(function() {
                    function d(a) {
                        c.show(a),
                            f(h).addClass(l)
                    }
                    function g() {
                        c.hide(),
                            f(h).removeClass(l)
                    }
                    return c = new e(b,m),
                        f(i).on("click", function() {
                            d()
                        }),
                        f(j).on("click", g),
                    a && d(k),
                        c
                }),
                    {
                        destroy: function() {}
                    }
            }
            var e = (this || self,
                a("./SearchController"))
                , f = a("jquery")
                , g = ".js-search-dropdown"
                , h = ".nav-search"
                , i = ".js-search-input-open"
                , j = ".body--container, .js-search-input-close, .homepage--body"
                , k = "no-animation"
                , l = "js-highlight"
                , m = "js-show";
            c.exports = function() {
                return d("/search" === window.location.pathname, f(g)[0])
            }
        }),
        System.registerDynamic("feature/searchFacets/filterForm.js", [], !0, function(a, b, c) {
            var d = (this || self,
                Function.prototype.call.bind(Array.prototype.forEach));
            c.exports = function(a) {
                d(a.target.elements, function(a) {
                    "hidden" == a.type && "_filters" == a.name && (a.disabled = !0)
                })
            }
        }),
        System.registerDynamic("feature/searchFacets/main.js", ["jquery", "./filterForm"], !0, function(a, b, c) {
            function d(a) {
                this.searchFacets = a
            }
            function e() {
                i(".facet-section--header").toggleClass("js-close")
            }
            function f() {
                i(this).closest(".facet").find(".sub-facet--list:first").toggleClass("js-close")
            }
            function g() {
                var a = i(this)
                    , b = a.closest(".facet")
                    , c = b.parents(".facet").first()
                    , d = b.find('input[type="checkbox"]')
                    , e = d.first()
                    , f = c.find('.sub-facet--list input[type="checkbox"]:not(:checked)');
                e.prop("checked") === !1 ? (a.prop("checked", !1),
                    h(a.parents(".sub-facet--list")),
                    h(a.closest(".sub-facet--list")),
                    a.parents(".facet--wrapper").siblings(".sub-facet--list, .facet-section--header").find('input[type="checkbox"]').prop("checked", !1)) : d.prop("checked", !0),
                0 === f.length && c.find('input[type="checkbox"]').first().prop("checked", !0)
            }
            function h(a) {
                a.siblings(".facet--wrapper").find('input[type="checkbox"]').first().prop("checked", !1)
            }
            this || self;
            c.exports = function() {
                var a = new d(i(".search-facets"));
                return i(a.ready.bind(a)),
                    a
            }
            ;
            var i = a("jquery")
                , j = a("./filterForm");
            d.prototype = {
                ready: function() {
                    this.searchFacets.on("submit", j),
                        this.facetSectionToggle = i(".projects-facet .js-toggle-sub-facet-list:first"),
                        this.facetCheckboxes = i(".js-checkbox-pill"),
                        this.subFacetToggle = i(".js-toggle-sub-facet-list"),
                        i(".sub-facet--list, .facet-section--header").addClass("js-close"),
                        this.subFacetToggle.on("click", f),
                        this.facetSectionToggle.on("click", e),
                        this.facetCheckboxes.on("click", g),
                        this._destroy = function() {
                            this.searchFacets.off("submit", j),
                                this.facetCheckboxes.off("click", g),
                                this.facetSectionToggle.off("click", e),
                                this.subFacetToggle.off("click", f)
                        }
                        ,
                        i(".sub-facet--list").each(function() {
                            var a = i('input[type="checkbox"]:checked', this)
                                , b = i('input[type="checkbox"]:not(:checked)', this);
                            0 !== a.length && 0 !== b.length && i(this).removeClass("js-close")
                        }),
                    i('.projects-facet input[type="checkbox"]:checked').length && (i(".facet-section--header").removeClass("js-close"),
                        i(".projects-facet .sub-facet--list").first().removeClass("js-close")),
                        i(".facets--clear-filters").click(function() {
                            i('.facet--wrapper input[type="checkbox"]:checked').prop("checked", !1),
                                i(".sub-facet--list, .facet-section--header").addClass("js-close")
                        })
                },
                destroy: function() {
                    this._destroy()
                },
                _destroy: function() {}
            }
        }),
        System.registerDynamic("feature/filterableList/filter.js", [], !0, function(a, b, c) {
            function d(a, b) {
                return function(c) {
                    b.forEach(function(b) {
                        var d = 0;
                        e(c, function(b, c) {
                            a(b, c),
                            b && (d += 1)
                        }, b.children),
                            a(d > 0, b.node)
                    })
                }
            }
            function e(a, b, c) {
                c.forEach(function(c) {
                    b(a(c), c)
                })
            }
            this || self;
            c.exports = {
                create: d,
                partitionMatches: e
            }
        }),
        System.registerDynamic("feature/filterableList/attributeMatcher.js", [], !0, function(a, b, c) {
            this || self;
            c.exports = function(a) {
                return function(b) {
                    "string" != typeof b && (b = "");
                    var c, d;
                    return c = b.split(/\s+/).reduce(function(a, b) {
                            return a + "(?=.*" + b + ")"
                        }, "^") + ".+",
                        d = new RegExp(c,"i"),
                        function(b) {
                            return d.test(b.getAttribute(a))
                        }
                }
            }
        }),
        System.registerDynamic("feature/filterableList/filterableList.js", ["./filter", "./attributeMatcher", "jquery"], !0, function(a, b, c) {
            var d = (this || self,
                a("./filter"))
                , e = a("./attributeMatcher")
                , f = a("jquery");
            c.exports = function(a, b, c) {
                var g = d.create(a, c.map(function(a) {
                    return {
                        node: a,
                        children: f("[" + b + "]", a).get()
                    }
                }))
                    , h = e(b);
                return function(a) {
                    return g(h(a))
                }
            }
        }),
        System.registerDynamic("feature/filterableList/getUrlFilter.js", [], !0, function(a, b, c) {
            function d() {
                var a = document.location.search
                    , b = a.match(/[&?]filter=([^&]+)/);
                return b ? decodeURIComponent(b[1]) : ""
            }
            this || self;
            c.exports = d
        }),
        System.registerDynamic("feature/filterableList/main.js", ["./filterableList", "./getUrlFilter", "jquery"], !0, function(a, b, c) {
            function d() {
                function a() {
                    function a(a, b) {
                        g(b).toggleClass("filterable-non-matching", !a)
                    }
                    var c = g("[data-filterable-container]").get()
                        , i = f();
                    h = document.getElementById("doc_filter"),
                        d = e(a, "data-filterable", c),
                    i && (g(h).val(i),
                        d(i)),
                        g(h).on("keyup input", b)
                }
                function b(a) {
                    d(a.target.value)
                }
                function c() {
                    d && g(h).off("keyup input", d)
                }
                var d, h;
                return g(a),
                    {
                        destroy: c
                    }
            }
            var e = (this || self,
                a("./filterableList"))
                , f = a("./getUrlFilter")
                , g = a("jquery");
            c.exports = d
        }),
        System.registerDynamic("npm:select@1.0.6/src/select.js", [], !0, function(a, b, c) {
            function d(a) {
                var b;
                if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName)
                    a.focus(),
                        a.setSelectionRange(0, a.value.length),
                        b = a.value;
                else {
                    a.hasAttribute("contenteditable") && a.focus();
                    var c = window.getSelection()
                        , d = document.createRange();
                    d.selectNodeContents(a),
                        c.removeAllRanges(),
                        c.addRange(d),
                        b = c.toString()
                }
                return b
            }
            this || self;
            c.exports = d
        }),
        System.registerDynamic("npm:select@1.0.6.js", ["npm:select@1.0.6/src/select.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:select@1.0.6/src/select.js")
        }),
        System.registerDynamic("npm:clipboard@1.5.12/lib/clipboard-action.js", ["select"], !0, function(a, b, c) {
            "format cjs";
            this || self;
            !function(d, e) {
                if ("undefined" != typeof b)
                    e(c, a("select"));
                else {
                    var f = {
                        exports: {}
                    };
                    e(f, d.select),
                        d.clipboardAction = f.exports
                }
            }(this, function(a, b) {
                "use strict";
                function c(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                }
                function d(a, b) {
                    if (!(a instanceof b))
                        throw new TypeError("Cannot call a class as a function")
                }
                var e = c(b)
                    , f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                }
                    : function(a) {
                        return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
                    }
                    , g = function() {
                    function a(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1,
                                d.configurable = !0,
                            "value"in d && (d.writable = !0),
                                Object.defineProperty(a, d.key, d)
                        }
                    }
                    return function(b, c, d) {
                        return c && a(b.prototype, c),
                        d && a(b, d),
                            b
                    }
                }()
                    , h = function() {
                    function a(b) {
                        d(this, a),
                            this.resolveOptions(b),
                            this.initSelection()
                    }
                    return a.prototype.resolveOptions = function() {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = a.action,
                            this.emitter = a.emitter,
                            this.target = a.target,
                            this.text = a.text,
                            this.trigger = a.trigger,
                            this.selectedText = ""
                    }
                        ,
                        a.prototype.initSelection = function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                        ,
                        a.prototype.selectFake = function() {
                            var a = this
                                , b = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                                this.fakeHandlerCallback = function() {
                                    return a.removeFake()
                                }
                                ,
                                this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0,
                                this.fakeElem = document.createElement("textarea"),
                                this.fakeElem.style.fontSize = "12pt",
                                this.fakeElem.style.border = "0",
                                this.fakeElem.style.padding = "0",
                                this.fakeElem.style.margin = "0",
                                this.fakeElem.style.position = "absolute",
                                this.fakeElem.style[b ? "right" : "left"] = "-9999px",
                                this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px",
                                this.fakeElem.setAttribute("readonly", ""),
                                this.fakeElem.value = this.text,
                                document.body.appendChild(this.fakeElem),
                                this.selectedText = (0,
                                    e.default)(this.fakeElem),
                                this.copyText()
                        }
                        ,
                        a.prototype.removeFake = function() {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback),
                                this.fakeHandler = null,
                                this.fakeHandlerCallback = null),
                            this.fakeElem && (document.body.removeChild(this.fakeElem),
                                this.fakeElem = null)
                        }
                        ,
                        a.prototype.selectTarget = function() {
                            this.selectedText = (0,
                                e.default)(this.target),
                                this.copyText()
                        }
                        ,
                        a.prototype.copyText = function() {
                            var a = void 0;
                            try {
                                a = document.execCommand(this.action)
                            } catch (b) {
                                a = !1
                            }
                            this.handleResult(a)
                        }
                        ,
                        a.prototype.handleResult = function(a) {
                            a ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                        ,
                        a.prototype.clearSelection = function() {
                            this.target && this.target.blur(),
                                window.getSelection().removeAllRanges()
                        }
                        ,
                        a.prototype.destroy = function() {
                            this.removeFake()
                        }
                        ,
                        g(a, [{
                            key: "action",
                            set: function() {
                                var a = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = a,
                                    "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(a) {
                                if (void 0 !== a) {
                                    if (!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || 1 !== a.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && a.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = a
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]),
                        a
                }();
                a.exports = h
            })
        }),
        System.registerDynamic("npm:tiny-emitter@1.1.0/index.js", [], !0, function(a, b, c) {
            function d() {}
            this || self;
            d.prototype = {
                on: function(a, b, c) {
                    var d = this.e || (this.e = {});
                    return (d[a] || (d[a] = [])).push({
                        fn: b,
                        ctx: c
                    }),
                        this
                },
                once: function(a, b, c) {
                    function d() {
                        e.off(a, d),
                            b.apply(c, arguments)
                    }
                    var e = this;
                    return d._ = b,
                        this.on(a, d, c)
                },
                emit: function(a) {
                    var b = [].slice.call(arguments, 1)
                        , c = ((this.e || (this.e = {}))[a] || []).slice()
                        , d = 0
                        , e = c.length;
                    for (d; d < e; d++)
                        c[d].fn.apply(c[d].ctx, b);
                    return this
                },
                off: function(a, b) {
                    var c = this.e || (this.e = {})
                        , d = c[a]
                        , e = [];
                    if (d && b)
                        for (var f = 0, g = d.length; f < g; f++)
                            d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                    return e.length ? c[a] = e : delete c[a],
                        this
                }
            },
                c.exports = d
        }),
        System.registerDynamic("npm:tiny-emitter@1.1.0.js", ["npm:tiny-emitter@1.1.0/index.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:tiny-emitter@1.1.0/index.js")
        }),
        System.registerDynamic("npm:good-listener@1.1.7/src/is.js", [], !0, function(a, b, c) {
            this || self;
            b.node = function(a) {
                return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType
            }
                ,
                b.nodeList = function(a) {
                    var c = Object.prototype.toString.call(a);
                    return void 0 !== a && ("[object NodeList]" === c || "[object HTMLCollection]" === c) && "length"in a && (0 === a.length || b.node(a[0]))
                }
                ,
                b.string = function(a) {
                    return "string" == typeof a || a instanceof String
                }
                ,
                b.fn = function(a) {
                    var b = Object.prototype.toString.call(a);
                    return "[object Function]" === b
                }
        }),
        System.registerDynamic("npm:matches-selector@0.0.1/index.js", [], !0, function(a, b, c) {
            function d(a, b) {
                if (f)
                    return f.call(a, b);
                for (var c = a.parentNode.querySelectorAll(b), d = 0; d < c.length; ++d)
                    if (c[d] == a)
                        return !0;
                return !1
            }
            var e = (this || self,
                Element.prototype)
                , f = e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
            c.exports = d
        }),
        System.registerDynamic("npm:matches-selector@0.0.1.js", ["npm:matches-selector@0.0.1/index"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:matches-selector@0.0.1/index")
        }),
        System.registerDynamic("npm:closest@0.0.1/index.js", ["matches-selector"], !0, function(a, b, c) {
            var d = (this || self,
                a("matches-selector"));
            c.exports = function(a, b, c) {
                for (var e = c ? a : a.parentNode; e && e !== document; ) {
                    if (d(e, b))
                        return e;
                    e = e.parentNode
                }
            }
        }),
        System.registerDynamic("npm:closest@0.0.1.js", ["npm:closest@0.0.1/index"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:closest@0.0.1/index")
        }),
        System.registerDynamic("npm:delegate@3.0.1/src/delegate.js", ["closest"], !0, function(a, b, c) {
            function d(a, b, c, d, f) {
                var g = e.apply(this, arguments);
                return a.addEventListener(c, g, f),
                    {
                        destroy: function() {
                            a.removeEventListener(c, g, f)
                        }
                    }
            }
            function e(a, b, c, d) {
                return function(c) {
                    c.delegateTarget = f(c.target, b, !0),
                    c.delegateTarget && d.call(a, c)
                }
            }
            var f = (this || self,
                a("closest"));
            c.exports = d
        }),
        System.registerDynamic("npm:delegate@3.0.1.js", ["npm:delegate@3.0.1/src/delegate.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:delegate@3.0.1/src/delegate.js")
        }),
        System.registerDynamic("npm:good-listener@1.1.7/src/listen.js", ["./is", "delegate"], !0, function(a, b, c) {
            function d(a, b, c) {
                if (!a && !b && !c)
                    throw new Error("Missing required arguments");
                if (!h.string(b))
                    throw new TypeError("Second argument must be a String");
                if (!h.fn(c))
                    throw new TypeError("Third argument must be a Function");
                if (h.node(a))
                    return e(a, b, c);
                if (h.nodeList(a))
                    return f(a, b, c);
                if (h.string(a))
                    return g(a, b, c);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function e(a, b, c) {
                return a.addEventListener(b, c),
                    {
                        destroy: function() {
                            a.removeEventListener(b, c)
                        }
                    }
            }
            function f(a, b, c) {
                return Array.prototype.forEach.call(a, function(a) {
                    a.addEventListener(b, c)
                }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(a, function(a) {
                                a.removeEventListener(b, c)
                            })
                        }
                    }
            }
            function g(a, b, c) {
                return i(document.body, a, b, c)
            }
            var h = (this || self,
                a("./is"))
                , i = a("delegate");
            c.exports = d
        }),
        System.registerDynamic("npm:good-listener@1.1.7.js", ["npm:good-listener@1.1.7/src/listen.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:good-listener@1.1.7/src/listen.js")
        }),
        System.registerDynamic("npm:clipboard@1.5.12/lib/clipboard.js", ["./clipboard-action", "tiny-emitter", "good-listener"], !0, function(a, b, c) {
            "format cjs";
            this || self;
            !function(d, e) {
                if ("undefined" != typeof b)
                    e(c, a("./clipboard-action"), a("tiny-emitter"), a("good-listener"));
                else {
                    var f = {
                        exports: {}
                    };
                    e(f, d.clipboardAction, d.tinyEmitter, d.goodListener),
                        d.clipboard = f.exports
                }
            }(this, function(a, b, c, d) {
                "use strict";
                function e(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                }
                function f(a, b) {
                    if (!(a instanceof b))
                        throw new TypeError("Cannot call a class as a function")
                }
                function g(a, b) {
                    if (!a)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !b || "object" != typeof b && "function" != typeof b ? a : b
                }
                function h(a, b) {
                    if ("function" != typeof b && null !== b)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                    a.prototype = Object.create(b && b.prototype, {
                        constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
                }
                function i(a, b) {
                    var c = "data-clipboard-" + a;
                    if (b.hasAttribute(c))
                        return b.getAttribute(c)
                }
                var j = e(b)
                    , k = e(c)
                    , l = e(d)
                    , m = function(a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this));
                        return e.resolveOptions(d),
                            e.listenClick(c),
                            e
                    }
                    return h(b, a),
                        b.prototype.resolveOptions = function() {
                            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof a.action ? a.action : this.defaultAction,
                                this.target = "function" == typeof a.target ? a.target : this.defaultTarget,
                                this.text = "function" == typeof a.text ? a.text : this.defaultText
                        }
                        ,
                        b.prototype.listenClick = function(a) {
                            var b = this;
                            this.listener = (0,
                                l.default)(a, "click", function(a) {
                                return b.onClick(a)
                            })
                        }
                        ,
                        b.prototype.onClick = function(a) {
                            var b = a.delegateTarget || a.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                                this.clipboardAction = new j.default({
                                    action: this.action(b),
                                    target: this.target(b),
                                    text: this.text(b),
                                    trigger: b,
                                    emitter: this
                                })
                        }
                        ,
                        b.prototype.defaultAction = function(a) {
                            return i("action", a)
                        }
                        ,
                        b.prototype.defaultTarget = function(a) {
                            var b = i("target", a);
                            if (b)
                                return document.querySelector(b)
                        }
                        ,
                        b.prototype.defaultText = function(a) {
                            return i("text", a)
                        }
                        ,
                        b.prototype.destroy = function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(),
                                this.clipboardAction = null)
                        }
                        ,
                        b
                }(k.default);
                a.exports = m
            })
        }),
        System.registerDynamic("npm:clipboard@1.5.12.js", ["npm:clipboard@1.5.12/lib/clipboard.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:clipboard@1.5.12/lib/clipboard.js")
        }),
        System.registerDynamic("github:twbs/bootstrap@2.3.2/js/bootstrap-tooltip.js", [], !1, function(a, b, c) {
            var d = System.get("@@global-helpers").prepareGlobal(c.id, null, null);
            return function(a) {
                !function(a) {
                    "use strict";
                    var b = function(a, b) {
                        this.init("tooltip", a, b)
                    };
                    b.prototype = {
                        constructor: b,
                        init: function(b, c, d) {
                            var e, f, g, h, i;
                            for (this.type = b,
                                     this.$element = a(c),
                                     this.options = this.getOptions(d),
                                     this.enabled = !0,
                                     g = this.options.trigger.split(" "),
                                     i = g.length; i--; )
                                h = g[i],
                                    "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus",
                                            f = "hover" == h ? "mouseleave" : "blur",
                                            this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                                            this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
                            this.options.selector ? this._options = a.extend({}, this.options, {
                                trigger: "manual",
                                selector: ""
                            }) : this.fixTitle()
                        },
                        getOptions: function(b) {
                            return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b),
                            b.delay && "number" == typeof b.delay && (b.delay = {
                                show: b.delay,
                                hide: b.delay
                            }),
                                b
                        },
                        enter: function(b) {
                            var c, d = a.fn[this.type].defaults, e = {};
                            return this._options && a.each(this._options, function(a, b) {
                                d[a] != b && (e[a] = b)
                            }, this),
                                c = a(b.currentTarget)[this.type](e).data(this.type),
                                c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout),
                                    c.hoverState = "in",
                                    void (this.timeout = setTimeout(function() {
                                        "in" == c.hoverState && c.show()
                                    }, c.options.delay.show))) : c.show()
                        },
                        leave: function(b) {
                            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                            return this.timeout && clearTimeout(this.timeout),
                                c.options.delay && c.options.delay.hide ? (c.hoverState = "out",
                                    void (this.timeout = setTimeout(function() {
                                        "out" == c.hoverState && c.hide()
                                    }, c.options.delay.hide))) : c.hide()
                        },
                        show: function() {
                            var b, c, d, e, f, g, h = a.Event("show");
                            if (this.hasContent() && this.enabled) {
                                if (this.$element.trigger(h),
                                        h.isDefaultPrevented())
                                    return;
                                switch (b = this.tip(),
                                    this.setContent(),
                                this.options.animation && b.addClass("fade"),
                                    f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement,
                                    b.detach().css({
                                        top: 0,
                                        left: 0,
                                        display: "block"
                                    }),
                                    this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element),
                                    c = this.getPosition(),
                                    d = b[0].offsetWidth,
                                    e = b[0].offsetHeight,
                                    f) {
                                    case "bottom":
                                        g = {
                                            top: c.top + c.height,
                                            left: c.left + c.width / 2 - d / 2
                                        };
                                        break;
                                    case "top":
                                        g = {
                                            top: c.top - e,
                                            left: c.left + c.width / 2 - d / 2
                                        };
                                        break;
                                    case "left":
                                        g = {
                                            top: c.top + c.height / 2 - e / 2,
                                            left: c.left - d
                                        };
                                        break;
                                    case "right":
                                        g = {
                                            top: c.top + c.height / 2 - e / 2,
                                            left: c.left + c.width
                                        }
                                }
                                this.applyPlacement(g, f),
                                    this.$element.trigger("shown")
                            }
                        },
                        applyPlacement: function(a, b) {
                            var c, d, e, f, g = this.tip(), h = g[0].offsetWidth, i = g[0].offsetHeight;
                            g.offset(a).addClass(b).addClass("in"),
                                c = g[0].offsetWidth,
                                d = g[0].offsetHeight,
                            "top" == b && d != i && (a.top = a.top + i - d,
                                f = !0),
                                "bottom" == b || "top" == b ? (e = 0,
                                a.left < 0 && (e = a.left * -2,
                                    a.left = 0,
                                    g.offset(a),
                                    c = g[0].offsetWidth,
                                    d = g[0].offsetHeight),
                                    this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"),
                            f && g.offset(a)
                        },
                        replaceArrow: function(a, b, c) {
                            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
                        },
                        setContent: function() {
                            var a = this.tip()
                                , b = this.getTitle();
                            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
                                a.removeClass("fade in top bottom left right")
                        },
                        hide: function() {
                            function b() {
                                var b = setTimeout(function() {
                                    c.off(a.support.transition.end).detach()
                                }, 500);
                                c.one(a.support.transition.end, function() {
                                    clearTimeout(b),
                                        c.detach()
                                })
                            }
                            var c = this.tip()
                                , d = a.Event("hide");
                            if (this.$element.trigger(d),
                                    !d.isDefaultPrevented())
                                return c.removeClass("in"),
                                    a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(),
                                    this.$element.trigger("hidden"),
                                    this
                        },
                        fixTitle: function() {
                            var a = this.$element;
                            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
                        },
                        hasContent: function() {
                            return this.getTitle()
                        },
                        getPosition: function() {
                            var b = this.$element[0];
                            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                                width: b.offsetWidth,
                                height: b.offsetHeight
                            }, this.$element.offset())
                        },
                        getTitle: function() {
                            var a, b = this.$element, c = this.options;
                            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
                        },
                        tip: function() {
                            return this.$tip = this.$tip || a(this.options.template)
                        },
                        arrow: function() {
                            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                        },
                        validate: function() {
                            this.$element[0].parentNode || (this.hide(),
                                this.$element = null,
                                this.options = null)
                        },
                        enable: function() {
                            this.enabled = !0
                        },
                        disable: function() {
                            this.enabled = !1
                        },
                        toggleEnabled: function() {
                            this.enabled = !this.enabled
                        },
                        toggle: function(b) {
                            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
                            c.tip().hasClass("in") ? c.hide() : c.show()
                        },
                        destroy: function() {
                            this.hide().$element.off("." + this.type).removeData(this.type)
                        }
                    };
                    var c = a.fn.tooltip;
                    a.fn.tooltip = function(c) {
                        return this.each(function() {
                            var d = a(this)
                                , e = d.data("tooltip")
                                , f = "object" == typeof c && c;
                            e || d.data("tooltip", e = new b(this,f)),
                            "string" == typeof c && e[c]()
                        })
                    }
                        ,
                        a.fn.tooltip.Constructor = b,
                        a.fn.tooltip.defaults = {
                            animation: !0,
                            placement: "top",
                            selector: !1,
                            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            container: !1
                        },
                        a.fn.tooltip.noConflict = function() {
                            return a.fn.tooltip = c,
                                this
                        }
                }(window.jQuery)
            }(this),
                d()
        }),
        System.registerDynamic("feature/clipboardButtons/main.js", ["clipboard", "jquery", "../../platform/os", "bootstrap/js/bootstrap-tooltip"], !0, function(a, b, c) {
            function d() {
                function a() {
                    f(h).each(function(a) {
                        c(f(this), a)
                    });
                    var a = function() {
                        return "iOS" == g.type() ? "Could not copy :-(" : "Mac" == g.type() ? "Press Cmd-C to Copy" : "Press Ctrl-C to Copy"
                    }
                        , d = new e(".copy-button");
                    d.on("success", function(a) {
                        a.clearSelection(),
                            b(a.trigger, "Copied!")
                    }),
                        d.on("error", function(c) {
                            b(c.trigger, a())
                        })
                }
                function b(a, b) {
                    f(a).tooltip({
                        placement: "right",
                        title: b
                    }),
                        f(a).tooltip("show"),
                        setTimeout(function() {
                            f(a).tooltip("destroy")
                        }, 1e3)
                }
                function c(a, b) {
                    var c = "code-block-" + b
                        , d = "copy-button-" + b;
                    a.attr("id", c);
                    var e = f('<button class="copy-button snippet" id="' + d + '" data-clipboard-target="#' + c + '"></button>');
                    a.before(e)
                }
                function d() {}
                return f(a),
                    {
                        destroy: d
                    }
            }
            this || self;
            c.exports = d;
            var e = a("clipboard")
                , f = a("jquery")
                , g = a("../../platform/os");
            window.jQuery = f,
                a("bootstrap/js/bootstrap-tooltip");
            var h = ".listingblock pre, .has-copy-button pre, article .highlight pre"
        }),
        System.registerDynamic("feature/codeSidebar/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                var a = {
                    ready: function() {
                        var a, b, c;
                        c = e(".github-actions"),
                            b = c.find("[data-protocol]"),
                            a = function(a) {
                                var b = "https";
                                return function(c) {
                                    var d = e(c.target).data("protocol");
                                    a(b, d),
                                        b = d
                                }
                            }(this.switchProtocol.bind(this, c)),
                            b.on("click", a),
                            this._destroy = function() {
                                b.off("click", a)
                            }
                    },
                    switchProtocol: function(a, b, c) {
                        return a.removeClass(b),
                            a.addClass(c),
                            c
                    },
                    destroy: function() {
                        return this._destroy()
                    },
                    _destroy: function() {}
                };
                return e(function() {
                    a.ready()
                }
                    .bind(a)),
                    a
            }
            var e = (this || self,
                a("jquery"));
            c.exports = d
        }),
        System.registerDynamic("feature/stsImport/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                function a() {
                    "function" == typeof sts_import && e(".gs-guide-import").show().click(function(a) {
                        a.preventDefault(),
                            sts_import("guide", a.target.href)
                    })
                }
                var b = {
                    ready: a,
                    destroy: function() {}
                };
                return e(function() {
                    b.ready()
                }
                    .bind(b)),
                    b
            }
            var e = (this || self,
                a("jquery"));
            c.exports = d
        }),
        System.registerDynamic("feature/mobileSupport/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                var a = g(".js-open-nav-drawer.js-slide-right");
                a.length && g(".viewport").height(g(window).height()).addClass("constrained")
            }
            function e() {
                g(".navigation-drawer--container").addClass("js-open"),
                    g(".mobile-nav, .body--container, .homepage--body").addClass("js-slide-right");
                var a = g(window).height();
                g(".viewport").height(a).addClass("constrained"),
                    g("#scrim").addClass("js-show js-open-mobile-nav").on("click", f)
            }
            function f() {
                g("#scrim").removeClass("js-show js-open-mobile-nav").off("click", f),
                    g(".navigation-drawer--container").removeClass("js-open"),
                    g(".mobile-nav, .body--container, .homepage--body").removeClass("js-slide-right"),
                    g(".viewport").removeClass("constrained")
            }
            var g = (this || self,
                a("jquery"))
                , h = ".js-open-nav-drawer";
            c.exports = function() {
                function a() {
                    window.addEventListener("orientationchange", d, !1),
                        g(h).on("click", e)
                }
                function b() {
                    g(h).off("click", e),
                        window.removeEventListener("orientationchange", d, !1)
                }
                return g(a),
                    {
                        destroy: b
                    }
            }
        }),
        System.registerDynamic("feature/infoPopups/main.js", ["jquery"], !0, function(a, b, c) {
            function d(a) {
                a.stopImmediatePropagation();
                var b = h(this).parents(j);
                b.hasClass(k) ? b.removeClass(k) : (g(),
                    e(),
                    b.addClass(k))
            }
            function e() {
                h(document).on("click", f)
            }
            function f() {
                h(document).off("click", f),
                    g()
            }
            function g() {
                h(l).removeClass(k)
            }
            var h = (this || self,
                a("jquery"))
                , i = ".js-item--open-dropdown"
                , j = ".js-item-dropdown--wrapper"
                , k = "js-open"
                , l = j + "." + k;
            c.exports = function() {
                function a() {
                    h(i).on("click", d)
                }
                function b() {
                    h(i).off("click", d)
                }
                return h(a),
                    {
                        destroy: b
                    }
            }
        }),
        System.registerDynamic("github:twbs/bootstrap@2.3.2/js/bootstrap-collapse.js", [], !1, function(a, b, c) {
            var d = System.get("@@global-helpers").prepareGlobal(c.id, null, null);
            return function(a) {
                !function(a) {
                    "use strict";
                    var b = function(b, c) {
                        this.$element = a(b),
                            this.options = a.extend({}, a.fn.collapse.defaults, c),
                        this.options.parent && (this.$parent = a(this.options.parent)),
                        this.options.toggle && this.toggle()
                    };
                    b.prototype = {
                        constructor: b,
                        dimension: function() {
                            var a = this.$element.hasClass("width");
                            return a ? "width" : "height"
                        },
                        show: function() {
                            var b, c, d, e;
                            if (!this.transitioning && !this.$element.hasClass("in")) {
                                if (b = this.dimension(),
                                        c = a.camelCase(["scroll", b].join("-")),
                                        d = this.$parent && this.$parent.find("> .accordion-group > .in"),
                                    d && d.length) {
                                    if (e = d.data("collapse"),
                                        e && e.transitioning)
                                        return;
                                    d.collapse("hide"),
                                    e || d.data("collapse", null)
                                }
                                this.$element[b](0),
                                    this.transition("addClass", a.Event("show"), "shown"),
                                a.support.transition && this.$element[b](this.$element[0][c])
                            }
                        },
                        hide: function() {
                            var b;
                            !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(),
                                this.reset(this.$element[b]()),
                                this.transition("removeClass", a.Event("hide"), "hidden"),
                                this.$element[b](0))
                        },
                        reset: function(a) {
                            var b = this.dimension();
                            return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth,
                                this.$element[null !== a ? "addClass" : "removeClass"]("collapse"),
                                this
                        },
                        transition: function(b, c, d) {
                            var e = this
                                , f = function() {
                                "show" == c.type && e.reset(),
                                    e.transitioning = 0,
                                    e.$element.trigger(d)
                            };
                            this.$element.trigger(c),
                            c.isDefaultPrevented() || (this.transitioning = 1,
                                this.$element[b]("in"),
                                a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
                        },
                        toggle: function() {
                            this[this.$element.hasClass("in") ? "hide" : "show"]()
                        }
                    };
                    var c = a.fn.collapse;
                    a.fn.collapse = function(c) {
                        return this.each(function() {
                            var d = a(this)
                                , e = d.data("collapse")
                                , f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
                            e || d.data("collapse", e = new b(this,f)),
                            "string" == typeof c && e[c]()
                        })
                    }
                        ,
                        a.fn.collapse.defaults = {
                            toggle: !0
                        },
                        a.fn.collapse.Constructor = b,
                        a.fn.collapse.noConflict = function() {
                            return a.fn.collapse = c,
                                this
                        }
                        ,
                        a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
                            var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e).data("collapse") ? "toggle" : d.data();
                            d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"),
                                a(e).collapse(f)
                        })
                }(window.jQuery)
            }(this),
                d()
        }),
        System.registerDynamic("platform/os.js", [], !0, function(a, b, c) {
            function d(a) {
                return 0 === arguments.length && (a = navigator),
                    a.userAgent.indexOf("iPhone") !== -1 || a.userAgent.indexOf("iPad") !== -1 ? "iOS" : a.userAgent.indexOf("Win") !== -1 ? "Windows" : a.userAgent.indexOf("Mac") !== -1 ? "Mac" : a.userAgent.indexOf("Linux") !== -1 ? "Linux" : f
            }
            function e(a) {
                return 0 === arguments.length && (a = navigator),
                    /Mac OS X 10\.[0-5]([\.\s]|$)/.test(a.userAgent) ? "32" : a.userAgent.indexOf("Mac OS X") !== -1 || a.userAgent.indexOf("WOW64") !== -1 || a.platform.indexOf("Win64") !== -1 || a.platform.indexOf("Linux x86_64") !== -1 ? "64" : g
            }
            this || self;
            b.type = d,
                b.arch = e;
            var f = "Unknown"
                , g = "32"
        }),
        System.registerDynamic("feature/platformDownloads/main.js", ["jquery", "bootstrap/js/bootstrap-collapse", "../../platform/os"], !0, function(a, b, c) {
            function d() {
                f(this).css({
                    overflow: "visible",
                    height: "auto"
                }).parent().find(".platform-dropdown--icon").removeClass("icon-chevron-down").addClass("icon-chevron-up")
            }
            function e() {
                f(this).css({
                    overflow: "hidden",
                    height: 0
                }).parent().find(".platform-dropdown--icon").removeClass("icon-chevron-up").addClass("icon-chevron-down")
            }
            var f = (this || self,
                a("jquery"));
            a("bootstrap/js/bootstrap-collapse");
            var g = a("../../platform/os");
            c.exports = function() {
                var a = {
                    shown: d,
                    hide: e
                };
                return f(function() {
                    f(".download-links li." + g.type() + g.arch()).show(),
                        f("#platform--" + g.type()).addClass("in").css("overflow", "visible").css("height", "auto").parent().find(".platform-dropdown--icon").removeClass("icon-chevron-down").addClass("icon-chevron-up"),
                        f(".collapse").removeClass("in").on(a)
                }),
                    {
                        destroy: function() {
                            f("collapse").off(a)
                        }
                    }
            }
        }),
        System.registerDynamic("feature/formWidgets/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                function a() {
                    e("form .date").datetimepicker({
                        pickSeconds: !1
                    })
                }
                function b() {}
                var c = {
                    ready: a,
                    destroy: b
                };
                return System.import("app/admin").then(function() {
                    e(function() {
                        c.ready()
                    }
                        .bind(c))
                }),
                    c
            }
            var e = (this || self,
                a("jquery"));
            c.exports = d
        }),
        function() {
            var a = System.amdDefine;
            !function() {
                var b = null;
                window.PR_SHOULD_USE_CONTINUATION = !0,
                    function() {
                        function c(a) {
                            function b(a) {
                                var b = a.charCodeAt(0);
                                if (92 !== b)
                                    return b;
                                var c = a.charAt(1);
                                return (b = l[c]) ? b : "0" <= c && c <= "7" ? parseInt(a.substring(1), 8) : "u" === c || "x" === c ? parseInt(a.substring(2), 16) : a.charCodeAt(1)
                            }
                            function c(a) {
                                return a < 32 ? (a < 16 ? "\\x0" : "\\x") + a.toString(16) : (a = String.fromCharCode(a),
                                    "\\" === a || "-" === a || "]" === a || "^" === a ? "\\" + a : a)
                            }
                            function d(a) {
                                var d = a.substring(1, a.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g)
                                    , a = []
                                    , e = "^" === d[0]
                                    , f = ["["];
                                e && f.push("^");
                                for (var e = e ? 1 : 0, g = d.length; e < g; ++e) {
                                    var h = d[e];
                                    if (/\\[bdsw]/i.test(h))
                                        f.push(h);
                                    else {
                                        var i, h = b(h);
                                        e + 2 < g && "-" === d[e + 1] ? (i = b(d[e + 2]),
                                            e += 2) : i = h,
                                            a.push([h, i]),
                                        i < 65 || h > 122 || (i < 65 || h > 90 || a.push([32 | Math.max(65, h), 32 | Math.min(i, 90)]),
                                        i < 97 || h > 122 || a.push([Math.max(97, h) & -33, Math.min(i, 122) & -33]))
                                    }
                                }
                                for (a.sort(function(a, b) {
                                    return a[0] - b[0] || b[1] - a[1]
                                }),
                                         d = [],
                                         g = [],
                                         e = 0; e < a.length; ++e)
                                    h = a[e],
                                        h[0] <= g[1] + 1 ? g[1] = Math.max(g[1], h[1]) : d.push(g = h);
                                for (e = 0; e < d.length; ++e)
                                    h = d[e],
                                        f.push(c(h[0])),
                                    h[1] > h[0] && (h[1] + 1 > h[0] && f.push("-"),
                                        f.push(c(h[1])));
                                return f.push("]"),
                                    f.join("")
                            }
                            function e(a) {
                                for (var b = a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), e = b.length, h = [], i = 0, j = 0; i < e; ++i) {
                                    var k = b[i];
                                    "(" === k ? ++j : "\\" === k.charAt(0) && (k = +k.substring(1)) && (k <= j ? h[k] = -1 : b[i] = c(k))
                                }
                                for (i = 1; i < h.length; ++i)
                                    -1 === h[i] && (h[i] = ++f);
                                for (j = i = 0; i < e; ++i)
                                    k = b[i],
                                        "(" === k ? (++j,
                                        h[j] || (b[i] = "(?:")) : "\\" === k.charAt(0) && (k = +k.substring(1)) && k <= j && (b[i] = "\\" + h[k]);
                                for (i = 0; i < e; ++i)
                                    "^" === b[i] && "^" !== b[i + 1] && (b[i] = "");
                                if (a.ignoreCase && g)
                                    for (i = 0; i < e; ++i)
                                        k = b[i],
                                            a = k.charAt(0),
                                            k.length >= 2 && "[" === a ? b[i] = d(k) : "\\" !== a && (b[i] = k.replace(/[A-Za-z]/g, function(a) {
                                                    return a = a.charCodeAt(0),
                                                    "[" + String.fromCharCode(a & -33, 32 | a) + "]"
                                                }));
                                return b.join("")
                            }
                            for (var f = 0, g = !1, h = !1, i = 0, j = a.length; i < j; ++i) {
                                var k = a[i];
                                if (k.ignoreCase)
                                    h = !0;
                                else if (/[a-z]/i.test(k.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                                    g = !0,
                                        h = !1;
                                    break
                                }
                            }
                            for (var l = {
                                b: 8,
                                t: 9,
                                n: 10,
                                v: 11,
                                f: 12,
                                r: 13
                            }, m = [], i = 0, j = a.length; i < j; ++i) {
                                if (k = a[i],
                                    k.global || k.multiline)
                                    throw Error("" + k);
                                m.push("(?:" + e(k) + ")")
                            }
                            return RegExp(m.join("|"), h ? "gi" : "g")
                        }
                        function d(a, b) {
                            function c(a) {
                                var i = a.nodeType;
                                if (1 == i) {
                                    if (!d.test(a.className)) {
                                        for (i = a.firstChild; i; i = i.nextSibling)
                                            c(i);
                                        i = a.nodeName.toLowerCase(),
                                        "br" !== i && "li" !== i || (e[h] = "\n",
                                            g[h << 1] = f++,
                                            g[h++ << 1 | 1] = a)
                                    }
                                } else
                                    3 != i && 4 != i || (i = a.nodeValue,
                                    i.length && (i = b ? i.replace(/\r\n?/g, "\n") : i.replace(/[\t\n\r ]+/g, " "),
                                        e[h] = i,
                                        g[h << 1] = f,
                                        f += i.length,
                                        g[h++ << 1 | 1] = a))
                            }
                            var d = /(?:^|\s)nocode(?:\s|$)/
                                , e = []
                                , f = 0
                                , g = []
                                , h = 0;
                            return c(a),
                                {
                                    a: e.join("").replace(/\n$/, ""),
                                    d: g
                                }
                        }
                        function e(a, b, c, d) {
                            b && (a = {
                                a: b,
                                e: a
                            },
                                c(a),
                                d.push.apply(d, a.g))
                        }
                        function f(a) {
                            for (var b = void 0, c = a.firstChild; c; c = c.nextSibling)
                                 var d = c.nodeType
                                     , b = 1 === d ? b ? a : c : 3 === d && w.test(c.nodeValue) ? a : b;
                            return b === a ? void 0 : b
                        }
                        function g(a, d) {
                            function f(a) {
                                for (var b = a.e, c = [b, "pln"], j = 0, l = a.a.match(g) || [], m = {}, n = 0, o = l.length; n < o; ++n) {
                                    var p, q = l[n], r = m[q], s = void 0;
                                    if ("string" == typeof r)
                                        p = !1;
                                    else {
                                        var t = h[q.charAt(0)];
                                        if (t)
                                            s = q.match(t[1]),
                                                r = t[0];
                                        else {
                                            for (p = 0; p < i; ++p)
                                                if (t = d[p],
                                                        s = q.match(t[1])) {
                                                    r = t[0];
                                                    break
                                                }
                                            s || (r = "pln")
                                        }
                                        !(p = r.length >= 5 && "lang-" === r.substring(0, 5)) || s && "string" == typeof s[1] || (p = !1,
                                            r = "src"),
                                        p || (m[q] = r)
                                    }
                                    if (t = j,
                                            j += q.length,
                                            p) {
                                        p = s[1];
                                        var u = q.indexOf(p)
                                            , v = u + p.length;
                                        s[2] && (v = q.length - s[2].length,
                                            u = v - p.length),
                                            r = r.substring(5),
                                            e(b + t, q.substring(0, u), f, c),
                                            e(b + t + u, p, k(r, p), c),
                                            e(b + t + v, q.substring(v), f, c)
                                    } else
                                        c.push(b + t, r)
                                }
                                a.g = c
                            }
                            var g, h = {};
                            !function() {
                                for (var e = a.concat(d), f = [], i = {}, j = 0, k = e.length; j < k; ++j) {
                                    var l = e[j]
                                        , m = l[3];
                                    if (m)
                                        for (var n = m.length; --n >= 0; )
                                            h[m.charAt(n)] = l;
                                    l = l[1],
                                        m = "" + l,
                                    i.hasOwnProperty(m) || (f.push(l),
                                        i[m] = b)
                                }
                                f.push(/[\S\s]/),
                                    g = c(f)
                            }();
                            var i = d.length;
                            return f
                        }
                        function h(a) {
                            var c = []
                                , d = [];
                            a.tripleQuotedStrings ? c.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, b, "'\""]) : a.multiLineStrings ? c.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, b, "'\"`"]) : c.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, b, "\"'"]),
                            a.verbatimStrings && d.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, b]);
                            var e = a.hashComments;
                            if (e && (a.cStyleComments ? (e > 1 ? c.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, b, "#"]) : c.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, b, "#"]),
                                    d.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, b])) : c.push(["com", /^#[^\n\r]*/, b, "#"])),
                                a.cStyleComments && (d.push(["com", /^\/\/[^\n\r]*/, b]),
                                    d.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, b])),
                                    e = a.regexLiterals) {
                                var f = (e = e > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";
                                d.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + e + "])(?:[^/\\x5B\\x5C" + e + "]|\\x5C" + f + "|\\x5B(?:[^\\x5C\\x5D" + e + "]|\\x5C" + f + ")*(?:\\x5D|$))+/") + ")")])
                            }
                            return (e = a.types) && d.push(["typ", e]),
                                e = ("" + a.keywords).replace(/^ | $/g, ""),
                            e.length && d.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), b]),
                                c.push(["pln", /^\s+/, b, " \r\n\t "]),
                                e = "^.[^\\s\\w.$@'\"`/\\\\]*",
                            a.regexLiterals && (e += "(?!s*/)"),
                                d.push(["lit", /^@[$_a-z][\w$@]*/i, b], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, b], ["pln", /^[$_a-z][\w$@]*/i, b], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, b, "0123456789"], ["pln", /^\\[\S\s]?/, b], ["pun", RegExp(e), b]),
                                g(c, d)
                        }
                        function i(a, b, c) {
                            function d(a) {
                                var b = a.nodeType;
                                if (1 != b || f.test(a.className)) {
                                    if ((3 == b || 4 == b) && c) {
                                        var i = a.nodeValue
                                            , j = i.match(g);
                                        j && (b = i.substring(0, j.index),
                                            a.nodeValue = b,
                                        (i = i.substring(j.index + j[0].length)) && a.parentNode.insertBefore(h.createTextNode(i), a.nextSibling),
                                            e(a),
                                        b || a.parentNode.removeChild(a))
                                    }
                                } else if ("br" === a.nodeName)
                                    e(a),
                                    a.parentNode && a.parentNode.removeChild(a);
                                else
                                    for (a = a.firstChild; a; a = a.nextSibling)
                                        d(a)
                            }
                            function e(a) {
                                function b(a, c) {
                                    var d = c ? a.cloneNode(!1) : a
                                        , e = a.parentNode;
                                    if (e) {
                                        var e = b(e, 1)
                                            , f = a.nextSibling;
                                        e.appendChild(d);
                                        for (var g = f; g; g = f)
                                            f = g.nextSibling,
                                                e.appendChild(g)
                                    }
                                    return d
                                }
                                for (; !a.nextSibling; )
                                    if (a = a.parentNode,
                                            !a)
                                        return;
                                for (var c, a = b(a.nextSibling, 0); (c = a.parentNode) && 1 === c.nodeType; )
                                    a = c;
                                j.push(a)
                            }
                            for (var f = /(?:^|\s)nocode(?:\s|$)/, g = /\r\n?|\n/, h = a.ownerDocument, i = h.createElement("li"); a.firstChild; )
                                i.appendChild(a.firstChild);
                            for (var j = [i], k = 0; k < j.length; ++k)
                                d(j[k]);
                            b === (0 | b) && j[0].setAttribute("value", b);
                            var l = h.createElement("ol");
                            l.className = "linenums";
                            for (var b = Math.max(0, b - 1 | 0) || 0, k = 0, m = j.length; k < m; ++k)
                                i = j[k],
                                    i.className = "L" + (k + b) % 10,
                                i.firstChild || i.appendChild(h.createTextNode(" ")),
                                    l.appendChild(i);
                            a.appendChild(l)
                        }
                        function j(a, b) {
                            for (var c = b.length; --c >= 0; ) {
                                var d = b[c];
                                y.hasOwnProperty(d) ? m.console && console.warn("cannot override language handler %s", d) : y[d] = a
                            }
                        }
                        function k(a, b) {
                            return a && y.hasOwnProperty(a) || (a = /^\s*</.test(b) ? "default-markup" : "default-code"),
                                y[a]
                        }
                        function l(a) {
                            var b = a.h;
                            try {
                                var c = d(a.c, a.i)
                                    , e = c.a;
                                a.a = e,
                                    a.d = c.d,
                                    a.e = 0,
                                    k(b, e)(a);
                                var f = /\bMSIE\s(\d+)/.exec(navigator.userAgent)
                                    , f = f && +f[1] <= 8
                                    , b = /\n/g
                                    , g = a.a
                                    , h = g.length
                                    , c = 0
                                    , i = a.d
                                    , j = i.length
                                    , e = 0
                                    , l = a.g
                                    , n = l.length
                                    , o = 0;
                                l[n] = h;
                                var p, q;
                                for (q = p = 0; q < n; )
                                    l[q] !== l[q + 2] ? (l[p++] = l[q++],
                                        l[p++] = l[q++]) : q += 2;
                                for (n = p,
                                         q = p = 0; q < n; ) {
                                    for (var r = l[q], s = l[q + 1], t = q + 2; t + 2 <= n && l[t + 1] === s; )
                                        t += 2;
                                    l[p++] = r,
                                        l[p++] = s,
                                        q = t
                                }
                                l.length = p;
                                var u, v = a.c;
                                v && (u = v.style.display,
                                    v.style.display = "none");
                                try {
                                    for (; e < j; ) {
                                        var w, x = i[e + 2] || h, y = l[o + 2] || h, t = Math.min(x, y), z = i[e + 1];
                                        if (1 !== z.nodeType && (w = g.substring(c, t))) {
                                            f && (w = w.replace(b, "\r")),
                                                z.nodeValue = w;
                                            var A = z.ownerDocument
                                                , B = A.createElement("span");
                                            B.className = l[o + 1];
                                            var C = z.parentNode;
                                            C.replaceChild(B, z),
                                                B.appendChild(z),
                                            c < x && (i[e + 1] = z = A.createTextNode(g.substring(t, x)),
                                                C.insertBefore(z, B.nextSibling))
                                        }
                                        c = t,
                                        c >= x && (e += 2),
                                        c >= y && (o += 2)
                                    }
                                } finally {
                                    v && (v.style.display = u)
                                }
                            } catch (a) {
                                m.console && console.log(a && a.stack || a)
                            }
                        }
                        var m = window
                            , n = ["break,continue,do,else,for,if,return,while"]
                            , o = [[n, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"]
                            , p = [o, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"]
                            , q = [o, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"]
                            , r = [q, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"]
                            , o = [o, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"]
                            , s = [n, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"]
                            , t = [n, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"]
                            , u = [n, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"]
                            , n = [n, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"]
                            , v = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/
                            , w = /\S/
                            , x = h({
                            keywords: [p, r, o, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", s, t, n],
                            hashComments: !0,
                            cStyleComments: !0,
                            multiLineStrings: !0,
                            regexLiterals: !0
                        })
                            , y = {};
                        j(x, ["default-code"]),
                            j(g([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]),
                            j(g([["pln", /^\s+/, b, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, b, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'\/>]|\/(?=\s)))/], ["pun", /^[\/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]),
                            j(g([], [["atv", /^[\S\s]+/]]), ["uq.val"]),
                            j(h({
                                keywords: p,
                                hashComments: !0,
                                cStyleComments: !0,
                                types: v
                            }), ["c", "cc", "cpp", "cxx", "cyc", "m"]),
                            j(h({
                                keywords: "null,true,false"
                            }), ["json"]),
                            j(h({
                                keywords: r,
                                hashComments: !0,
                                cStyleComments: !0,
                                verbatimStrings: !0,
                                types: v
                            }), ["cs"]),
                            j(h({
                                keywords: q,
                                cStyleComments: !0
                            }), ["java"]),
                            j(h({
                                keywords: n,
                                hashComments: !0,
                                multiLineStrings: !0
                            }), ["bash", "bsh", "csh", "sh"]),
                            j(h({
                                keywords: s,
                                hashComments: !0,
                                multiLineStrings: !0,
                                tripleQuotedStrings: !0
                            }), ["cv", "py", "python"]),
                            j(h({
                                keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
                                hashComments: !0,
                                multiLineStrings: !0,
                                regexLiterals: 2
                            }), ["perl", "pl", "pm"]),
                            j(h({
                                keywords: t,
                                hashComments: !0,
                                multiLineStrings: !0,
                                regexLiterals: !0
                            }), ["rb", "ruby"]),
                            j(h({
                                keywords: o,
                                cStyleComments: !0,
                                regexLiterals: !0
                            }), ["javascript", "js"]),
                            j(h({
                                keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
                                hashComments: 3,
                                cStyleComments: !0,
                                multilineStrings: !0,
                                tripleQuotedStrings: !0,
                                regexLiterals: !0
                            }), ["coffee"]),
                            j(h({
                                keywords: u,
                                cStyleComments: !0,
                                multilineStrings: !0
                            }), ["rc", "rs", "rust"]),
                            j(g([], [["str", /^[\S\s]+/]]), ["regex"]);
                        var z = m.PR = {
                            createSimpleLexer: g,
                            registerLangHandler: j,
                            sourceDecorator: h,
                            PR_ATTRIB_NAME: "atn",
                            PR_ATTRIB_VALUE: "atv",
                            PR_COMMENT: "com",
                            PR_DECLARATION: "dec",
                            PR_KEYWORD: "kwd",
                            PR_LITERAL: "lit",
                            PR_NOCODE: "nocode",
                            PR_PLAIN: "pln",
                            PR_PUNCTUATION: "pun",
                            PR_SOURCE: "src",
                            PR_STRING: "str",
                            PR_TAG: "tag",
                            PR_TYPE: "typ",
                            prettyPrintOne: m.prettyPrintOne = function(a, b, c) {
                                var d = document.createElement("div");
                                return d.innerHTML = "<pre>" + a + "</pre>",
                                    d = d.firstChild,
                                c && i(d, c, !0),
                                    l({
                                        h: b,
                                        j: c,
                                        c: d,
                                        i: 1
                                    }),
                                    d.innerHTML
                            }
                            ,
                            prettyPrint: m.prettyPrint = function(a, c) {
                                function d() {
                                    for (var c = m.PR_SHOULD_USE_CONTINUATION ? o.now() + 250 : 1 / 0; q < h.length && o.now() < c; q++) {
                                        for (var e = h[q], j = x, k = e; k = k.previousSibling; ) {
                                            var n = k.nodeType
                                                , y = (7 === n || 8 === n) && k.nodeValue;
                                            if (y ? !/^\??prettify\b/.test(y) : 3 !== n || /\S/.test(k.nodeValue))
                                                break;
                                            if (y) {
                                                j = {},
                                                    y.replace(/\b(\w+)=([\w%+\-.:]+)/g, function(a, b, c) {
                                                        j[b] = c
                                                    });
                                                break
                                            }
                                        }
                                        if (k = e.className,
                                            (j !== x || s.test(k)) && !t.test(k)) {
                                            for (n = !1,
                                                     y = e.parentNode; y; y = y.parentNode)
                                                if (w.test(y.tagName) && y.className && s.test(y.className)) {
                                                    n = !0;
                                                    break
                                                }
                                            if (!n) {
                                                if (e.className += " prettyprinted",
                                                        n = j.lang,
                                                        !n) {
                                                    var z, n = k.match(r);
                                                    !n && (z = f(e)) && v.test(z.tagName) && (n = z.className.match(r)),
                                                    n && (n = n[1])
                                                }
                                                if (u.test(e.tagName))
                                                    y = 1;
                                                else
                                                    var y = e.currentStyle
                                                        , A = g.defaultView
                                                        , y = (y = y ? y.whiteSpace : A && A.getComputedStyle ? A.getComputedStyle(e, b).getPropertyValue("white-space") : 0) && "pre" === y.substring(0, 3);
                                                A = j.linenums,
                                                (A = "true" === A || +A) || (A = !!(A = k.match(/\blinenums\b(?::(\d+))?/)) && (!A[1] || !A[1].length || +A[1])),
                                                A && i(e, A, y),
                                                    p = {
                                                        h: n,
                                                        c: e,
                                                        j: A,
                                                        i: y
                                                    },
                                                    l(p)
                                            }
                                        }
                                    }
                                    q < h.length ? setTimeout(d, 250) : "function" == typeof a && a()
                                }
                                for (var e = c || document.body, g = e.ownerDocument || document, e = [e.getElementsByTagName("pre"), e.getElementsByTagName("code"), e.getElementsByTagName("xmp")], h = [], j = 0; j < e.length; ++j)
                                    for (var k = 0, n = e[j].length; k < n; ++k)
                                        h.push(e[j][k]);
                                var e = b
                                    , o = Date;
                                o.now || (o = {
                                    now: function() {
                                        return +new Date
                                    }
                                });
                                var p, q = 0, r = /\blang(?:uage)?-([\w.]+)(?!\S)/, s = /\bprettyprint\b/, t = /\bprettyprinted\b/, u = /pre|xmp/i, v = /^code$/i, w = /^(?:pre|code|xmp)$/i, x = {};
                                d()
                            }
                        };
                        "function" == typeof a && a.amd && a("github:tcollard/google-code-prettify@1.0.4/bin/prettify.min.js", [], function() {
                            return z
                        }) && a("google-code-prettify", ["github:tcollard/google-code-prettify@1.0.4/bin/prettify.min.js"], function(a) {
                            return a
                        })
                    }()
            }()
        }(),
        System.registerDynamic("feature/prettify/main.js", ["jquery", "google-code-prettify/bin/prettify.min.js"], !0, function(a, b, c) {
            function d() {
                var a = {
                    ready: function() {
                        var a = null;
                        e("pre").addClass("prettyprint").each(function(b, c) {
                            a = c.firstChild,
                                a.innerHTML = f.prettyPrintOne(a.innerHTML)
                        })
                    },
                    destroy: function() {}
                };
                return e(function() {
                    a.ready()
                }
                    .bind(a)),
                    a
            }
            var e = (this || self,
                a("jquery"))
                , f = a("google-code-prettify/bin/prettify.min.js");
            c.exports = d
        }),
        System.registerDynamic("feature/map/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                function a(a) {
                    d = e(a);
                    var b = f(i(".team-members--wrapper"));
                    teamLocations.forEach(function(a) {
                        var c = b[a.memberId];
                        c && g(d, a, c)
                    }),
                        h(d, teamLocations),
                        i(k).on("click", c),
                        j = function() {
                            d.remove(),
                                i(k).off("click", c)
                        }
                }
                function b() {
                    j()
                }
                function c() {
                    i(l).fadeOut(m),
                        i(k).mouseleave(function() {
                            i(l).fadeIn(m)
                        })
                }
                var d, j;
                return j = function() {}
                    ,
                    System.import("app/maps").then(function(b) {
                        i(function() {
                            a(b)
                        })
                    }),
                    {
                        destroy: b
                    }
            }
            function e(a) {
                var b = new a({
                    div: "#map",
                    lat: 51.505,
                    lng: -.09,
                    disableDefaultUI: !0
                });
                return b
            }
            function f(a) {
                return j.call(i("[data-member-id]", a), function(a, b) {
                    var c = b.getAttribute("data-member-id");
                    return null != c && (a[c] = b),
                        a
                }, {})
            }
            function g(a, b, c) {
                a.addMarker({
                    lat: b.latitude,
                    lng: b.longitude,
                    title: b.name,
                    infoWindow: {
                        content: i(c).html()
                    }
                })
            }
            function h(a, b) {
                var c = b.length;
                c > 1 ? a.fitZoom() : 1 == c && (a.setCenter(b[0].latitude, b[0].longitude),
                        a.setZoom(5))
            }
            var i = (this || self,
                a("jquery"))
                , j = Array.prototype.reduce
                , k = ".js-team-map--wrapper"
                , l = ".js-team-map--container"
                , m = 100;
            c.exports = d
        }),
        function() {
            var a = System.amdDefine;
            !function(b) {
                "function" == typeof a && a.amd ? a("github:rmm5t/jquery-timeago@1.5.3/jquery.timeago.js", ["jquery"], b) : b("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
            }(function(a) {
                function b() {
                    var b = f.settings;
                    if (b.autoDispose && !a.contains(document.documentElement, this))
                        return a(this).timeago("dispose"),
                            this;
                    var g = c(this);
                    return isNaN(g.datetime) || (0 == b.cutoff || Math.abs(e(g.datetime)) < b.cutoff ? a(this).text(d(g.datetime)) : a(this).attr("title").length > 0 && a(this).text(a(this).attr("title"))),
                        this
                }
                function c(b) {
                    if (b = a(b),
                            !b.data("timeago")) {
                        b.data("timeago", {
                            datetime: f.datetime(b)
                        });
                        var c = a.trim(b.text());
                        f.settings.localeTitle ? b.attr("title", b.data("timeago").datetime.toLocaleString()) : !(c.length > 0) || f.isTime(b) && b.attr("title") || b.attr("title", c)
                    }
                    return b.data("timeago")
                }
                function d(a) {
                    return f.inWords(e(a))
                }
                function e(a) {
                    return (new Date).getTime() - a.getTime()
                }
                a.timeago = function(b) {
                    return d(b instanceof Date ? b : "string" == typeof b ? a.timeago.parse(b) : "number" == typeof b ? new Date(b) : a.timeago.datetime(b))
                }
                ;
                var f = a.timeago;
                a.extend(a.timeago, {
                    settings: {
                        refreshMillis: 6e4,
                        allowPast: !0,
                        allowFuture: !1,
                        localeTitle: !1,
                        cutoff: 0,
                        autoDispose: !0,
                        strings: {
                            prefixAgo: null,
                            prefixFromNow: null,
                            suffixAgo: "ago",
                            suffixFromNow: "from now",
                            inPast: "any moment now",
                            seconds: "less than a minute",
                            minute: "about a minute",
                            minutes: "%d minutes",
                            hour: "about an hour",
                            hours: "about %d hours",
                            day: "a day",
                            days: "%d days",
                            month: "about a month",
                            months: "%d months",
                            year: "about a year",
                            years: "%d years",
                            wordSeparator: " ",
                            numbers: []
                        }
                    },
                    inWords: function(b) {
                        function c(c, e) {
                            var f = a.isFunction(c) ? c(e, b) : c
                                , g = d.numbers && d.numbers[e] || e;
                            return f.replace(/%d/i, g)
                        }
                        if (!this.settings.allowPast && !this.settings.allowFuture)
                            throw "timeago allowPast and allowFuture settings can not both be set to false.";
                        var d = this.settings.strings
                            , e = d.prefixAgo
                            , f = d.suffixAgo;
                        if (this.settings.allowFuture && b < 0 && (e = d.prefixFromNow,
                                f = d.suffixFromNow),
                            !this.settings.allowPast && b >= 0)
                            return this.settings.strings.inPast;
                        var g = Math.abs(b) / 1e3
                            , h = g / 60
                            , i = h / 60
                            , j = i / 24
                            , k = j / 365
                            , l = g < 45 && c(d.seconds, Math.round(g)) || g < 90 && c(d.minute, 1) || h < 45 && c(d.minutes, Math.round(h)) || h < 90 && c(d.hour, 1) || i < 24 && c(d.hours, Math.round(i)) || i < 42 && c(d.day, 1) || j < 30 && c(d.days, Math.round(j)) || j < 45 && c(d.month, 1) || j < 365 && c(d.months, Math.round(j / 30)) || k < 1.5 && c(d.year, 1) || c(d.years, Math.round(k))
                            , m = d.wordSeparator || "";
                        return void 0 === d.wordSeparator && (m = " "),
                            a.trim([e, l, f].join(m))
                    },
                    parse: function(b) {
                        var c = a.trim(b);
                        return c = c.replace(/\.\d+/, ""),
                            c = c.replace(/-/, "/").replace(/-/, "/"),
                            c = c.replace(/T/, " ").replace(/Z/, " UTC"),
                            c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
                            c = c.replace(/([\+\-]\d\d)$/, " $100"),
                            new Date(c)
                    },
                    datetime: function(b) {
                        var c = f.isTime(b) ? a(b).attr("datetime") : a(b).attr("title");
                        return f.parse(c)
                    },
                    isTime: function(b) {
                        return "time" === a(b).get(0).tagName.toLowerCase()
                    }
                });
                var g = {
                    init: function() {
                        var c = a.proxy(b, this);
                        c();
                        var d = f.settings;
                        d.refreshMillis > 0 && (this._timeagoInterval = setInterval(c, d.refreshMillis))
                    },
                    update: function(c) {
                        var d = c instanceof Date ? c : f.parse(c);
                        a(this).data("timeago", {
                            datetime: d
                        }),
                        f.settings.localeTitle && a(this).attr("title", d.toLocaleString()),
                            b.apply(this)
                    },
                    updateFromDOM: function() {
                        a(this).data("timeago", {
                            datetime: f.parse(f.isTime(this) ? a(this).attr("datetime") : a(this).attr("title"))
                        }),
                            b.apply(this)
                    },
                    dispose: function() {
                        this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
                            this._timeagoInterval = null)
                    }
                };
                a.fn.timeago = function(a, b) {
                    var c = a ? g[a] : g.init;
                    if (!c)
                        throw new Error("Unknown function name '" + a + "' for timeago");
                    return this.each(function() {
                        c.call(this, b)
                    }),
                        this
                }
                    ,
                    document.createElement("abbr"),
                    document.createElement("time")
            })
        }(),
        function() {
            var a = System.amdDefine;
            a("github:rmm5t/jquery-timeago@1.5.3.js", ["github:rmm5t/jquery-timeago@1.5.3/jquery.timeago.js"], function(a) {
                return a
            })
        }(),
        System.registerDynamic("feature/timeAgo/main.js", ["jquery", "jquery-timeago"], !0, function(a, b, c) {
            var d = (this || self,
                a("jquery"))
                , e = "time.timeago";
            a("jquery-timeago"),
                c.exports = function() {
                    function a() {
                        d(e).timeago()
                    }
                    function b() {}
                    return d(a),
                        {
                            destroy: b
                        }
                }
        }),
        System.registerDynamic("feature/hide-show-guide/storage.js", [], !0, function(a, b, c) {
            this || self;
            c.exports = function(a) {
                return null == a && (a = window.localStorage),
                    {
                        getItem: function(b) {
                            return a.getItem(b)
                        },
                        setItem: function(b, c) {
                            a.setItem(b, c)
                        },
                        removeItem: function(b) {
                            a.removeItem(b)
                        },
                        hasItem: function(b) {
                            return null != a.getItem(b)
                        },
                        key: function(b) {
                            return a.key(b)
                        },
                        clear: function() {
                            a.clear()
                        }
                    }
            }
        }),
        System.registerDynamic("feature/hide-show-guide/main.js", ["jquery", "./storage"], !0, function(a, b, c) {
            function d() {
                function a() {
                    j()
                }
                var b = {
                    ready: a,
                    destroy: function() {
                        o.off("click", ".use-gradle h2, .use-maven h2, .use-sts h2", i),
                            o.off("click", ".reveal-gradle", e),
                            o.off("click", ".reveal-maven", f),
                            o.off("click", ".reveal-sts", g)
                    }
                };
                return k(a),
                    b
            }
            function e(a) {
                h("gradle", a)
            }
            function f(a) {
                h("maven", a)
            }
            function g(a) {
                h("sts", a)
            }
            function h(a, b) {
                if (i(),
                        n.addClass("show-" + a),
                        m.setItem(p, a),
                    void 0 !== b)
                    for (var c in r)
                        if (k(b.currentTarget).hasClass(c)) {
                            k(r[c]).each(function(a, b) {
                                b.scrollIntoView(!0)
                            });
                            break
                        }
            }
            function i() {
                n.removeClass("show-gradle show-maven show-sts"),
                    m.setItem(p, "none")
            }
            function j() {
                if (o.on("click", ".use-gradle h2, .use-maven h2, .use-sts h2", i),
                        o.on("click", ".reveal-gradle", e),
                        o.on("click", ".reveal-maven", f),
                        o.on("click", ".reveal-sts", g),
                        m.hasItem(p)) {
                    var a = m.getItem(p);
                    q.indexOf(a) >= 0 ? h(a, void 0) : i()
                }
            }
            var k = (this || self,
                a("jquery"))
                , l = a("./storage")
                , m = l()
                , n = k("body")
                , o = k(".content--container")
                , p = "/guides/gs/build"
                , q = ["gradle", "maven", "sts"]
                , r = {
                "reveal-gradle": "#scratch",
                "reveal-maven": "#use-maven",
                "reveal-sts": "#use-sts",
                "use-gradle": "#reveal-gradle",
                "use-maven": "#reveal-maven",
                "use-sts": "#reveal-sts"
            };
            c.exports = d
        }),
        System.registerDynamic("feature/heroBanner/main.js", ["jquery"], !0, function(a, b, c) {
            function d() {
                0 == g(h + ":visible").next("section").length ? (g(h + ":last").hide(),
                    g(h + ":first").fadeIn(250)) : g(h + ":visible").hide().next("section").fadeIn(250)
            }
            function e() {
                0 == g(h + ":visible").prev("section").length ? (g(h + ":first").hide(),
                    g(h + ":last").fadeIn(250)) : g(h + ":visible").hide().prev("section").fadeIn(250)
            }
            var f, g = (this || self,
                a("jquery")), h = ".homepage--body .hero--banner > section", i = ".homepage--body .hero--banner .blockarrows .previous", j = ".homepage--body .hero--banner .blockarrows .next", k = 7e3;
            c.exports = function() {
                function a() {
                    g(i).on("click", e),
                        g(j).on("click", d),
                        f = window.setInterval(d, k)
                }
                function b() {
                    g(i).off("click", e),
                        g(j).off("click", d),
                        window.clearInterval(f)
                }
                return g(a),
                    {
                        destroy: b
                    }
            }
        }),
        System.registerDynamic("npm:most@0.2.4/Stream.js", ["./async"], !0, function(a, b, c) {
            function d(a) {
                this._emitter = a
            }
            function e(a) {
                return new d(function(b, c) {
                        try {
                            b(a),
                                c()
                        } catch (a) {
                            c(a)
                        }
                        return l
                    }
                )
            }
            function f() {
                return new d(g)
            }
            function g(a, b) {
                m(b)
            }
            function h(a) {
                var b;
                return function(c, d, e) {
                    return b ? e.push(d) : (b = !0,
                        e = [d],
                        setTimeout(function() {
                            c(e.slice()),
                                b = !1
                        }, a)),
                        e
                }
            }
            function i(a) {
                return function(b, c, d) {
                    return d && d.push(c) || (d = [c]),
                    d.length >= a && (b(d),
                        d = void 0),
                        d
                }
            }
            function j(a) {
                if (null != a)
                    throw a
            }
            function k(a) {
                return a
            }
            function l() {}
            var m = (this || self,
                a("./async"));
            c.exports = d,
                d.of = e,
                d.empty = f;
            var n = d.prototype = {};
            n.constructor = d,
                n.each = function(a, b) {
                    function c() {
                        f || (f = !0,
                            "function" == typeof g ? g() : m(function() {
                                g()
                            }))
                    }
                    function d(b) {
                        f || a(b)
                    }
                    function e(a) {
                        f || (f = !0,
                            b.apply(void 0, arguments))
                    }
                    var f, g, h = this;
                    return "function" != typeof b && (b = j),
                        m(function() {
                            g = h._emitter(d, e)
                        }),
                        c
                }
                ,
                n.map = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(function(b) {
                                c(a(b))
                            }, d)
                        }
                    )
                }
                ,
                n.ap = function(a) {
                    return this.flatMap(function(b) {
                        return a.map(b)
                    })
                }
                ,
                n.flatMap = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(function(b) {
                                a(b)._emitter(c, d)
                            }, d)
                        }
                    )
                }
                ,
                n.flatten = function() {
                    return this.flatMap(k)
                }
                ,
                n.filter = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(function(b) {
                                a(b) && c(b)
                            }, d)
                        }
                    )
                }
                ,
                n.merge = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(c, d),
                                a._emitter(c, d)
                        }
                    )
                }
                ,
                n.concat = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(c, function(b) {
                                b ? d(b) : a._emitter(c, d)
                            })
                        }
                    )
                }
                ,
                n.tap = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(function(b) {
                                a(b),
                                    c(b)
                            }, d)
                        }
                    )
                }
                ,
                n.buffer = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            var e;
                            b(function(b) {
                                e = a(c, b, e || [])
                            }, d)
                        }
                    )
                }
                ,
                n.bufferCount = function(a) {
                    return this.buffer(i(a))
                }
                ,
                n.bufferTime = function(a) {
                    return this.buffer(h(a))
                }
                ,
                n.delay = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(function(b) {
                                setTimeout(function() {
                                    c(b)
                                }, a || 0)
                            }, d)
                        }
                    )
                }
                ,
                n.debounce = function(a) {
                    var b = a
                        , c = this._emitter;
                    return new d(function(d, e) {
                            c(function(c) {
                                var e = Date.now();
                                e >= b && (b = e + a,
                                    d(c))
                            }, e)
                        }
                    )
                }
                ,
                n.throttle = function(a) {
                    var b, c, e = this._emitter;
                    return new d(function(d, f) {
                            e(function(e) {
                                b = e,
                                c || (c = setTimeout(function() {
                                    c = void 0,
                                        d(e)
                                }, a))
                            }, f)
                        }
                    )
                }
                ,
                n.catch = function(a) {
                    var b = this._emitter;
                    return new d(function(c, d) {
                            b(c, function(b) {
                                var e;
                                if (null != b)
                                    try {
                                        c(a(b))
                                    } catch (a) {
                                        e = a
                                    }
                                null != e && d(e)
                            })
                        }
                    )
                }
                ,
                n.reduce = function(a, b) {
                    var c = this._emitter;
                    return new d(function(d, e) {
                            var f = b;
                            c(function(b) {
                                f = a(f, b)
                            }, function(a) {
                                null == a && d(f),
                                    e(a)
                            })
                        }
                    )
                }
                ,
                n.scan = function(a, b) {
                    return this.map(function(c) {
                        return b = a(b, c)
                    })
                }
        }),
        System.registerDynamic("npm:most@0.2.4/async.js", ["process"], !0, function(a, b, c) {
            this || self;
            !function(a) {
                function b(a) {
                    1 === f.push(a) && e(d)
                }
                function d() {
                    var a, b, c = f;
                    for (f = [],
                             a = 0,
                             b = c.length; a < b; a++)
                        c[a]()
                }
                c.exports = b;
                var e, f = [];
                e = "object" == typeof a && a.nextTick ? "function" == typeof setImmediate ? setImmediate : a.nextTick : "undefined" != typeof window && (MutationObserver = window.MutationObserver || window.WebKitMutationObserver) ? function(a, b, c) {
                    var d = a.createElement("div");
                    return new b(c).observe(d, {
                        attributes: !0
                    }),
                        function() {
                            d.setAttribute("x", "x")
                        }
                }(document, MutationObserver, d) : function(a) {
                    setTimeout(a, 0)
                }
            }(a("process"))
        }),
        System.registerDynamic("npm:most@0.2.4/most.js", ["./Stream", "./async"], !0, function(a, b, c) {
            function d(a) {
                return new k(a)
            }
            function e(a) {
                return new k(function(b, c) {
                        try {
                            a.forEach(function(a) {
                                b(a)
                            }),
                                c()
                        } catch (a) {
                            c(a)
                        }
                        return j
                    }
                )
            }
            function f() {
                return e(Array.prototype.slice.call(arguments))
            }
            function g(a, b) {
                return new k(function(c) {
                        return a.addEventListener(b, c, !1),
                            function() {
                                a.removeEventListener(b, c, !1)
                            }
                    }
                )
            }
            function h(a) {
                return new k(function(b, c) {
                        return a.then(b).then(function() {
                            c()
                        }, c),
                            j
                    }
                )
            }
            function i(a, b, c) {
                return function() {
                    var d = a.concat(l.call(arguments));
                    return d.length < b ? i(d, b, c) : c(d)
                }
            }
            function j() {}
            var k = (this || self,
                a("./Stream"));
            a("./async");
            c.exports = d,
                d.of = k.of,
                d.empty = k.empty,
                d.fromArray = e,
                d.fromItem = f,
                d.fromEventTarget = g,
                d.fromPromise = h,
                Object.keys(k.prototype).reduce(function(a, b) {
                    var c = k.prototype[b];
                    return "function" == typeof c && (a[b] = i([], c.length + 1, function(a) {
                        return c.apply(a.pop(), a)
                    })),
                        a
                }, d);
            var l = [].slice
        }),
        System.registerDynamic("npm:most@0.2.4.js", ["npm:most@0.2.4/most.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:most@0.2.4/most.js")
        }),
        System.registerDynamic("npm:process@0.11.5/browser.js", [], !0, function(a, b, c) {
            function d() {
                m && k && (m = !1,
                    k.length ? l = k.concat(l) : n = -1,
                l.length && e())
            }
            function e() {
                if (!m) {
                    var a = h(d);
                    m = !0;
                    for (var b = l.length; b; ) {
                        for (k = l,
                                 l = []; ++n < b; )
                            k && k[n].run();
                        n = -1,
                            b = l.length
                    }
                    k = null,
                        m = !1,
                        i(a)
                }
            }
            function f(a, b) {
                this.fun = a,
                    this.array = b
            }
            function g() {}
            var h, i, j = (this || self,
                c.exports = {});
            !function() {
                try {
                    h = setTimeout
                } catch (a) {
                    h = function() {
                        throw new Error("setTimeout is not defined")
                    }
                }
                try {
                    i = clearTimeout
                } catch (a) {
                    i = function() {
                        throw new Error("clearTimeout is not defined")
                    }
                }
            }();
            var k, l = [], m = !1, n = -1;
            j.nextTick = function(a) {
                var b = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var c = 1; c < arguments.length; c++)
                        b[c - 1] = arguments[c];
                l.push(new f(a,b)),
                1 !== l.length || m || h(e, 0)
            }
                ,
                f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                j.title = "browser",
                j.browser = !0,
                j.env = {},
                j.argv = [],
                j.version = "",
                j.versions = {},
                j.on = g,
                j.addListener = g,
                j.once = g,
                j.off = g,
                j.removeListener = g,
                j.removeAllListeners = g,
                j.emit = g,
                j.binding = function(a) {
                    throw new Error("process.binding is not supported")
                }
                ,
                j.cwd = function() {
                    return "/"
                }
                ,
                j.chdir = function(a) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                j.umask = function() {
                    return 0
                }
        }),
        System.registerDynamic("npm:process@0.11.5.js", ["npm:process@0.11.5/browser.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:process@0.11.5/browser.js")
        }),
        System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index.js", ["process"], !0, function(a, b, c) {
            this || self;
            c.exports = System._nodeRequire ? process : a("process")
        }),
        System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index"], !0, function(a, b, c) {
            this || self;
            c.exports = a("github:jspm/nodelibs-process@0.1.2/index")
        }),
        System.registerDynamic("npm:jquery@1.12.4/dist/jquery.js", ["process"], !0, function(a, b, c) {
            "format cjs";
            this || self;
            !function(a) {
                !function(a, b) {
                    "object" == typeof c && "object" == typeof c.exports ? c.exports = a.document ? b(a, !0) : function(a) {
                        if (!a.document)
                            throw new Error("jQuery requires a window with a document");
                        return b(a)
                    }
                        : b(a)
                }("undefined" != typeof window ? window : this, function(a, b) {
                    function c(a) {
                        var b = !!a && "length"in a && a.length
                            , c = na.type(a);
                        return "function" !== c && !na.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
                    }
                    function d(a, b, c) {
                        if (na.isFunction(b))
                            return na.grep(a, function(a, d) {
                                return !!b.call(a, d, a) !== c
                            });
                        if (b.nodeType)
                            return na.grep(a, function(a) {
                                return a === b !== c
                            });
                        if ("string" == typeof b) {
                            if (xa.test(b))
                                return na.filter(b, a, c);
                            b = na.filter(b, a)
                        }
                        return na.grep(a, function(a) {
                            return na.inArray(a, b) > -1 !== c
                        })
                    }
                    function e(a, b) {
                        do
                            a = a[b];
                        while (a && 1 !== a.nodeType);return a
                    }
                    function f(a) {
                        var b = {};
                        return na.each(a.match(Da) || [], function(a, c) {
                            b[c] = !0
                        }),
                            b
                    }
                    function g() {
                        da.addEventListener ? (da.removeEventListener("DOMContentLoaded", h),
                            a.removeEventListener("load", h)) : (da.detachEvent("onreadystatechange", h),
                            a.detachEvent("onload", h))
                    }
                    function h() {
                        (da.addEventListener || "load" === a.event.type || "complete" === da.readyState) && (g(),
                            na.ready())
                    }
                    function i(a, b, c) {
                        if (void 0 === c && 1 === a.nodeType) {
                            var d = "data-" + b.replace(Ia, "-$1").toLowerCase();
                            if (c = a.getAttribute(d),
                                "string" == typeof c) {
                                try {
                                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ha.test(c) ? na.parseJSON(c) : c)
                                } catch (a) {}
                                na.data(a, b, c)
                            } else
                                c = void 0
                        }
                        return c
                    }
                    function j(a) {
                        var b;
                        for (b in a)
                            if (("data" !== b || !na.isEmptyObject(a[b])) && "toJSON" !== b)
                                return !1;
                        return !0
                    }
                    function k(a, b, c, d) {
                        if (Ga(a)) {
                            var e, f, g = na.expando, h = a.nodeType, i = h ? na.cache : a, j = h ? a[g] : a[g] && g;
                            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                                return j || (j = h ? a[g] = ca.pop() || na.guid++ : g),
                                i[j] || (i[j] = h ? {} : {
                                    toJSON: na.noop
                                }),
                                "object" != typeof b && "function" != typeof b || (d ? i[j] = na.extend(i[j], b) : i[j].data = na.extend(i[j].data, b)),
                                    f = i[j],
                                d || (f.data || (f.data = {}),
                                    f = f.data),
                                void 0 !== c && (f[na.camelCase(b)] = c),
                                    "string" == typeof b ? (e = f[b],
                                    null == e && (e = f[na.camelCase(b)])) : e = f,
                                    e
                        }
                    }
                    function l(a, b, c) {
                        if (Ga(a)) {
                            var d, e, f = a.nodeType, g = f ? na.cache : a, h = f ? a[na.expando] : na.expando;
                            if (g[h]) {
                                if (b && (d = c ? g[h] : g[h].data)) {
                                    na.isArray(b) ? b = b.concat(na.map(b, na.camelCase)) : b in d ? b = [b] : (b = na.camelCase(b),
                                        b = b in d ? [b] : b.split(" ")),
                                        e = b.length;
                                    for (; e--; )
                                        delete d[b[e]];
                                    if (c ? !j(d) : !na.isEmptyObject(d))
                                        return
                                }
                                (c || (delete g[h].data,
                                    j(g[h]))) && (f ? na.cleanData([a], !0) : la.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                            }
                        }
                    }
                    function m(a, b, c, d) {
                        var e, f = 1, g = 20, h = d ? function() {
                            return d.cur()
                        }
                            : function() {
                                return na.css(a, b, "")
                            }
                            , i = h(), j = c && c[3] || (na.cssNumber[b] ? "" : "px"), k = (na.cssNumber[b] || "px" !== j && +i) && Ka.exec(na.css(a, b));
                        if (k && k[3] !== j) {
                            j = j || k[3],
                                c = c || [],
                                k = +i || 1;
                            do
                                f = f || ".5",
                                    k /= f,
                                    na.style(a, b, k + j);
                            while (f !== (f = h() / i) && 1 !== f && --g)
                        }
                        return c && (k = +k || +i || 0,
                            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
                        d && (d.unit = j,
                            d.start = k,
                            d.end = e)),
                            e
                    }
                    function n(a) {
                        var b = Sa.split("|")
                            , c = a.createDocumentFragment();
                        if (c.createElement)
                            for (; b.length; )
                                c.createElement(b.pop());
                        return c
                    }
                    function o(a, b) {
                        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
                        if (!f)
                            for (f = [],
                                     c = a.childNodes || a; null != (d = c[e]); e++)
                                !b || na.nodeName(d, b) ? f.push(d) : na.merge(f, o(d, b));
                        return void 0 === b || b && na.nodeName(a, b) ? na.merge([a], f) : f
                    }
                    function p(a, b) {
                        for (var c, d = 0; null != (c = a[d]); d++)
                            na._data(c, "globalEval", !b || na._data(b[d], "globalEval"))
                    }
                    function q(a) {
                        Oa.test(a.type) && (a.defaultChecked = a.checked)
                    }
                    function r(a, b, c, d, e) {
                        for (var f, g, h, i, j, k, l, m = a.length, r = n(b), s = [], t = 0; t < m; t++)
                            if (g = a[t],
                                g || 0 === g)
                                if ("object" === na.type(g))
                                    na.merge(s, g.nodeType ? [g] : g);
                                else if (Ua.test(g)) {
                                    for (i = i || r.appendChild(b.createElement("div")),
                                             j = (Pa.exec(g) || ["", ""])[1].toLowerCase(),
                                             l = Ta[j] || Ta._default,
                                             i.innerHTML = l[1] + na.htmlPrefilter(g) + l[2],
                                             f = l[0]; f--; )
                                        i = i.lastChild;
                                    if (!la.leadingWhitespace && Ra.test(g) && s.push(b.createTextNode(Ra.exec(g)[0])),
                                            !la.tbody)
                                        for (g = "table" !== j || Va.test(g) ? "<table>" !== l[1] || Va.test(g) ? 0 : i : i.firstChild,
                                                 f = g && g.childNodes.length; f--; )
                                            na.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
                                    for (na.merge(s, i.childNodes),
                                             i.textContent = ""; i.firstChild; )
                                        i.removeChild(i.firstChild);
                                    i = r.lastChild
                                } else
                                    s.push(b.createTextNode(g));
                        for (i && r.removeChild(i),
                             la.appendChecked || na.grep(o(s, "input"), q),
                                 t = 0; g = s[t++]; )
                            if (d && na.inArray(g, d) > -1)
                                e && e.push(g);
                            else if (h = na.contains(g.ownerDocument, g),
                                    i = o(r.appendChild(g), "script"),
                                h && p(i),
                                    c)
                                for (f = 0; g = i[f++]; )
                                    Qa.test(g.type || "") && c.push(g);
                        return i = null,
                            r
                    }
                    function s() {
                        return !0
                    }
                    function t() {
                        return !1
                    }
                    function u() {
                        try {
                            return da.activeElement
                        } catch (a) {}
                    }
                    function v(a, b, c, d, e, f) {
                        var g, h;
                        if ("object" == typeof b) {
                            "string" != typeof c && (d = d || c,
                                c = void 0);
                            for (h in b)
                                v(a, h, c, d, b[h], f);
                            return a
                        }
                        if (null == d && null == e ? (e = c,
                                d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
                                    d = void 0) : (e = d,
                                    d = c,
                                    c = void 0)),
                            e === !1)
                            e = t;
                        else if (!e)
                            return a;
                        return 1 === f && (g = e,
                            e = function(a) {
                                return na().off(a),
                                    g.apply(this, arguments)
                            }
                            ,
                            e.guid = g.guid || (g.guid = na.guid++)),
                            a.each(function() {
                                na.event.add(this, b, e, d, c)
                            })
                    }
                    function w(a, b) {
                        return na.nodeName(a, "table") && na.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
                    }
                    function x(a) {
                        return a.type = (null !== na.find.attr(a, "type")) + "/" + a.type,
                            a
                    }
                    function y(a) {
                        var b = eb.exec(a.type);
                        return b ? a.type = b[1] : a.removeAttribute("type"),
                            a
                    }
                    function z(a, b) {
                        if (1 === b.nodeType && na.hasData(a)) {
                            var c, d, e, f = na._data(a), g = na._data(b, f), h = f.events;
                            if (h) {
                                delete g.handle,
                                    g.events = {};
                                for (c in h)
                                    for (d = 0,
                                             e = h[c].length; d < e; d++)
                                        na.event.add(b, c, h[c][d])
                            }
                            g.data && (g.data = na.extend({}, g.data))
                        }
                    }
                    function A(a, b) {
                        var c, d, e;
                        if (1 === b.nodeType) {
                            if (c = b.nodeName.toLowerCase(),
                                !la.noCloneEvent && b[na.expando]) {
                                e = na._data(b);
                                for (d in e.events)
                                    na.removeEvent(b, d, e.handle);
                                b.removeAttribute(na.expando)
                            }
                            "script" === c && b.text !== a.text ? (x(b).text = a.text,
                                y(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
                            la.html5Clone && a.innerHTML && !na.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Oa.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
                            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
                        }
                    }
                    function B(a, b, c, d) {
                        b = fa.apply([], b);
                        var e, f, g, h, i, j, k = 0, l = a.length, m = l - 1, n = b[0], p = na.isFunction(n);
                        if (p || l > 1 && "string" == typeof n && !la.checkClone && db.test(n))
                            return a.each(function(e) {
                                var f = a.eq(e);
                                p && (b[0] = n.call(this, e, f.html())),
                                    B(f, b, c, d)
                            });
                        if (l && (j = r(b, a[0].ownerDocument, !1, a, d),
                                e = j.firstChild,
                            1 === j.childNodes.length && (j = e),
                            e || d)) {
                            for (h = na.map(o(j, "script"), x),
                                     g = h.length; k < l; k++)
                                f = j,
                                k !== m && (f = na.clone(f, !0, !0),
                                g && na.merge(h, o(f, "script"))),
                                    c.call(a[k], f, k);
                            if (g)
                                for (i = h[h.length - 1].ownerDocument,
                                         na.map(h, y),
                                         k = 0; k < g; k++)
                                    f = h[k],
                                    Qa.test(f.type || "") && !na._data(f, "globalEval") && na.contains(i, f) && (f.src ? na._evalUrl && na._evalUrl(f.src) : na.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fb, "")));
                            j = e = null
                        }
                        return a
                    }
                    function C(a, b, c) {
                        for (var d, e = b ? na.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
                            c || 1 !== d.nodeType || na.cleanData(o(d)),
                            d.parentNode && (c && na.contains(d.ownerDocument, d) && p(o(d, "script")),
                                d.parentNode.removeChild(d));
                        return a
                    }
                    function D(a, b) {
                        var c = na(b.createElement(a)).appendTo(b.body)
                            , d = na.css(c[0], "display");
                        return c.detach(),
                            d
                    }
                    function E(a) {
                        var b = da
                            , c = jb[a];
                        return c || (c = D(a, b),
                        "none" !== c && c || (ib = (ib || na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
                            b = (ib[0].contentWindow || ib[0].contentDocument).document,
                            b.write(),
                            b.close(),
                            c = D(a, b),
                            ib.detach()),
                            jb[a] = c),
                            c
                    }
                    function F(a, b) {
                        return {
                            get: function() {
                                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                            }
                        }
                    }
                    function G(a) {
                        if (a in yb)
                            return a;
                        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = xb.length; c--; )
                            if (a = xb[c] + b,
                                a in yb)
                                return a
                    }
                    function H(a, b) {
                        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++)
                            d = a[g],
                            d.style && (f[g] = na._data(d, "olddisplay"),
                                c = d.style.display,
                                b ? (f[g] || "none" !== c || (d.style.display = ""),
                                "" === d.style.display && Ma(d) && (f[g] = na._data(d, "olddisplay", E(d.nodeName)))) : (e = Ma(d),
                                (c && "none" !== c || !e) && na._data(d, "olddisplay", e ? c : na.css(d, "display"))));
                        for (g = 0; g < h; g++)
                            d = a[g],
                            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                        return a
                    }
                    function I(a, b, c) {
                        var d = ub.exec(b);
                        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
                    }
                    function J(a, b, c, d, e) {
                        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2)
                            "margin" === c && (g += na.css(a, c + La[f], !0, e)),
                                d ? ("content" === c && (g -= na.css(a, "padding" + La[f], !0, e)),
                                "margin" !== c && (g -= na.css(a, "border" + La[f] + "Width", !0, e))) : (g += na.css(a, "padding" + La[f], !0, e),
                                "padding" !== c && (g += na.css(a, "border" + La[f] + "Width", !0, e)));
                        return g
                    }
                    function K(a, b, c) {
                        var d = !0
                            , e = "width" === b ? a.offsetWidth : a.offsetHeight
                            , f = ob(a)
                            , g = la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, f);
                        if (e <= 0 || null == e) {
                            if (e = pb(a, b, f),
                                (e < 0 || null == e) && (e = a.style[b]),
                                    lb.test(e))
                                return e;
                            d = g && (la.boxSizingReliable() || e === a.style[b]),
                                e = parseFloat(e) || 0
                        }
                        return e + J(a, b, c || (g ? "border" : "content"), d, f) + "px"
                    }
                    function L(a, b, c, d, e) {
                        return new L.prototype.init(a,b,c,d,e)
                    }
                    function M() {
                        return a.setTimeout(function() {
                            zb = void 0
                        }),
                            zb = na.now()
                    }
                    function N(a, b) {
                        var c, d = {
                            height: a
                        }, e = 0;
                        for (b = b ? 1 : 0; e < 4; e += 2 - b)
                            c = La[e],
                                d["margin" + c] = d["padding" + c] = a;
                        return b && (d.opacity = d.width = a),
                            d
                    }
                    function O(a, b, c) {
                        for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                            if (d = e[f].call(c, b, a))
                                return d
                    }
                    function P(a, b, c) {
                        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ma(a), p = na._data(a, "fxshow");
                        c.queue || (h = na._queueHooks(a, "fx"),
                        null == h.unqueued && (h.unqueued = 0,
                                i = h.empty.fire,
                                h.empty.fire = function() {
                                    h.unqueued || i()
                                }
                        ),
                            h.unqueued++,
                            l.always(function() {
                                l.always(function() {
                                    h.unqueued--,
                                    na.queue(a, "fx").length || h.empty.fire()
                                })
                            })),
                        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
                            j = na.css(a, "display"),
                            k = "none" === j ? na._data(a, "olddisplay") || E(a.nodeName) : j,
                        "inline" === k && "none" === na.css(a, "float") && (la.inlineBlockNeedsLayout && "inline" !== E(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
                        c.overflow && (n.overflow = "hidden",
                        la.shrinkWrapBlocks() || l.always(function() {
                            n.overflow = c.overflow[0],
                                n.overflowX = c.overflow[1],
                                n.overflowY = c.overflow[2]
                        }));
                        for (d in b)
                            if (e = b[d],
                                    Bb.exec(e)) {
                                if (delete b[d],
                                        f = f || "toggle" === e,
                                    e === (o ? "hide" : "show")) {
                                    if ("show" !== e || !p || void 0 === p[d])
                                        continue;
                                    o = !0
                                }
                                m[d] = p && p[d] || na.style(a, d)
                            } else
                                j = void 0;
                        if (na.isEmptyObject(m))
                            "inline" === ("none" === j ? E(a.nodeName) : j) && (n.display = j);
                        else {
                            p ? "hidden"in p && (o = p.hidden) : p = na._data(a, "fxshow", {}),
                            f && (p.hidden = !o),
                                o ? na(a).show() : l.done(function() {
                                    na(a).hide()
                                }),
                                l.done(function() {
                                    var b;
                                    na._removeData(a, "fxshow");
                                    for (b in m)
                                        na.style(a, b, m[b])
                                });
                            for (d in m)
                                g = O(o ? p[d] : 0, d, l),
                                d in p || (p[d] = g.start,
                                o && (g.end = g.start,
                                    g.start = "width" === d || "height" === d ? 1 : 0))
                        }
                    }
                    function Q(a, b) {
                        var c, d, e, f, g;
                        for (c in a)
                            if (d = na.camelCase(c),
                                    e = b[d],
                                    f = a[c],
                                na.isArray(f) && (e = f[1],
                                    f = a[c] = f[0]),
                                c !== d && (a[d] = f,
                                    delete a[c]),
                                    g = na.cssHooks[d],
                                g && "expand"in g) {
                                f = g.expand(f),
                                    delete a[d];
                                for (c in f)
                                    c in a || (a[c] = f[c],
                                        b[c] = e)
                            } else
                                b[d] = e
                    }
                    function R(a, b, c) {
                        var d, e, f = 0, g = R.prefilters.length, h = na.Deferred().always(function() {
                            delete i.elem
                        }), i = function() {
                            if (e)
                                return !1;
                            for (var b = zb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                                j.tweens[g].run(f);
                            return h.notifyWith(a, [j, f, c]),
                                f < 1 && i ? c : (h.resolveWith(a, [j]),
                                    !1)
                        }, j = h.promise({
                            elem: a,
                            props: na.extend({}, b),
                            opts: na.extend(!0, {
                                specialEasing: {},
                                easing: na.easing._default
                            }, c),
                            originalProperties: b,
                            originalOptions: c,
                            startTime: zb || M(),
                            duration: c.duration,
                            tweens: [],
                            createTween: function(b, c) {
                                var d = na.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                                return j.tweens.push(d),
                                    d
                            },
                            stop: function(b) {
                                var c = 0
                                    , d = b ? j.tweens.length : 0;
                                if (e)
                                    return this;
                                for (e = !0; c < d; c++)
                                    j.tweens[c].run(1);
                                return b ? (h.notifyWith(a, [j, 1, 0]),
                                    h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                                    this
                            }
                        }), k = j.props;
                        for (Q(k, j.opts.specialEasing); f < g; f++)
                            if (d = R.prefilters[f].call(j, a, k, j.opts))
                                return na.isFunction(d.stop) && (na._queueHooks(j.elem, j.opts.queue).stop = na.proxy(d.stop, d)),
                                    d;
                        return na.map(k, O, j),
                        na.isFunction(j.opts.start) && j.opts.start.call(a, j),
                            na.fx.timer(na.extend(i, {
                                elem: a,
                                anim: j,
                                queue: j.opts.queue
                            })),
                            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
                    }
                    function S(a) {
                        return na.attr(a, "class") || ""
                    }
                    function T(a) {
                        return function(b, c) {
                            "string" != typeof b && (c = b,
                                b = "*");
                            var d, e = 0, f = b.toLowerCase().match(Da) || [];
                            if (na.isFunction(c))
                                for (; d = f[e++]; )
                                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                        }
                    }
                    function U(a, b, c, d) {
                        function e(h) {
                            var i;
                            return f[h] = !0,
                                na.each(a[h] || [], function(a, h) {
                                    var j = h(b, c, d);
                                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                                        e(j),
                                        !1)
                                }),
                                i
                        }
                        var f = {}
                            , g = a === $b;
                        return e(b.dataTypes[0]) || !f["*"] && e("*")
                    }
                    function V(a, b) {
                        var c, d, e = na.ajaxSettings.flatOptions || {};
                        for (d in b)
                            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
                        return c && na.extend(!0, a, c),
                            a
                    }
                    function W(a, b, c) {
                        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
                            i.shift(),
                            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
                        if (e)
                            for (g in h)
                                if (h[g] && h[g].test(e)) {
                                    i.unshift(g);
                                    break
                                }
                        if (i[0]in c)
                            f = i[0];
                        else {
                            for (g in c) {
                                if (!i[0] || a.converters[g + " " + i[0]]) {
                                    f = g;
                                    break
                                }
                                d || (d = g)
                            }
                            f = f || d
                        }
                        if (f)
                            return f !== i[0] && i.unshift(f),
                                c[f]
                    }
                    function X(a, b, c, d) {
                        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                        if (k[1])
                            for (g in a.converters)
                                j[g.toLowerCase()] = a.converters[g];
                        for (f = k.shift(); f; )
                            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                                    i = f,
                                    f = k.shift())
                                if ("*" === f)
                                    f = i;
                                else if ("*" !== i && i !== f) {
                                    if (g = j[i + " " + f] || j["* " + f],
                                            !g)
                                        for (e in j)
                                            if (h = e.split(" "),
                                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                                        k.unshift(h[1]));
                                                break
                                            }
                                    if (g !== !0)
                                        if (g && a.throws)
                                            b = g(b);
                                        else
                                            try {
                                                b = g(b)
                                            } catch (a) {
                                                return {
                                                    state: "parsererror",
                                                    error: g ? a : "No conversion from " + i + " to " + f
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: b
                        }
                    }
                    function Y(a) {
                        return a.style && a.style.display || na.css(a, "display")
                    }
                    function Z(a) {
                        if (!na.contains(a.ownerDocument || da, a))
                            return !0;
                        for (; a && 1 === a.nodeType; ) {
                            if ("none" === Y(a) || "hidden" === a.type)
                                return !0;
                            a = a.parentNode
                        }
                        return !1
                    }
                    function $(a, b, c, d) {
                        var e;
                        if (na.isArray(b))
                            na.each(b, function(b, e) {
                                c || dc.test(a) ? d(a, e) : $(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
                            });
                        else if (c || "object" !== na.type(b))
                            d(a, b);
                        else
                            for (e in b)
                                $(a + "[" + e + "]", b[e], c, d)
                    }
                    function _() {
                        try {
                            return new a.XMLHttpRequest
                        } catch (a) {}
                    }
                    function aa() {
                        try {
                            return new a.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (a) {}
                    }
                    function ba(a) {
                        return na.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
                    }
                    var ca = []
                        , da = a.document
                        , ea = ca.slice
                        , fa = ca.concat
                        , ga = ca.push
                        , ha = ca.indexOf
                        , ia = {}
                        , ja = ia.toString
                        , ka = ia.hasOwnProperty
                        , la = {}
                        , ma = "1.12.4"
                        , na = function(a, b) {
                        return new na.fn.init(a,b)
                    }
                        , oa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                        , pa = /^-ms-/
                        , qa = /-([\da-z])/gi
                        , ra = function(a, b) {
                        return b.toUpperCase()
                    };
                    na.fn = na.prototype = {
                        jquery: ma,
                        constructor: na,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return ea.call(this)
                        },
                        get: function(a) {
                            return null != a ? a < 0 ? this[a + this.length] : this[a] : ea.call(this)
                        },
                        pushStack: function(a) {
                            var b = na.merge(this.constructor(), a);
                            return b.prevObject = this,
                                b.context = this.context,
                                b
                        },
                        each: function(a) {
                            return na.each(this, a)
                        },
                        map: function(a) {
                            return this.pushStack(na.map(this, function(b, c) {
                                return a.call(b, c, b)
                            }))
                        },
                        slice: function() {
                            return this.pushStack(ea.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(a) {
                            var b = this.length
                                , c = +a + (a < 0 ? b : 0);
                            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: ga,
                        sort: ca.sort,
                        splice: ca.splice
                    },
                        na.extend = na.fn.extend = function() {
                            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                            for ("boolean" == typeof g && (j = g,
                                g = arguments[h] || {},
                                h++),
                                 "object" == typeof g || na.isFunction(g) || (g = {}),
                                 h === i && (g = this,
                                     h--); h < i; h++)
                                if (null != (e = arguments[h]))
                                    for (d in e)
                                        a = g[d],
                                            c = e[d],
                                        g !== c && (j && c && (na.isPlainObject(c) || (b = na.isArray(c))) ? (b ? (b = !1,
                                            f = a && na.isArray(a) ? a : []) : f = a && na.isPlainObject(a) ? a : {},
                                            g[d] = na.extend(j, f, c)) : void 0 !== c && (g[d] = c));
                            return g
                        }
                        ,
                        na.extend({
                            expando: "jQuery" + (ma + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function(a) {
                                throw new Error(a)
                            },
                            noop: function() {},
                            isFunction: function(a) {
                                return "function" === na.type(a)
                            },
                            isArray: Array.isArray || function(a) {
                                return "array" === na.type(a)
                            }
                            ,
                            isWindow: function(a) {
                                return null != a && a == a.window
                            },
                            isNumeric: function(a) {
                                var b = a && a.toString();
                                return !na.isArray(a) && b - parseFloat(b) + 1 >= 0
                            },
                            isEmptyObject: function(a) {
                                var b;
                                for (b in a)
                                    return !1;
                                return !0
                            },
                            isPlainObject: function(a) {
                                var b;
                                if (!a || "object" !== na.type(a) || a.nodeType || na.isWindow(a))
                                    return !1;
                                try {
                                    if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf"))
                                        return !1
                                } catch (a) {
                                    return !1
                                }
                                if (!la.ownFirst)
                                    for (b in a)
                                        return ka.call(a, b);
                                for (b in a)
                                    ;
                                return void 0 === b || ka.call(a, b)
                            },
                            type: function(a) {
                                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a
                            },
                            globalEval: function(b) {
                                b && na.trim(b) && (a.execScript || function(b) {
                                        a.eval.call(a, b)
                                    }
                                )(b)
                            },
                            camelCase: function(a) {
                                return a.replace(pa, "ms-").replace(qa, ra)
                            },
                            nodeName: function(a, b) {
                                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                            },
                            each: function(a, b) {
                                var d, e = 0;
                                if (c(a))
                                    for (d = a.length; e < d && b.call(a[e], e, a[e]) !== !1; e++)
                                        ;
                                else
                                    for (e in a)
                                        if (b.call(a[e], e, a[e]) === !1)
                                            break;
                                return a
                            },
                            trim: function(a) {
                                return null == a ? "" : (a + "").replace(oa, "")
                            },
                            makeArray: function(a, b) {
                                var d = b || [];
                                return null != a && (c(Object(a)) ? na.merge(d, "string" == typeof a ? [a] : a) : ga.call(d, a)),
                                    d
                            },
                            inArray: function(a, b, c) {
                                var d;
                                if (b) {
                                    if (ha)
                                        return ha.call(b, a, c);
                                    for (d = b.length,
                                             c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                                        if (c in b && b[c] === a)
                                            return c
                                }
                                return -1
                            },
                            merge: function(a, b) {
                                for (var c = +b.length, d = 0, e = a.length; d < c; )
                                    a[e++] = b[d++];
                                if (c !== c)
                                    for (; void 0 !== b[d]; )
                                        a[e++] = b[d++];
                                return a.length = e,
                                    a
                            },
                            grep: function(a, b, c) {
                                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                                    d = !b(a[f], f),
                                    d !== h && e.push(a[f]);
                                return e
                            },
                            map: function(a, b, d) {
                                var e, f, g = 0, h = [];
                                if (c(a))
                                    for (e = a.length; g < e; g++)
                                        f = b(a[g], g, d),
                                        null != f && h.push(f);
                                else
                                    for (g in a)
                                        f = b(a[g], g, d),
                                        null != f && h.push(f);
                                return fa.apply([], h)
                            },
                            guid: 1,
                            proxy: function(a, b) {
                                var c, d, e;
                                if ("string" == typeof b && (e = a[b],
                                        b = a,
                                        a = e),
                                        na.isFunction(a))
                                    return c = ea.call(arguments, 2),
                                        d = function() {
                                            return a.apply(b || this, c.concat(ea.call(arguments)))
                                        }
                                        ,
                                        d.guid = a.guid = a.guid || na.guid++,
                                        d
                            },
                            now: function() {
                                return +new Date
                            },
                            support: la
                        }),
                    "function" == typeof Symbol && (na.fn[Symbol.iterator] = ca[Symbol.iterator]),
                        na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
                            ia["[object " + b + "]"] = b.toLowerCase()
                        });
                    var sa = function(a) {
                        function b(a, b, c, d) {
                            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument, p = b ? b.nodeType : 9;
                            if (c = c || [],
                                "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p)
                                return c;
                            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b),
                                    b = b || G,
                                    I)) {
                                if (11 !== p && (j = ra.exec(a)))
                                    if (e = j[1]) {
                                        if (9 === p) {
                                            if (!(g = b.getElementById(e)))
                                                return c;
                                            if (g.id === e)
                                                return c.push(g),
                                                    c
                                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e)
                                            return c.push(g),
                                                c
                                    } else {
                                        if (j[2])
                                            return $.apply(c, b.getElementsByTagName(a)),
                                                c;
                                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName)
                                            return $.apply(c, b.getElementsByClassName(e)),
                                                c
                                    }
                                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                                    if (1 !== p)
                                        o = b,
                                            n = a;
                                    else if ("object" !== b.nodeName.toLowerCase()) {
                                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N),
                                                 l = z(a),
                                                 f = l.length,
                                                 i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--; )
                                            l[f] = i + " " + m(l[f]);
                                        n = l.join(","),
                                            o = sa.test(a) && k(b.parentNode) || b
                                    }
                                    if (n)
                                        try {
                                            return $.apply(c, o.querySelectorAll(n)),
                                                c
                                        } catch (a) {} finally {
                                            h === N && b.removeAttribute("id")
                                        }
                                }
                            }
                            return B(a.replace(ha, "$1"), b, c, d)
                        }
                        function c() {
                            function a(c, d) {
                                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                                    a[c + " "] = d
                            }
                            var b = [];
                            return a
                        }
                        function d(a) {
                            return a[N] = !0,
                                a
                        }
                        function e(a) {
                            var b = G.createElement("div");
                            try {
                                return !!a(b)
                            } catch (a) {
                                return !1
                            } finally {
                                b.parentNode && b.parentNode.removeChild(b),
                                    b = null
                            }
                        }
                        function f(a, b) {
                            for (var c = a.split("|"), d = c.length; d--; )
                                w.attrHandle[c[d]] = b
                        }
                        function g(a, b) {
                            var c = b && a
                                , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                            if (d)
                                return d;
                            if (c)
                                for (; c = c.nextSibling; )
                                    if (c === b)
                                        return -1;
                            return a ? 1 : -1
                        }
                        function h(a) {
                            return function(b) {
                                var c = b.nodeName.toLowerCase();
                                return "input" === c && b.type === a
                            }
                        }
                        function i(a) {
                            return function(b) {
                                var c = b.nodeName.toLowerCase();
                                return ("input" === c || "button" === c) && b.type === a
                            }
                        }
                        function j(a) {
                            return d(function(b) {
                                return b = +b,
                                    d(function(c, d) {
                                        for (var e, f = a([], c.length, b), g = f.length; g--; )
                                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                                    })
                            })
                        }
                        function k(a) {
                            return a && "undefined" != typeof a.getElementsByTagName && a
                        }
                        function l() {}
                        function m(a) {
                            for (var b = 0, c = a.length, d = ""; b < c; b++)
                                d += a[b].value;
                            return d
                        }
                        function n(a, b, c) {
                            var d = b.dir
                                , e = c && "parentNode" === d
                                , f = Q++;
                            return b.first ? function(b, c, f) {
                                for (; b = b[d]; )
                                    if (1 === b.nodeType || e)
                                        return a(b, c, f)
                            }
                                : function(b, c, g) {
                                    var h, i, j, k = [P, f];
                                    if (g) {
                                        for (; b = b[d]; )
                                            if ((1 === b.nodeType || e) && a(b, c, g))
                                                return !0
                                    } else
                                        for (; b = b[d]; )
                                            if (1 === b.nodeType || e) {
                                                if (j = b[N] || (b[N] = {}),
                                                        i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                                                    (h = i[d]) && h[0] === P && h[1] === f)
                                                    return k[2] = h[2];
                                                if (i[d] = k,
                                                        k[2] = a(b, c, g))
                                                    return !0
                                            }
                                }
                        }
                        function o(a) {
                            return a.length > 1 ? function(b, c, d) {
                                for (var e = a.length; e--; )
                                    if (!a[e](b, c, d))
                                        return !1;
                                return !0
                            }
                                : a[0]
                        }
                        function p(a, c, d) {
                            for (var e = 0, f = c.length; e < f; e++)
                                b(a, c[e], d);
                            return d
                        }
                        function q(a, b, c, d, e) {
                            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                                j && b.push(h)));
                            return g
                        }
                        function r(a, b, c, e, f, g) {
                            return e && !e[N] && (e = r(e)),
                            f && !f[N] && (f = r(f, g)),
                                d(function(d, g, h, i) {
                                    var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                                    if (c && c(s, t, h, i),
                                            e)
                                        for (j = q(t, n),
                                                 e(j, [], h, i),
                                                 k = j.length; k--; )
                                            (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                                    if (d) {
                                        if (f || a) {
                                            if (f) {
                                                for (j = [],
                                                         k = t.length; k--; )
                                                    (l = t[k]) && j.push(s[k] = l);
                                                f(null, t = [], j, i)
                                            }
                                            for (k = t.length; k--; )
                                                (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                                        }
                                    } else
                                        t = q(t === g ? t.splice(o, t.length) : t),
                                            f ? f(null, g, t, i) : $.apply(g, t)
                                })
                        }
                        function s(a) {
                            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                                return a === b
                            }, g, !0), j = n(function(a) {
                                return aa(b, a) > -1
                            }, g, !0), k = [function(a, c, d) {
                                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                                return b = null,
                                    e
                            }
                            ]; h < e; h++)
                                if (c = w.relative[a[h].type])
                                    k = [n(o(k), c)];
                                else {
                                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                                            c[N]) {
                                        for (d = ++h; d < e && !w.relative[a[d].type]; d++)
                                            ;
                                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                                value: " " === a[h - 2].type ? "*" : ""
                                            })).replace(ha, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                                    }
                                    k.push(c)
                                }
                            return o(k)
                        }
                        function t(a, c) {
                            var e = c.length > 0
                                , f = a.length > 0
                                , g = function(d, g, h, i, j) {
                                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                                for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                                    if (f && k) {
                                        for (l = 0,
                                             g || k.ownerDocument === G || (F(k),
                                                 h = !I); m = a[l++]; )
                                            if (m(k, g || G, h)) {
                                                i.push(k);
                                                break
                                            }
                                        j && (P = u)
                                    }
                                    e && ((k = !m && k) && n--,
                                    d && p.push(k))
                                }
                                if (n += o,
                                    e && o !== n) {
                                    for (l = 0; m = c[l++]; )
                                        m(p, r, g, h);
                                    if (d) {
                                        if (n > 0)
                                            for (; o--; )
                                                p[o] || r[o] || (r[o] = Y.call(i));
                                        r = q(r)
                                    }
                                    $.apply(i, r),
                                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                                }
                                return j && (P = u,
                                    C = s),
                                    p
                            };
                            return e ? d(g) : g
                        }
                        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
                            return a === b && (E = !0),
                                0
                        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
                            for (var c = 0, d = a.length; c < d; c++)
                                if (a[c] === b)
                                    return c;
                            return -1
                        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+","g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$","g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]","g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
                            ID: new RegExp("^#(" + da + ")"),
                            CLASS: new RegExp("^\\.(" + da + ")"),
                            TAG: new RegExp("^(" + da + "|[*])"),
                            ATTR: new RegExp("^" + ea),
                            PSEUDO: new RegExp("^" + fa),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)","i"),
                            bool: new RegExp("^(?:" + ba + ")$","i"),
                            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)","i")
                        }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = /'|\\/g, ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)","ig"), va = function(a, b, c) {
                            var d = "0x" + b - 65536;
                            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                        }, wa = function() {
                            F()
                        };
                        try {
                            $.apply(X = _.call(O.childNodes), O.childNodes),
                                X[O.childNodes.length].nodeType
                        } catch (a) {
                            $ = {
                                apply: X.length ? function(a, b) {
                                    Z.apply(a, _.call(b))
                                }
                                    : function(a, b) {
                                        for (var c = a.length, d = 0; a[c++] = b[d++]; )
                                            ;
                                        a.length = c - 1
                                    }
                            }
                        }
                        v = b.support = {},
                            y = b.isXML = function(a) {
                                var b = a && (a.ownerDocument || a).documentElement;
                                return !!b && "HTML" !== b.nodeName
                            }
                            ,
                            F = b.setDocument = function(a) {
                                var b, c, d = a ? a.ownerDocument || a : O;
                                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d,
                                    H = G.documentElement,
                                    I = !y(G),
                                (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)),
                                    v.attributes = e(function(a) {
                                        return a.className = "i",
                                            !a.getAttribute("className")
                                    }),
                                    v.getElementsByTagName = e(function(a) {
                                        return a.appendChild(G.createComment("")),
                                            !a.getElementsByTagName("*").length
                                    }),
                                    v.getElementsByClassName = qa.test(G.getElementsByClassName),
                                    v.getById = e(function(a) {
                                        return H.appendChild(a).id = N,
                                        !G.getElementsByName || !G.getElementsByName(N).length
                                    }),
                                    v.getById ? (w.find.ID = function(a, b) {
                                            if ("undefined" != typeof b.getElementById && I) {
                                                var c = b.getElementById(a);
                                                return c ? [c] : []
                                            }
                                        }
                                            ,
                                            w.filter.ID = function(a) {
                                                var b = a.replace(ua, va);
                                                return function(a) {
                                                    return a.getAttribute("id") === b
                                                }
                                            }
                                    ) : (delete w.find.ID,
                                            w.filter.ID = function(a) {
                                                var b = a.replace(ua, va);
                                                return function(a) {
                                                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                                    return c && c.value === b
                                                }
                                            }
                                    ),
                                    w.find.TAG = v.getElementsByTagName ? function(a, b) {
                                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                                    }
                                        : function(a, b) {
                                            var c, d = [], e = 0, f = b.getElementsByTagName(a);
                                            if ("*" === a) {
                                                for (; c = f[e++]; )
                                                    1 === c.nodeType && d.push(c);
                                                return d
                                            }
                                            return f
                                        }
                                    ,
                                    w.find.CLASS = v.getElementsByClassName && function(a, b) {
                                            if ("undefined" != typeof b.getElementsByClassName && I)
                                                return b.getElementsByClassName(a)
                                        }
                                    ,
                                    K = [],
                                    J = [],
                                (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                    a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                                    a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                                    a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                                    a.querySelectorAll(":checked").length || J.push(":checked"),
                                    a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                                }),
                                    e(function(a) {
                                        var b = G.createElement("input");
                                        b.setAttribute("type", "hidden"),
                                            a.appendChild(b).setAttribute("name", "D"),
                                        a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                                        a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                            a.querySelectorAll("*,:x"),
                                            J.push(",.*:")
                                    })),
                                (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                                    v.disconnectedMatch = L.call(a, "div"),
                                        L.call(a, "[s!='']:x"),
                                        K.push("!=", fa)
                                }),
                                    J = J.length && new RegExp(J.join("|")),
                                    K = K.length && new RegExp(K.join("|")),
                                    b = qa.test(H.compareDocumentPosition),
                                    M = b || qa.test(H.contains) ? function(a, b) {
                                        var c = 9 === a.nodeType ? a.documentElement : a
                                            , d = b && b.parentNode;
                                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                                    }
                                        : function(a, b) {
                                            if (b)
                                                for (; b = b.parentNode; )
                                                    if (b === a)
                                                        return !0;
                                            return !1
                                        }
                                    ,
                                    U = b ? function(a, b) {
                                        if (a === b)
                                            return E = !0,
                                                0;
                                        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                                            1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                                    }
                                        : function(a, b) {
                                            if (a === b)
                                                return E = !0,
                                                    0;
                                            var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                                            if (!e || !f)
                                                return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                                            if (e === f)
                                                return g(a, b);
                                            for (c = a; c = c.parentNode; )
                                                h.unshift(c);
                                            for (c = b; c = c.parentNode; )
                                                i.unshift(c);
                                            for (; h[d] === i[d]; )
                                                d++;
                                            return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
                                        }
                                    ,
                                    G) : G
                            }
                            ,
                            b.matches = function(a, c) {
                                return b(a, null, null, c)
                            }
                            ,
                            b.matchesSelector = function(a, c) {
                                if ((a.ownerDocument || a) !== G && F(a),
                                        c = c.replace(ka, "='$1']"),
                                    v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c)))
                                    try {
                                        var d = L.call(a, c);
                                        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                                            return d
                                    } catch (a) {}
                                return b(c, G, null, [a]).length > 0
                            }
                            ,
                            b.contains = function(a, b) {
                                return (a.ownerDocument || a) !== G && F(a),
                                    M(a, b)
                            }
                            ,
                            b.attr = function(a, b) {
                                (a.ownerDocument || a) !== G && F(a);
                                var c = w.attrHandle[b.toLowerCase()]
                                    , d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                            }
                            ,
                            b.error = function(a) {
                                throw new Error("Syntax error, unrecognized expression: " + a)
                            }
                            ,
                            b.uniqueSort = function(a) {
                                var b, c = [], d = 0, e = 0;
                                if (E = !v.detectDuplicates,
                                        D = !v.sortStable && a.slice(0),
                                        a.sort(U),
                                        E) {
                                    for (; b = a[e++]; )
                                        b === a[e] && (d = c.push(e));
                                    for (; d--; )
                                        a.splice(c[d], 1)
                                }
                                return D = null,
                                    a
                            }
                            ,
                            x = b.getText = function(a) {
                                var b, c = "", d = 0, e = a.nodeType;
                                if (e) {
                                    if (1 === e || 9 === e || 11 === e) {
                                        if ("string" == typeof a.textContent)
                                            return a.textContent;
                                        for (a = a.firstChild; a; a = a.nextSibling)
                                            c += x(a)
                                    } else if (3 === e || 4 === e)
                                        return a.nodeValue
                                } else
                                    for (; b = a[d++]; )
                                        c += x(b);
                                return c
                            }
                            ,
                            w = b.selectors = {
                                cacheLength: 50,
                                createPseudo: d,
                                match: na,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(a) {
                                        return a[1] = a[1].replace(ua, va),
                                            a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va),
                                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                            a.slice(0, 4)
                                    },
                                    CHILD: function(a) {
                                        return a[1] = a[1].toLowerCase(),
                                            "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                                            a
                                    },
                                    PSEUDO: function(a) {
                                        var b, c = !a[6] && a[2];
                                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                                                a[2] = c.slice(0, b)),
                                            a.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(a) {
                                        var b = a.replace(ua, va).toLowerCase();
                                        return "*" === a ? function() {
                                            return !0
                                        }
                                            : function(a) {
                                                return a.nodeName && a.nodeName.toLowerCase() === b
                                            }
                                    },
                                    CLASS: function(a) {
                                        var b = R[a + " "];
                                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                            })
                                    },
                                    ATTR: function(a, c, d) {
                                        return function(e) {
                                            var f = b.attr(e, a);
                                            return null == f ? "!=" === c : !c || (f += "",
                                                    "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                                        }
                                    },
                                    CHILD: function(a, b, c, d, e) {
                                        var f = "nth" !== a.slice(0, 3)
                                            , g = "last" !== a.slice(-4)
                                            , h = "of-type" === b;
                                        return 1 === d && 0 === e ? function(a) {
                                            return !!a.parentNode
                                        }
                                            : function(b, c, i) {
                                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                                                if (q) {
                                                    if (f) {
                                                        for (; p; ) {
                                                            for (m = b; m = m[p]; )
                                                                if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                                                    return !1;
                                                            o = p = "only" === a && !o && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (o = [g ? q.firstChild : q.lastChild],
                                                        g && s) {
                                                        for (m = q,
                                                                 l = m[N] || (m[N] = {}),
                                                                 k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                                                 j = k[a] || [],
                                                                 n = j[0] === P && j[1],
                                                                 t = n && j[2],
                                                                 m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); )
                                                            if (1 === m.nodeType && ++t && m === b) {
                                                                k[a] = [P, n, t];
                                                                break
                                                            }
                                                    } else if (s && (m = b,
                                                            l = m[N] || (m[N] = {}),
                                                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                                            j = k[a] || [],
                                                            n = j[0] === P && j[1],
                                                            t = n),
                                                        t === !1)
                                                        for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}),
                                                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                                            k[a] = [P, t]),
                                                        m !== b)); )
                                                            ;
                                                    return t -= e,
                                                    t === d || t % d === 0 && t / d >= 0
                                                }
                                            }
                                    },
                                    PSEUDO: function(a, c) {
                                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                                                w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                                                    for (var d, e = f(a, c), g = e.length; g--; )
                                                        d = aa(a, e[g]),
                                                            a[d] = !(b[d] = e[g])
                                                }) : function(a) {
                                                    return f(a, 0, e)
                                                }
                                        ) : f
                                    }
                                },
                                pseudos: {
                                    not: d(function(a) {
                                        var b = []
                                            , c = []
                                            , e = A(a.replace(ha, "$1"));
                                        return e[N] ? d(function(a, b, c, d) {
                                            for (var f, g = e(a, null, d, []), h = a.length; h--; )
                                                (f = g[h]) && (a[h] = !(b[h] = f))
                                        }) : function(a, d, f) {
                                            return b[0] = a,
                                                e(b, null, f, c),
                                                b[0] = null,
                                                !c.pop()
                                        }
                                    }),
                                    has: d(function(a) {
                                        return function(c) {
                                            return b(a, c).length > 0
                                        }
                                    }),
                                    contains: d(function(a) {
                                        return a = a.replace(ua, va),
                                            function(b) {
                                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                                            }
                                    }),
                                    lang: d(function(a) {
                                        return ma.test(a || "") || b.error("unsupported lang: " + a),
                                            a = a.replace(ua, va).toLowerCase(),
                                            function(b) {
                                                var c;
                                                do
                                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                                        return c = c.toLowerCase(),
                                                        c === a || 0 === c.indexOf(a + "-");
                                                while ((b = b.parentNode) && 1 === b.nodeType);return !1
                                            }
                                    }),
                                    target: function(b) {
                                        var c = a.location && a.location.hash;
                                        return c && c.slice(1) === b.id
                                    },
                                    root: function(a) {
                                        return a === H
                                    },
                                    focus: function(a) {
                                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                                    },
                                    enabled: function(a) {
                                        return a.disabled === !1
                                    },
                                    disabled: function(a) {
                                        return a.disabled === !0
                                    },
                                    checked: function(a) {
                                        var b = a.nodeName.toLowerCase();
                                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                                    },
                                    selected: function(a) {
                                        return a.parentNode && a.parentNode.selectedIndex,
                                        a.selected === !0
                                    },
                                    empty: function(a) {
                                        for (a = a.firstChild; a; a = a.nextSibling)
                                            if (a.nodeType < 6)
                                                return !1;
                                        return !0
                                    },
                                    parent: function(a) {
                                        return !w.pseudos.empty(a)
                                    },
                                    header: function(a) {
                                        return pa.test(a.nodeName)
                                    },
                                    input: function(a) {
                                        return oa.test(a.nodeName)
                                    },
                                    button: function(a) {
                                        var b = a.nodeName.toLowerCase();
                                        return "input" === b && "button" === a.type || "button" === b
                                    },
                                    text: function(a) {
                                        var b;
                                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                                    },
                                    first: j(function() {
                                        return [0]
                                    }),
                                    last: j(function(a, b) {
                                        return [b - 1]
                                    }),
                                    eq: j(function(a, b, c) {
                                        return [c < 0 ? c + b : c]
                                    }),
                                    even: j(function(a, b) {
                                        for (var c = 0; c < b; c += 2)
                                            a.push(c);
                                        return a
                                    }),
                                    odd: j(function(a, b) {
                                        for (var c = 1; c < b; c += 2)
                                            a.push(c);
                                        return a
                                    }),
                                    lt: j(function(a, b, c) {
                                        for (var d = c < 0 ? c + b : c; --d >= 0; )
                                            a.push(d);
                                        return a
                                    }),
                                    gt: j(function(a, b, c) {
                                        for (var d = c < 0 ? c + b : c; ++d < b; )
                                            a.push(d);
                                        return a
                                    })
                                }
                            },
                            w.pseudos.nth = w.pseudos.eq;
                        for (u in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        })
                            w.pseudos[u] = h(u);
                        for (u in {
                            submit: !0,
                            reset: !0
                        })
                            w.pseudos[u] = i(u);
                        return l.prototype = w.filters = w.pseudos,
                            w.setFilters = new l,
                            z = b.tokenize = function(a, c) {
                                var d, e, f, g, h, i, j, k = S[a + " "];
                                if (k)
                                    return c ? 0 : k.slice(0);
                                for (h = a,
                                         i = [],
                                         j = w.preFilter; h; ) {
                                    d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                                        i.push(f = [])),
                                        d = !1,
                                    (e = ja.exec(h)) && (d = e.shift(),
                                        f.push({
                                            value: d,
                                            type: e[0].replace(ha, " ")
                                        }),
                                        h = h.slice(d.length));
                                    for (g in w.filter)
                                        !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                                            f.push({
                                                value: d,
                                                type: g,
                                                matches: e
                                            }),
                                            h = h.slice(d.length));
                                    if (!d)
                                        break
                                }
                                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                            }
                            ,
                            A = b.compile = function(a, b) {
                                var c, d = [], e = [], f = T[a + " "];
                                if (!f) {
                                    for (b || (b = z(a)),
                                             c = b.length; c--; )
                                        f = s(b[c]),
                                            f[N] ? d.push(f) : e.push(f);
                                    f = T(a, t(e, d)),
                                        f.selector = a
                                }
                                return f
                            }
                            ,
                            B = b.select = function(a, b, c, d) {
                                var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                                if (c = c || [],
                                    1 === l.length) {
                                    if (f = l[0] = l[0].slice(0),
                                        f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                                        if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0],
                                                !b)
                                            return c;
                                        j && (b = b.parentNode),
                                            a = a.slice(f.shift().value.length)
                                    }
                                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                                        !w.relative[h = g.type]); )
                                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                                            if (f.splice(e, 1),
                                                    a = d.length && m(f),
                                                    !a)
                                                return $.apply(c, d),
                                                    c;
                                            break
                                        }
                                }
                                return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b),
                                    c
                            }
                            ,
                            v.sortStable = N.split("").sort(U).join("") === N,
                            v.detectDuplicates = !!E,
                            F(),
                            v.sortDetached = e(function(a) {
                                return 1 & a.compareDocumentPosition(G.createElement("div"))
                            }),
                        e(function(a) {
                            return a.innerHTML = "<a href='#'></a>",
                            "#" === a.firstChild.getAttribute("href")
                        }) || f("type|href|height|width", function(a, b, c) {
                            if (!c)
                                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                        }),
                        v.attributes && e(function(a) {
                            return a.innerHTML = "<input/>",
                                a.firstChild.setAttribute("value", ""),
                            "" === a.firstChild.getAttribute("value")
                        }) || f("value", function(a, b, c) {
                            if (!c && "input" === a.nodeName.toLowerCase())
                                return a.defaultValue
                        }),
                        e(function(a) {
                            return null == a.getAttribute("disabled")
                        }) || f(ba, function(a, b, c) {
                            var d;
                            if (!c)
                                return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                        }),
                            b
                    }(a);
                    na.find = sa,
                        na.expr = sa.selectors,
                        na.expr[":"] = na.expr.pseudos,
                        na.uniqueSort = na.unique = sa.uniqueSort,
                        na.text = sa.getText,
                        na.isXMLDoc = sa.isXML,
                        na.contains = sa.contains;
                    var ta = function(a, b, c) {
                        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                            if (1 === a.nodeType) {
                                if (e && na(a).is(c))
                                    break;
                                d.push(a)
                            }
                        return d
                    }
                        , ua = function(a, b) {
                        for (var c = []; a; a = a.nextSibling)
                            1 === a.nodeType && a !== b && c.push(a);
                        return c
                    }
                        , va = na.expr.match.needsContext
                        , wa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                        , xa = /^.[^:#\[\.,]*$/;
                    na.filter = function(a, b, c) {
                        var d = b[0];
                        return c && (a = ":not(" + a + ")"),
                            1 === b.length && 1 === d.nodeType ? na.find.matchesSelector(d, a) ? [d] : [] : na.find.matches(a, na.grep(b, function(a) {
                                return 1 === a.nodeType
                            }))
                    }
                        ,
                        na.fn.extend({
                            find: function(a) {
                                var b, c = [], d = this, e = d.length;
                                if ("string" != typeof a)
                                    return this.pushStack(na(a).filter(function() {
                                        for (b = 0; b < e; b++)
                                            if (na.contains(d[b], this))
                                                return !0
                                    }));
                                for (b = 0; b < e; b++)
                                    na.find(a, d[b], c);
                                return c = this.pushStack(e > 1 ? na.unique(c) : c),
                                    c.selector = this.selector ? this.selector + " " + a : a,
                                    c
                            },
                            filter: function(a) {
                                return this.pushStack(d(this, a || [], !1))
                            },
                            not: function(a) {
                                return this.pushStack(d(this, a || [], !0))
                            },
                            is: function(a) {
                                return !!d(this, "string" == typeof a && va.test(a) ? na(a) : a || [], !1).length
                            }
                        });
                    var ya, za = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Aa = na.fn.init = function(a, b, c) {
                            var d, e;
                            if (!a)
                                return this;
                            if (c = c || ya,
                                "string" == typeof a) {
                                if (d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : za.exec(a),
                                    !d || !d[1] && b)
                                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                                if (d[1]) {
                                    if (b = b instanceof na ? b[0] : b,
                                            na.merge(this, na.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : da, !0)),
                                        wa.test(d[1]) && na.isPlainObject(b))
                                        for (d in b)
                                            na.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                                    return this
                                }
                                if (e = da.getElementById(d[2]),
                                    e && e.parentNode) {
                                    if (e.id !== d[2])
                                        return ya.find(a);
                                    this.length = 1,
                                        this[0] = e
                                }
                                return this.context = da,
                                    this.selector = a,
                                    this
                            }
                            return a.nodeType ? (this.context = this[0] = a,
                                this.length = 1,
                                this) : na.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(na) : (void 0 !== a.selector && (this.selector = a.selector,
                                this.context = a.context),
                                na.makeArray(a, this))
                        }
                    ;
                    Aa.prototype = na.fn,
                        ya = na(da);
                    var Ba = /^(?:parents|prev(?:Until|All))/
                        , Ca = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                    na.fn.extend({
                        has: function(a) {
                            var b, c = na(a, this), d = c.length;
                            return this.filter(function() {
                                for (b = 0; b < d; b++)
                                    if (na.contains(this, c[b]))
                                        return !0
                            })
                        },
                        closest: function(a, b) {
                            for (var c, d = 0, e = this.length, f = [], g = va.test(a) || "string" != typeof a ? na(a, b || this.context) : 0; d < e; d++)
                                for (c = this[d]; c && c !== b; c = c.parentNode)
                                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && na.find.matchesSelector(c, a))) {
                                        f.push(c);
                                        break
                                    }
                            return this.pushStack(f.length > 1 ? na.uniqueSort(f) : f)
                        },
                        index: function(a) {
                            return a ? "string" == typeof a ? na.inArray(this[0], na(a)) : na.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(a, b) {
                            return this.pushStack(na.uniqueSort(na.merge(this.get(), na(a, b))))
                        },
                        addBack: function(a) {
                            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                        }
                    }),
                        na.each({
                            parent: function(a) {
                                var b = a.parentNode;
                                return b && 11 !== b.nodeType ? b : null
                            },
                            parents: function(a) {
                                return ta(a, "parentNode")
                            },
                            parentsUntil: function(a, b, c) {
                                return ta(a, "parentNode", c)
                            },
                            next: function(a) {
                                return e(a, "nextSibling")
                            },
                            prev: function(a) {
                                return e(a, "previousSibling")
                            },
                            nextAll: function(a) {
                                return ta(a, "nextSibling")
                            },
                            prevAll: function(a) {
                                return ta(a, "previousSibling")
                            },
                            nextUntil: function(a, b, c) {
                                return ta(a, "nextSibling", c)
                            },
                            prevUntil: function(a, b, c) {
                                return ta(a, "previousSibling", c)
                            },
                            siblings: function(a) {
                                return ua((a.parentNode || {}).firstChild, a)
                            },
                            children: function(a) {
                                return ua(a.firstChild)
                            },
                            contents: function(a) {
                                return na.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : na.merge([], a.childNodes)
                            }
                        }, function(a, b) {
                            na.fn[a] = function(c, d) {
                                var e = na.map(this, b, c);
                                return "Until" !== a.slice(-5) && (d = c),
                                d && "string" == typeof d && (e = na.filter(d, e)),
                                this.length > 1 && (Ca[a] || (e = na.uniqueSort(e)),
                                Ba.test(a) && (e = e.reverse())),
                                    this.pushStack(e)
                            }
                        });
                    var Da = /\S+/g;
                    na.Callbacks = function(a) {
                        a = "string" == typeof a ? f(a) : na.extend({}, a);
                        var b, c, d, e, g = [], h = [], i = -1, j = function() {
                            for (e = a.once,
                                     d = b = !0; h.length; i = -1)
                                for (c = h.shift(); ++i < g.length; )
                                    g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length,
                                        c = !1);
                            a.memory || (c = !1),
                                b = !1,
                            e && (g = c ? [] : "")
                        }, k = {
                            add: function() {
                                return g && (c && !b && (i = g.length - 1,
                                    h.push(c)),
                                    function b(c) {
                                        na.each(c, function(c, d) {
                                            na.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== na.type(d) && b(d)
                                        })
                                    }(arguments),
                                c && !b && j()),
                                    this
                            },
                            remove: function() {
                                return na.each(arguments, function(a, b) {
                                    for (var c; (c = na.inArray(b, g, c)) > -1; )
                                        g.splice(c, 1),
                                        c <= i && i--
                                }),
                                    this
                            },
                            has: function(a) {
                                return a ? na.inArray(a, g) > -1 : g.length > 0
                            },
                            empty: function() {
                                return g && (g = []),
                                    this
                            },
                            disable: function() {
                                return e = h = [],
                                    g = c = "",
                                    this
                            },
                            disabled: function() {
                                return !g
                            },
                            lock: function() {
                                return e = !0,
                                c || k.disable(),
                                    this
                            },
                            locked: function() {
                                return !!e
                            },
                            fireWith: function(a, c) {
                                return e || (c = c || [],
                                    c = [a, c.slice ? c.slice() : c],
                                    h.push(c),
                                b || j()),
                                    this
                            },
                            fire: function() {
                                return k.fireWith(this, arguments),
                                    this
                            },
                            fired: function() {
                                return !!d
                            }
                        };
                        return k
                    }
                        ,
                        na.extend({
                            Deferred: function(a) {
                                var b = [["resolve", "done", na.Callbacks("once memory"), "resolved"], ["reject", "fail", na.Callbacks("once memory"), "rejected"], ["notify", "progress", na.Callbacks("memory")]]
                                    , c = "pending"
                                    , d = {
                                    state: function() {
                                        return c
                                    },
                                    always: function() {
                                        return e.done(arguments).fail(arguments),
                                            this
                                    },
                                    then: function() {
                                        var a = arguments;
                                        return na.Deferred(function(c) {
                                            na.each(b, function(b, f) {
                                                var g = na.isFunction(a[b]) && a[b];
                                                e[f[1]](function() {
                                                    var a = g && g.apply(this, arguments);
                                                    a && na.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                                })
                                            }),
                                                a = null
                                        }).promise()
                                    },
                                    promise: function(a) {
                                        return null != a ? na.extend(a, d) : d
                                    }
                                }
                                    , e = {};
                                return d.pipe = d.then,
                                    na.each(b, function(a, f) {
                                        var g = f[2]
                                            , h = f[3];
                                        d[f[1]] = g.add,
                                        h && g.add(function() {
                                            c = h
                                        }, b[1 ^ a][2].disable, b[2][2].lock),
                                            e[f[0]] = function() {
                                                return e[f[0] + "With"](this === e ? d : this, arguments),
                                                    this
                                            }
                                            ,
                                            e[f[0] + "With"] = g.fireWith
                                    }),
                                    d.promise(e),
                                a && a.call(e, e),
                                    e
                            },
                            when: function(a) {
                                var b, c, d, e = 0, f = ea.call(arguments), g = f.length, h = 1 !== g || a && na.isFunction(a.promise) ? g : 0, i = 1 === h ? a : na.Deferred(), j = function(a, c, d) {
                                    return function(e) {
                                        c[a] = this,
                                            d[a] = arguments.length > 1 ? ea.call(arguments) : e,
                                            d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                                    }
                                };
                                if (g > 1)
                                    for (b = new Array(g),
                                             c = new Array(g),
                                             d = new Array(g); e < g; e++)
                                        f[e] && na.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
                                return h || i.resolveWith(d, f),
                                    i.promise()
                            }
                        });
                    var Ea;
                    na.fn.ready = function(a) {
                        return na.ready.promise().done(a),
                            this
                    }
                        ,
                        na.extend({
                            isReady: !1,
                            readyWait: 1,
                            holdReady: function(a) {
                                a ? na.readyWait++ : na.ready(!0)
                            },
                            ready: function(a) {
                                (a === !0 ? --na.readyWait : na.isReady) || (na.isReady = !0,
                                a !== !0 && --na.readyWait > 0 || (Ea.resolveWith(da, [na]),
                                na.fn.triggerHandler && (na(da).triggerHandler("ready"),
                                    na(da).off("ready"))))
                            }
                        }),
                        na.ready.promise = function(b) {
                            if (!Ea)
                                if (Ea = na.Deferred(),
                                    "complete" === da.readyState || "loading" !== da.readyState && !da.documentElement.doScroll)
                                    a.setTimeout(na.ready);
                                else if (da.addEventListener)
                                    da.addEventListener("DOMContentLoaded", h),
                                        a.addEventListener("load", h);
                                else {
                                    da.attachEvent("onreadystatechange", h),
                                        a.attachEvent("onload", h);
                                    var c = !1;
                                    try {
                                        c = null == a.frameElement && da.documentElement
                                    } catch (a) {}
                                    c && c.doScroll && !function b() {
                                        if (!na.isReady) {
                                            try {
                                                c.doScroll("left")
                                            } catch (c) {
                                                return a.setTimeout(b, 50)
                                            }
                                            g(),
                                                na.ready()
                                        }
                                    }()
                                }
                            return Ea.promise(b)
                        }
                        ,
                        na.ready.promise();
                    var Fa;
                    for (Fa in na(la))
                        break;
                    la.ownFirst = "0" === Fa,
                        la.inlineBlockNeedsLayout = !1,
                        na(function() {
                            var a, b, c, d;
                            c = da.getElementsByTagName("body")[0],
                            c && c.style && (b = da.createElement("div"),
                                d = da.createElement("div"),
                                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                                c.appendChild(d).appendChild(b),
                            "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                                la.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
                            a && (c.style.zoom = 1)),
                                c.removeChild(d))
                        }),
                        function() {
                            var a = da.createElement("div");
                            la.deleteExpando = !0;
                            try {
                                delete a.test
                            } catch (a) {
                                la.deleteExpando = !1
                            }
                            a = null
                        }();
                    var Ga = function(a) {
                        var b = na.noData[(a.nodeName + " ").toLowerCase()]
                            , c = +a.nodeType || 1;
                        return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
                    }
                        , Ha = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                        , Ia = /([A-Z])/g;
                    na.extend({
                        cache: {},
                        noData: {
                            "applet ": !0,
                            "embed ": !0,
                            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                        },
                        hasData: function(a) {
                            return a = a.nodeType ? na.cache[a[na.expando]] : a[na.expando],
                            !!a && !j(a)
                        },
                        data: function(a, b, c) {
                            return k(a, b, c)
                        },
                        removeData: function(a, b) {
                            return l(a, b)
                        },
                        _data: function(a, b, c) {
                            return k(a, b, c, !0)
                        },
                        _removeData: function(a, b) {
                            return l(a, b, !0)
                        }
                    }),
                        na.fn.extend({
                            data: function(a, b) {
                                var c, d, e, f = this[0], g = f && f.attributes;
                                if (void 0 === a) {
                                    if (this.length && (e = na.data(f),
                                        1 === f.nodeType && !na._data(f, "parsedAttrs"))) {
                                        for (c = g.length; c--; )
                                            g[c] && (d = g[c].name,
                                            0 === d.indexOf("data-") && (d = na.camelCase(d.slice(5)),
                                                i(f, d, e[d])));
                                        na._data(f, "parsedAttrs", !0)
                                    }
                                    return e
                                }
                                return "object" == typeof a ? this.each(function() {
                                    na.data(this, a)
                                }) : arguments.length > 1 ? this.each(function() {
                                    na.data(this, a, b)
                                }) : f ? i(f, a, na.data(f, a)) : void 0
                            },
                            removeData: function(a) {
                                return this.each(function() {
                                    na.removeData(this, a)
                                })
                            }
                        }),
                        na.extend({
                            queue: function(a, b, c) {
                                var d;
                                if (a)
                                    return b = (b || "fx") + "queue",
                                        d = na._data(a, b),
                                    c && (!d || na.isArray(c) ? d = na._data(a, b, na.makeArray(c)) : d.push(c)),
                                    d || []
                            },
                            dequeue: function(a, b) {
                                b = b || "fx";
                                var c = na.queue(a, b)
                                    , d = c.length
                                    , e = c.shift()
                                    , f = na._queueHooks(a, b)
                                    , g = function() {
                                    na.dequeue(a, b)
                                };
                                "inprogress" === e && (e = c.shift(),
                                    d--),
                                e && ("fx" === b && c.unshift("inprogress"),
                                    delete f.stop,
                                    e.call(a, g, f)),
                                !d && f && f.empty.fire()
                            },
                            _queueHooks: function(a, b) {
                                var c = b + "queueHooks";
                                return na._data(a, c) || na._data(a, c, {
                                        empty: na.Callbacks("once memory").add(function() {
                                            na._removeData(a, b + "queue"),
                                                na._removeData(a, c)
                                        })
                                    })
                            }
                        }),
                        na.fn.extend({
                            queue: function(a, b) {
                                var c = 2;
                                return "string" != typeof a && (b = a,
                                    a = "fx",
                                    c--),
                                    arguments.length < c ? na.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                                        var c = na.queue(this, a, b);
                                        na._queueHooks(this, a),
                                        "fx" === a && "inprogress" !== c[0] && na.dequeue(this, a)
                                    })
                            },
                            dequeue: function(a) {
                                return this.each(function() {
                                    na.dequeue(this, a)
                                })
                            },
                            clearQueue: function(a) {
                                return this.queue(a || "fx", [])
                            },
                            promise: function(a, b) {
                                var c, d = 1, e = na.Deferred(), f = this, g = this.length, h = function() {
                                    --d || e.resolveWith(f, [f])
                                };
                                for ("string" != typeof a && (b = a,
                                    a = void 0),
                                         a = a || "fx"; g--; )
                                    c = na._data(f[g], a + "queueHooks"),
                                    c && c.empty && (d++,
                                        c.empty.add(h));
                                return h(),
                                    e.promise(b)
                            }
                        }),
                        function() {
                            var a;
                            la.shrinkWrapBlocks = function() {
                                if (null != a)
                                    return a;
                                a = !1;
                                var b, c, d;
                                return c = da.getElementsByTagName("body")[0],
                                    c && c.style ? (b = da.createElement("div"),
                                        d = da.createElement("div"),
                                        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                                        c.appendChild(d).appendChild(b),
                                    "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                                        b.appendChild(da.createElement("div")).style.width = "5px",
                                        a = 3 !== b.offsetWidth),
                                        c.removeChild(d),
                                        a) : void 0
                            }
                        }();
                    var Ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                        , Ka = new RegExp("^(?:([+-])=|)(" + Ja + ")([a-z%]*)$","i")
                        , La = ["Top", "Right", "Bottom", "Left"]
                        , Ma = function(a, b) {
                        return a = b || a,
                        "none" === na.css(a, "display") || !na.contains(a.ownerDocument, a)
                    }
                        , Na = function(a, b, c, d, e, f, g) {
                        var h = 0
                            , i = a.length
                            , j = null == c;
                        if ("object" === na.type(c)) {
                            e = !0;
                            for (h in c)
                                Na(a, b, h, c[h], !0, f, g)
                        } else if (void 0 !== d && (e = !0,
                            na.isFunction(d) || (g = !0),
                            j && (g ? (b.call(a, d),
                                b = null) : (j = b,
                                    b = function(a, b, c) {
                                        return j.call(na(a), c)
                                    }
                            )),
                                b))
                            for (; h < i; h++)
                                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
                    }
                        , Oa = /^(?:checkbox|radio)$/i
                        , Pa = /<([\w:-]+)/
                        , Qa = /^$|\/(?:java|ecma)script/i
                        , Ra = /^\s+/
                        , Sa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
                    !function() {
                        var a = da.createElement("div")
                            , b = da.createDocumentFragment()
                            , c = da.createElement("input");
                        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                            la.leadingWhitespace = 3 === a.firstChild.nodeType,
                            la.tbody = !a.getElementsByTagName("tbody").length,
                            la.htmlSerialize = !!a.getElementsByTagName("link").length,
                            la.html5Clone = "<:nav></:nav>" !== da.createElement("nav").cloneNode(!0).outerHTML,
                            c.type = "checkbox",
                            c.checked = !0,
                            b.appendChild(c),
                            la.appendChecked = c.checked,
                            a.innerHTML = "<textarea>x</textarea>",
                            la.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
                            b.appendChild(a),
                            c = da.createElement("input"),
                            c.setAttribute("type", "radio"),
                            c.setAttribute("checked", "checked"),
                            c.setAttribute("name", "t"),
                            a.appendChild(c),
                            la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
                            la.noCloneEvent = !!a.addEventListener,
                            a[na.expando] = 1,
                            la.attributes = !a.getAttribute(na.expando)
                    }();
                    var Ta = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        area: [1, "<map>", "</map>"],
                        param: [1, "<object>", "</object>"],
                        thead: [1, "<table>", "</table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: la.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                    };
                    Ta.optgroup = Ta.option,
                        Ta.tbody = Ta.tfoot = Ta.colgroup = Ta.caption = Ta.thead,
                        Ta.th = Ta.td;
                    var Ua = /<|&#?\w+;/
                        , Va = /<tbody/i;
                    !function() {
                        var b, c, d = da.createElement("div");
                        for (b in {
                            submit: !0,
                            change: !0,
                            focusin: !0
                        })
                            c = "on" + b,
                            (la[b] = c in a) || (d.setAttribute(c, "t"),
                                la[b] = d.attributes[c].expando === !1);
                        d = null
                    }();
                    var Wa = /^(?:input|select|textarea)$/i
                        , Xa = /^key/
                        , Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                        , Za = /^(?:focusinfocus|focusoutblur)$/
                        , $a = /^([^.]*)(?:\.(.+)|)/;
                    na.event = {
                        global: {},
                        add: function(a, b, c, d, e) {
                            var f, g, h, i, j, k, l, m, n, o, p, q = na._data(a);
                            if (q) {
                                for (c.handler && (i = c,
                                    c = i.handler,
                                    e = i.selector),
                                     c.guid || (c.guid = na.guid++),
                                     (g = q.events) || (g = q.events = {}),
                                     (k = q.handle) || (k = q.handle = function(a) {
                                         return "undefined" == typeof na || a && na.event.triggered === a.type ? void 0 : na.event.dispatch.apply(k.elem, arguments)
                                     }
                                         ,
                                         k.elem = a),
                                         b = (b || "").match(Da) || [""],
                                         h = b.length; h--; )
                                    f = $a.exec(b[h]) || [],
                                        n = p = f[1],
                                        o = (f[2] || "").split(".").sort(),
                                    n && (j = na.event.special[n] || {},
                                        n = (e ? j.delegateType : j.bindType) || n,
                                        j = na.event.special[n] || {},
                                        l = na.extend({
                                            type: n,
                                            origType: p,
                                            data: d,
                                            handler: c,
                                            guid: c.guid,
                                            selector: e,
                                            needsContext: e && na.expr.match.needsContext.test(e),
                                            namespace: o.join(".")
                                        }, i),
                                    (m = g[n]) || (m = g[n] = [],
                                        m.delegateCount = 0,
                                    j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                                    j.add && (j.add.call(a, l),
                                    l.handler.guid || (l.handler.guid = c.guid)),
                                        e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                                        na.event.global[n] = !0);
                                a = null
                            }
                        },
                        remove: function(a, b, c, d, e) {
                            var f, g, h, i, j, k, l, m, n, o, p, q = na.hasData(a) && na._data(a);
                            if (q && (k = q.events)) {
                                for (b = (b || "").match(Da) || [""],
                                         j = b.length; j--; )
                                    if (h = $a.exec(b[j]) || [],
                                            n = p = h[1],
                                            o = (h[2] || "").split(".").sort(),
                                            n) {
                                        for (l = na.event.special[n] || {},
                                                 n = (d ? l.delegateType : l.bindType) || n,
                                                 m = k[n] || [],
                                                 h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                                 i = f = m.length; f--; )
                                            g = m[f],
                                            !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                                            g.selector && m.delegateCount--,
                                            l.remove && l.remove.call(a, g));
                                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || na.removeEvent(a, n, q.handle),
                                            delete k[n])
                                    } else
                                        for (n in k)
                                            na.event.remove(a, n + b[j], c, d, !0);
                                na.isEmptyObject(k) && (delete q.handle,
                                    na._removeData(a, "events"))
                            }
                        },
                        trigger: function(b, c, d, e) {
                            var f, g, h, i, j, k, l, m = [d || da], n = ka.call(b, "type") ? b.type : b, o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
                            if (h = k = d = d || da,
                                3 !== d.nodeType && 8 !== d.nodeType && !Za.test(n + na.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."),
                                    n = o.shift(),
                                    o.sort()),
                                    g = n.indexOf(":") < 0 && "on" + n,
                                    b = b[na.expando] ? b : new na.Event(n,"object" == typeof b && b),
                                    b.isTrigger = e ? 2 : 3,
                                    b.namespace = o.join("."),
                                    b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                                    b.result = void 0,
                                b.target || (b.target = d),
                                    c = null == c ? [b] : na.makeArray(c, [b]),
                                    j = na.event.special[n] || {},
                                e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                                if (!e && !j.noBubble && !na.isWindow(d)) {
                                    for (i = j.delegateType || n,
                                         Za.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                                        m.push(h),
                                            k = h;
                                    k === (d.ownerDocument || da) && m.push(k.defaultView || k.parentWindow || a)
                                }
                                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                                    b.type = l > 1 ? i : j.bindType || n,
                                        f = (na._data(h, "events") || {})[b.type] && na._data(h, "handle"),
                                    f && f.apply(h, c),
                                        f = g && h[g],
                                    f && f.apply && Ga(h) && (b.result = f.apply(h, c),
                                    b.result === !1 && b.preventDefault());
                                if (b.type = n,
                                    !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && Ga(d) && g && d[n] && !na.isWindow(d)) {
                                    k = d[g],
                                    k && (d[g] = null),
                                        na.event.triggered = n;
                                    try {
                                        d[n]()
                                    } catch (a) {}
                                    na.event.triggered = void 0,
                                    k && (d[g] = k)
                                }
                                return b.result
                            }
                        },
                        dispatch: function(a) {
                            a = na.event.fix(a);
                            var b, c, d, e, f, g = [], h = ea.call(arguments), i = (na._data(this, "events") || {})[a.type] || [], j = na.event.special[a.type] || {};
                            if (h[0] = a,
                                    a.delegateTarget = this,
                                !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                                for (g = na.event.handlers.call(this, a, i),
                                         b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                                    for (a.currentTarget = e.elem,
                                             c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                                        a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f,
                                            a.data = f.data,
                                            d = ((na.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h),
                                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                                            a.stopPropagation()));
                                return j.postDispatch && j.postDispatch.call(this, a),
                                    a.result
                            }
                        },
                        handlers: function(a, b) {
                            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                                for (; i != this; i = i.parentNode || this)
                                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                                        for (d = [],
                                                 c = 0; c < h; c++)
                                            f = b[c],
                                                e = f.selector + " ",
                                            void 0 === d[e] && (d[e] = f.needsContext ? na(e, this).index(i) > -1 : na.find(e, this, null, [i]).length),
                                            d[e] && d.push(f);
                                        d.length && g.push({
                                            elem: i,
                                            handlers: d
                                        })
                                    }
                            return h < b.length && g.push({
                                elem: this,
                                handlers: b.slice(h)
                            }),
                                g
                        },
                        fix: function(a) {
                            if (a[na.expando])
                                return a;
                            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                            for (g || (this.fixHooks[e] = g = Ya.test(e) ? this.mouseHooks : Xa.test(e) ? this.keyHooks : {}),
                                     d = g.props ? this.props.concat(g.props) : this.props,
                                     a = new na.Event(f),
                                     b = d.length; b--; )
                                c = d[b],
                                    a[c] = f[c];
                            return a.target || (a.target = f.srcElement || da),
                            3 === a.target.nodeType && (a.target = a.target.parentNode),
                                a.metaKey = !!a.metaKey,
                                g.filter ? g.filter(a, f) : a
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(a, b) {
                                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                                    a
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(a, b) {
                                var c, d, e, f = b.button, g = b.fromElement;
                                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || da,
                                    e = d.documentElement,
                                    c = d.body,
                                    a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                                    a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                                    a
                            }
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    if (this !== u() && this.focus)
                                        try {
                                            return this.focus(),
                                                !1
                                        } catch (a) {}
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    if (this === u() && this.blur)
                                        return this.blur(),
                                            !1
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    if (na.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                        return this.click(),
                                            !1
                                },
                                _default: function(a) {
                                    return na.nodeName(a.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(a) {
                                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                                }
                            }
                        },
                        simulate: function(a, b, c) {
                            var d = na.extend(new na.Event, c, {
                                type: a,
                                isSimulated: !0
                            });
                            na.event.trigger(d, null, b),
                            d.isDefaultPrevented() && c.preventDefault()
                        }
                    },
                        na.removeEvent = da.removeEventListener ? function(a, b, c) {
                            a.removeEventListener && a.removeEventListener(b, c)
                        }
                            : function(a, b, c) {
                                var d = "on" + b;
                                a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
                                    a.detachEvent(d, c))
                            }
                        ,
                        na.Event = function(a, b) {
                            return this instanceof na.Event ? (a && a.type ? (this.originalEvent = a,
                                this.type = a.type,
                                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? s : t) : this.type = a,
                            b && na.extend(this, b),
                                this.timeStamp = a && a.timeStamp || na.now(),
                                void (this[na.expando] = !0)) : new na.Event(a,b)
                        }
                        ,
                        na.Event.prototype = {
                            constructor: na.Event,
                            isDefaultPrevented: t,
                            isPropagationStopped: t,
                            isImmediatePropagationStopped: t,
                            preventDefault: function() {
                                var a = this.originalEvent;
                                this.isDefaultPrevented = s,
                                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                            },
                            stopPropagation: function() {
                                var a = this.originalEvent;
                                this.isPropagationStopped = s,
                                a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
                                    a.cancelBubble = !0)
                            },
                            stopImmediatePropagation: function() {
                                var a = this.originalEvent;
                                this.isImmediatePropagationStopped = s,
                                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                                    this.stopPropagation()
                            }
                        },
                        na.each({
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            pointerenter: "pointerover",
                            pointerleave: "pointerout"
                        }, function(a, b) {
                            na.event.special[a] = {
                                delegateType: b,
                                bindType: b,
                                handle: function(a) {
                                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                                    return e && (e === d || na.contains(d, e)) || (a.type = f.origType,
                                        c = f.handler.apply(this, arguments),
                                        a.type = b),
                                        c
                                }
                            }
                        }),
                    la.submit || (na.event.special.submit = {
                        setup: function() {
                            return !na.nodeName(this, "form") && void na.event.add(this, "click._submit keypress._submit", function(a) {
                                    var b = a.target
                                        , c = na.nodeName(b, "input") || na.nodeName(b, "button") ? na.prop(b, "form") : void 0;
                                    c && !na._data(c, "submit") && (na.event.add(c, "submit._submit", function(a) {
                                        a._submitBubble = !0
                                    }),
                                        na._data(c, "submit", !0))
                                })
                        },
                        postDispatch: function(a) {
                            a._submitBubble && (delete a._submitBubble,
                            this.parentNode && !a.isTrigger && na.event.simulate("submit", this.parentNode, a))
                        },
                        teardown: function() {
                            return !na.nodeName(this, "form") && void na.event.remove(this, "._submit")
                        }
                    }),
                    la.change || (na.event.special.change = {
                        setup: function() {
                            return Wa.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (na.event.add(this, "propertychange._change", function(a) {
                                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                            }),
                                na.event.add(this, "click._change", function(a) {
                                    this._justChanged && !a.isTrigger && (this._justChanged = !1),
                                        na.event.simulate("change", this, a)
                                })),
                                !1) : void na.event.add(this, "beforeactivate._change", function(a) {
                                var b = a.target;
                                Wa.test(b.nodeName) && !na._data(b, "change") && (na.event.add(b, "change._change", function(a) {
                                    !this.parentNode || a.isSimulated || a.isTrigger || na.event.simulate("change", this.parentNode, a)
                                }),
                                    na._data(b, "change", !0))
                            })
                        },
                        handle: function(a) {
                            var b = a.target;
                            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)
                                return a.handleObj.handler.apply(this, arguments)
                        },
                        teardown: function() {
                            return na.event.remove(this, "._change"),
                                !Wa.test(this.nodeName)
                        }
                    }),
                    la.focusin || na.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, function(a, b) {
                        var c = function(a) {
                            na.event.simulate(b, a.target, na.event.fix(a))
                        };
                        na.event.special[b] = {
                            setup: function() {
                                var d = this.ownerDocument || this
                                    , e = na._data(d, b);
                                e || d.addEventListener(a, c, !0),
                                    na._data(d, b, (e || 0) + 1)
                            },
                            teardown: function() {
                                var d = this.ownerDocument || this
                                    , e = na._data(d, b) - 1;
                                e ? na._data(d, b, e) : (d.removeEventListener(a, c, !0),
                                    na._removeData(d, b))
                            }
                        }
                    }),
                        na.fn.extend({
                            on: function(a, b, c, d) {
                                return v(this, a, b, c, d)
                            },
                            one: function(a, b, c, d) {
                                return v(this, a, b, c, d, 1)
                            },
                            off: function(a, b, c) {
                                var d, e;
                                if (a && a.preventDefault && a.handleObj)
                                    return d = a.handleObj,
                                        na(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                                        this;
                                if ("object" == typeof a) {
                                    for (e in a)
                                        this.off(e, b, a[e]);
                                    return this
                                }
                                return b !== !1 && "function" != typeof b || (c = b,
                                    b = void 0),
                                c === !1 && (c = t),
                                    this.each(function() {
                                        na.event.remove(this, a, c, b)
                                    })
                            },
                            trigger: function(a, b) {
                                return this.each(function() {
                                    na.event.trigger(a, b, this)
                                })
                            },
                            triggerHandler: function(a, b) {
                                var c = this[0];
                                if (c)
                                    return na.event.trigger(a, b, c, !0)
                            }
                        });
                    var _a = / jQuery\d+="(?:null|\d+)"/g
                        , ab = new RegExp("<(?:" + Sa + ")[\\s/>]","i")
                        , bb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                        , cb = /<script|<style|<link/i
                        , db = /checked\s*(?:[^=]|=\s*.checked.)/i
                        , eb = /^true\/(.*)/
                        , fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
                        , gb = n(da)
                        , hb = gb.appendChild(da.createElement("div"));
                    na.extend({
                        htmlPrefilter: function(a) {
                            return a.replace(bb, "<$1></$2>")
                        },
                        clone: function(a, b, c) {
                            var d, e, f, g, h, i = na.contains(a.ownerDocument, a);
                            if (la.html5Clone || na.isXMLDoc(a) || !ab.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (hb.innerHTML = a.outerHTML,
                                    hb.removeChild(f = hb.firstChild)),
                                    !(la.noCloneEvent && la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || na.isXMLDoc(a)))
                                for (d = o(f),
                                         h = o(a),
                                         g = 0; null != (e = h[g]); ++g)
                                    d[g] && A(e, d[g]);
                            if (b)
                                if (c)
                                    for (h = h || o(a),
                                             d = d || o(f),
                                             g = 0; null != (e = h[g]); g++)
                                        z(e, d[g]);
                                else
                                    z(a, f);
                            return d = o(f, "script"),
                            d.length > 0 && p(d, !i && o(a, "script")),
                                d = h = e = null,
                                f
                        },
                        cleanData: function(a, b) {
                            for (var c, d, e, f, g = 0, h = na.expando, i = na.cache, j = la.attributes, k = na.event.special; null != (c = a[g]); g++)
                                if ((b || Ga(c)) && (e = c[h],
                                        f = e && i[e])) {
                                    if (f.events)
                                        for (d in f.events)
                                            k[d] ? na.event.remove(c, d) : na.removeEvent(c, d, f.handle);
                                    i[e] && (delete i[e],
                                        j || "undefined" == typeof c.removeAttribute ? c[h] = void 0 : c.removeAttribute(h),
                                        ca.push(e))
                                }
                        }
                    }),
                        na.fn.extend({
                            domManip: B,
                            detach: function(a) {
                                return C(this, a, !0)
                            },
                            remove: function(a) {
                                return C(this, a)
                            },
                            text: function(a) {
                                return Na(this, function(a) {
                                    return void 0 === a ? na.text(this) : this.empty().append((this[0] && this[0].ownerDocument || da).createTextNode(a))
                                }, null, a, arguments.length)
                            },
                            append: function() {
                                return B(this, arguments, function(a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = w(this, a);
                                        b.appendChild(a)
                                    }
                                })
                            },
                            prepend: function() {
                                return B(this, arguments, function(a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = w(this, a);
                                        b.insertBefore(a, b.firstChild)
                                    }
                                })
                            },
                            before: function() {
                                return B(this, arguments, function(a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this)
                                })
                            },
                            after: function() {
                                return B(this, arguments, function(a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                                })
                            },
                            empty: function() {
                                for (var a, b = 0; null != (a = this[b]); b++) {
                                    for (1 === a.nodeType && na.cleanData(o(a, !1)); a.firstChild; )
                                        a.removeChild(a.firstChild);
                                    a.options && na.nodeName(a, "select") && (a.options.length = 0)
                                }
                                return this
                            },
                            clone: function(a, b) {
                                return a = null != a && a,
                                    b = null == b ? a : b,
                                    this.map(function() {
                                        return na.clone(this, a, b)
                                    })
                            },
                            html: function(a) {
                                return Na(this, function(a) {
                                    var b = this[0] || {}
                                        , c = 0
                                        , d = this.length;
                                    if (void 0 === a)
                                        return 1 === b.nodeType ? b.innerHTML.replace(_a, "") : void 0;
                                    if ("string" == typeof a && !cb.test(a) && (la.htmlSerialize || !ab.test(a)) && (la.leadingWhitespace || !Ra.test(a)) && !Ta[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                                        a = na.htmlPrefilter(a);
                                        try {
                                            for (; c < d; c++)
                                                b = this[c] || {},
                                                1 === b.nodeType && (na.cleanData(o(b, !1)),
                                                    b.innerHTML = a);
                                            b = 0
                                        } catch (a) {}
                                    }
                                    b && this.empty().append(a)
                                }, null, a, arguments.length)
                            },
                            replaceWith: function() {
                                var a = [];
                                return B(this, arguments, function(b) {
                                    var c = this.parentNode;
                                    na.inArray(this, a) < 0 && (na.cleanData(o(this)),
                                    c && c.replaceChild(b, this))
                                }, a)
                            }
                        }),
                        na.each({
                            appendTo: "append",
                            prependTo: "prepend",
                            insertBefore: "before",
                            insertAfter: "after",
                            replaceAll: "replaceWith"
                        }, function(a, b) {
                            na.fn[a] = function(a) {
                                for (var c, d = 0, e = [], f = na(a), g = f.length - 1; d <= g; d++)
                                    c = d === g ? this : this.clone(!0),
                                        na(f[d])[b](c),
                                        ga.apply(e, c.get());
                                return this.pushStack(e)
                            }
                        });
                    var ib, jb = {
                        HTML: "block",
                        BODY: "block"
                    }, kb = /^margin/, lb = new RegExp("^(" + Ja + ")(?!px)[a-z%]+$","i"), mb = function(a, b, c, d) {
                        var e, f, g = {};
                        for (f in b)
                            g[f] = a.style[f],
                                a.style[f] = b[f];
                        e = c.apply(a, d || []);
                        for (f in b)
                            a.style[f] = g[f];
                        return e
                    }, nb = da.documentElement;
                    !function() {
                        function b() {
                            var b, k, l = da.documentElement;
                            l.appendChild(i),
                                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                                c = e = h = !1,
                                d = g = !0,
                            a.getComputedStyle && (k = a.getComputedStyle(j),
                                c = "1%" !== (k || {}).top,
                                h = "2px" === (k || {}).marginLeft,
                                e = "4px" === (k || {
                                        width: "4px"
                                    }).width,
                                j.style.marginRight = "50%",
                                d = "4px" === (k || {
                                        marginRight: "4px"
                                    }).marginRight,
                                b = j.appendChild(da.createElement("div")),
                                b.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                                b.style.marginRight = b.style.width = "0",
                                j.style.width = "1px",
                                g = !parseFloat((a.getComputedStyle(b) || {}).marginRight),
                                j.removeChild(b)),
                                j.style.display = "none",
                                f = 0 === j.getClientRects().length,
                            f && (j.style.display = "",
                                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                                j.childNodes[0].style.borderCollapse = "separate",
                                b = j.getElementsByTagName("td"),
                                b[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                                f = 0 === b[0].offsetHeight,
                            f && (b[0].style.display = "",
                                b[1].style.display = "none",
                                f = 0 === b[0].offsetHeight)),
                                l.removeChild(i)
                        }
                        var c, d, e, f, g, h, i = da.createElement("div"), j = da.createElement("div");
                        j.style && (j.style.cssText = "float:left;opacity:.5",
                            la.opacity = "0.5" === j.style.opacity,
                            la.cssFloat = !!j.style.cssFloat,
                            j.style.backgroundClip = "content-box",
                            j.cloneNode(!0).style.backgroundClip = "",
                            la.clearCloneStyle = "content-box" === j.style.backgroundClip,
                            i = da.createElement("div"),
                            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                            j.innerHTML = "",
                            i.appendChild(j),
                            la.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
                            na.extend(la, {
                                reliableHiddenOffsets: function() {
                                    return null == c && b(),
                                        f
                                },
                                boxSizingReliable: function() {
                                    return null == c && b(),
                                        e
                                },
                                pixelMarginRight: function() {
                                    return null == c && b(),
                                        d
                                },
                                pixelPosition: function() {
                                    return null == c && b(),
                                        c
                                },
                                reliableMarginRight: function() {
                                    return null == c && b(),
                                        g
                                },
                                reliableMarginLeft: function() {
                                    return null == c && b(),
                                        h
                                }
                            }))
                    }();
                    var ob, pb, qb = /^(top|right|bottom|left)$/;
                    a.getComputedStyle ? (ob = function(b) {
                            var c = b.ownerDocument.defaultView;
                            return c && c.opener || (c = a),
                                c.getComputedStyle(b)
                        }
                            ,
                            pb = function(a, b, c) {
                                var d, e, f, g, h = a.style;
                                return c = c || ob(a),
                                    g = c ? c.getPropertyValue(b) || c[b] : void 0,
                                "" !== g && void 0 !== g || na.contains(a.ownerDocument, a) || (g = na.style(a, b)),
                                c && !la.pixelMarginRight() && lb.test(g) && kb.test(b) && (d = h.width,
                                    e = h.minWidth,
                                    f = h.maxWidth,
                                    h.minWidth = h.maxWidth = h.width = g,
                                    g = c.width,
                                    h.width = d,
                                    h.minWidth = e,
                                    h.maxWidth = f),
                                    void 0 === g ? g : g + ""
                            }
                    ) : nb.currentStyle && (ob = function(a) {
                                return a.currentStyle
                            }
                                ,
                                pb = function(a, b, c) {
                                    var d, e, f, g, h = a.style;
                                    return c = c || ob(a),
                                        g = c ? c[b] : void 0,
                                    null == g && h && h[b] && (g = h[b]),
                                    lb.test(g) && !qb.test(b) && (d = h.left,
                                        e = a.runtimeStyle,
                                        f = e && e.left,
                                    f && (e.left = a.currentStyle.left),
                                        h.left = "fontSize" === b ? "1em" : g,
                                        g = h.pixelLeft + "px",
                                        h.left = d,
                                    f && (e.left = f)),
                                        void 0 === g ? g : g + "" || "auto"
                                }
                        );
                    var rb = /alpha\([^)]*\)/i
                        , sb = /opacity\s*=\s*([^)]*)/i
                        , tb = /^(none|table(?!-c[ea]).+)/
                        , ub = new RegExp("^(" + Ja + ")(.*)$","i")
                        , vb = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }
                        , wb = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    }
                        , xb = ["Webkit", "O", "Moz", "ms"]
                        , yb = da.createElement("div").style;
                    na.extend({
                        cssHooks: {
                            opacity: {
                                get: function(a, b) {
                                    if (b) {
                                        var c = pb(a, "opacity");
                                        return "" === c ? "1" : c
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            float: la.cssFloat ? "cssFloat" : "styleFloat"
                        },
                        style: function(a, b, c, d) {
                            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                                var e, f, g, h = na.camelCase(b), i = a.style;
                                if (b = na.cssProps[h] || (na.cssProps[h] = G(h) || h),
                                        g = na.cssHooks[b] || na.cssHooks[h],
                                    void 0 === c)
                                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                                if (f = typeof c,
                                    "string" === f && (e = Ka.exec(c)) && e[1] && (c = m(a, b, e),
                                        f = "number"),
                                    null != c && c === c && ("number" === f && (c += e && e[3] || (na.cssNumber[h] ? "" : "px")),
                                    la.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                                        !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                                    try {
                                        i[b] = c
                                    } catch (a) {}
                            }
                        },
                        css: function(a, b, c, d) {
                            var e, f, g, h = na.camelCase(b);
                            return b = na.cssProps[h] || (na.cssProps[h] = G(h) || h),
                                g = na.cssHooks[b] || na.cssHooks[h],
                            g && "get"in g && (f = g.get(a, !0, c)),
                            void 0 === f && (f = pb(a, b, d)),
                            "normal" === f && b in wb && (f = wb[b]),
                                "" === c || c ? (e = parseFloat(f),
                                    c === !0 || isFinite(e) ? e || 0 : f) : f
                        }
                    }),
                        na.each(["height", "width"], function(a, b) {
                            na.cssHooks[b] = {
                                get: function(a, c, d) {
                                    if (c)
                                        return tb.test(na.css(a, "display")) && 0 === a.offsetWidth ? mb(a, vb, function() {
                                            return K(a, b, d)
                                        }) : K(a, b, d)
                                },
                                set: function(a, c, d) {
                                    var e = d && ob(a);
                                    return I(a, c, d ? J(a, b, d, la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, e), e) : 0)
                                }
                            }
                        }),
                    la.opacity || (na.cssHooks.opacity = {
                        get: function(a, b) {
                            return sb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
                        },
                        set: function(a, b) {
                            var c = a.style
                                , d = a.currentStyle
                                , e = na.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                                , f = d && d.filter || c.filter || "";
                            c.zoom = 1,
                            (b >= 1 || "" === b) && "" === na.trim(f.replace(rb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
                            "" === b || d && !d.filter) || (c.filter = rb.test(f) ? f.replace(rb, e) : f + " " + e)
                        }
                    }),
                        na.cssHooks.marginRight = F(la.reliableMarginRight, function(a, b) {
                            if (b)
                                return mb(a, {
                                    display: "inline-block"
                                }, pb, [a, "marginRight"])
                        }),
                        na.cssHooks.marginLeft = F(la.reliableMarginLeft, function(a, b) {
                            if (b)
                                return (parseFloat(pb(a, "marginLeft")) || (na.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - mb(a, {
                                            marginLeft: 0
                                        }, function() {
                                            return a.getBoundingClientRect().left
                                        }) : 0)) + "px"
                        }),
                        na.each({
                            margin: "",
                            padding: "",
                            border: "Width"
                        }, function(a, b) {
                            na.cssHooks[a + b] = {
                                expand: function(c) {
                                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                                        e[a + La[d] + b] = f[d] || f[d - 2] || f[0];
                                    return e
                                }
                            },
                            kb.test(a) || (na.cssHooks[a + b].set = I)
                        }),
                        na.fn.extend({
                            css: function(a, b) {
                                return Na(this, function(a, b, c) {
                                    var d, e, f = {}, g = 0;
                                    if (na.isArray(b)) {
                                        for (d = ob(a),
                                                 e = b.length; g < e; g++)
                                            f[b[g]] = na.css(a, b[g], !1, d);
                                        return f
                                    }
                                    return void 0 !== c ? na.style(a, b, c) : na.css(a, b)
                                }, a, b, arguments.length > 1)
                            },
                            show: function() {
                                return H(this, !0)
                            },
                            hide: function() {
                                return H(this)
                            },
                            toggle: function(a) {
                                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                                    Ma(this) ? na(this).show() : na(this).hide()
                                })
                            }
                        }),
                        na.Tween = L,
                        L.prototype = {
                            constructor: L,
                            init: function(a, b, c, d, e, f) {
                                this.elem = a,
                                    this.prop = c,
                                    this.easing = e || na.easing._default,
                                    this.options = b,
                                    this.start = this.now = this.cur(),
                                    this.end = d,
                                    this.unit = f || (na.cssNumber[c] ? "" : "px")
                            },
                            cur: function() {
                                var a = L.propHooks[this.prop];
                                return a && a.get ? a.get(this) : L.propHooks._default.get(this)
                            },
                            run: function(a) {
                                var b, c = L.propHooks[this.prop];
                                return this.options.duration ? this.pos = b = na.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                                    this.now = (this.end - this.start) * b + this.start,
                                this.options.step && this.options.step.call(this.elem, this.now, this),
                                    c && c.set ? c.set(this) : L.propHooks._default.set(this),
                                    this
                            }
                        },
                        L.prototype.init.prototype = L.prototype,
                        L.propHooks = {
                            _default: {
                                get: function(a) {
                                    var b;
                                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = na.css(a.elem, a.prop, ""),
                                        b && "auto" !== b ? b : 0)
                                },
                                set: function(a) {
                                    na.fx.step[a.prop] ? na.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[na.cssProps[a.prop]] && !na.cssHooks[a.prop] ? a.elem[a.prop] = a.now : na.style(a.elem, a.prop, a.now + a.unit)
                                }
                            }
                        },
                        L.propHooks.scrollTop = L.propHooks.scrollLeft = {
                            set: function(a) {
                                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                            }
                        },
                        na.easing = {
                            linear: function(a) {
                                return a
                            },
                            swing: function(a) {
                                return .5 - Math.cos(a * Math.PI) / 2
                            },
                            _default: "swing"
                        },
                        na.fx = L.prototype.init,
                        na.fx.step = {};
                    var zb, Ab, Bb = /^(?:toggle|show|hide)$/, Cb = /queueHooks$/;
                    na.Animation = na.extend(R, {
                        tweeners: {
                            "*": [function(a, b) {
                                var c = this.createTween(a, b);
                                return m(c.elem, a, Ka.exec(b), c),
                                    c
                            }
                            ]
                        },
                        tweener: function(a, b) {
                            na.isFunction(a) ? (b = a,
                                a = ["*"]) : a = a.match(Da);
                            for (var c, d = 0, e = a.length; d < e; d++)
                                c = a[d],
                                    R.tweeners[c] = R.tweeners[c] || [],
                                    R.tweeners[c].unshift(b)
                        },
                        prefilters: [P],
                        prefilter: function(a, b) {
                            b ? R.prefilters.unshift(a) : R.prefilters.push(a)
                        }
                    }),
                        na.speed = function(a, b, c) {
                            var d = a && "object" == typeof a ? na.extend({}, a) : {
                                complete: c || !c && b || na.isFunction(a) && a,
                                duration: a,
                                easing: c && b || b && !na.isFunction(b) && b
                            };
                            return d.duration = na.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in na.fx.speeds ? na.fx.speeds[d.duration] : na.fx.speeds._default,
                            null != d.queue && d.queue !== !0 || (d.queue = "fx"),
                                d.old = d.complete,
                                d.complete = function() {
                                    na.isFunction(d.old) && d.old.call(this),
                                    d.queue && na.dequeue(this, d.queue)
                                }
                                ,
                                d
                        }
                        ,
                        na.fn.extend({
                            fadeTo: function(a, b, c, d) {
                                return this.filter(Ma).css("opacity", 0).show().end().animate({
                                    opacity: b
                                }, a, c, d)
                            },
                            animate: function(a, b, c, d) {
                                var e = na.isEmptyObject(a)
                                    , f = na.speed(b, c, d)
                                    , g = function() {
                                    var b = R(this, na.extend({}, a), f);
                                    (e || na._data(this, "finish")) && b.stop(!0)
                                };
                                return g.finish = g,
                                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                            },
                            stop: function(a, b, c) {
                                var d = function(a) {
                                    var b = a.stop;
                                    delete a.stop,
                                        b(c)
                                };
                                return "string" != typeof a && (c = b,
                                    b = a,
                                    a = void 0),
                                b && a !== !1 && this.queue(a || "fx", []),
                                    this.each(function() {
                                        var b = !0
                                            , e = null != a && a + "queueHooks"
                                            , f = na.timers
                                            , g = na._data(this);
                                        if (e)
                                            g[e] && g[e].stop && d(g[e]);
                                        else
                                            for (e in g)
                                                g[e] && g[e].stop && Cb.test(e) && d(g[e]);
                                        for (e = f.length; e--; )
                                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                                b = !1,
                                                f.splice(e, 1));
                                        !b && c || na.dequeue(this, a)
                                    })
                            },
                            finish: function(a) {
                                return a !== !1 && (a = a || "fx"),
                                    this.each(function() {
                                        var b, c = na._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = na.timers, g = d ? d.length : 0;
                                        for (c.finish = !0,
                                                 na.queue(this, a, []),
                                             e && e.stop && e.stop.call(this, !0),
                                                 b = f.length; b--; )
                                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                                f.splice(b, 1));
                                        for (b = 0; b < g; b++)
                                            d[b] && d[b].finish && d[b].finish.call(this);
                                        delete c.finish
                                    })
                            }
                        }),
                        na.each(["toggle", "show", "hide"], function(a, b) {
                            var c = na.fn[b];
                            na.fn[b] = function(a, d, e) {
                                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
                            }
                        }),
                        na.each({
                            slideDown: N("show"),
                            slideUp: N("hide"),
                            slideToggle: N("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, function(a, b) {
                            na.fn[a] = function(a, c, d) {
                                return this.animate(b, a, c, d)
                            }
                        }),
                        na.timers = [],
                        na.fx.tick = function() {
                            var a, b = na.timers, c = 0;
                            for (zb = na.now(); c < b.length; c++)
                                a = b[c],
                                a() || b[c] !== a || b.splice(c--, 1);
                            b.length || na.fx.stop(),
                                zb = void 0
                        }
                        ,
                        na.fx.timer = function(a) {
                            na.timers.push(a),
                                a() ? na.fx.start() : na.timers.pop()
                        }
                        ,
                        na.fx.interval = 13,
                        na.fx.start = function() {
                            Ab || (Ab = a.setInterval(na.fx.tick, na.fx.interval))
                        }
                        ,
                        na.fx.stop = function() {
                            a.clearInterval(Ab),
                                Ab = null
                        }
                        ,
                        na.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        },
                        na.fn.delay = function(b, c) {
                            return b = na.fx ? na.fx.speeds[b] || b : b,
                                c = c || "fx",
                                this.queue(c, function(c, d) {
                                    var e = a.setTimeout(c, b);
                                    d.stop = function() {
                                        a.clearTimeout(e)
                                    }
                                })
                        }
                        ,
                        function() {
                            var a, b = da.createElement("input"), c = da.createElement("div"), d = da.createElement("select"), e = d.appendChild(da.createElement("option"));
                            c = da.createElement("div"),
                                c.setAttribute("className", "t"),
                                c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                                a = c.getElementsByTagName("a")[0],
                                b.setAttribute("type", "checkbox"),
                                c.appendChild(b),
                                a = c.getElementsByTagName("a")[0],
                                a.style.cssText = "top:1px",
                                la.getSetAttribute = "t" !== c.className,
                                la.style = /top/.test(a.getAttribute("style")),
                                la.hrefNormalized = "/a" === a.getAttribute("href"),
                                la.checkOn = !!b.value,
                                la.optSelected = e.selected,
                                la.enctype = !!da.createElement("form").enctype,
                                d.disabled = !0,
                                la.optDisabled = !e.disabled,
                                b = da.createElement("input"),
                                b.setAttribute("value", ""),
                                la.input = "" === b.getAttribute("value"),
                                b.value = "t",
                                b.setAttribute("type", "radio"),
                                la.radioValue = "t" === b.value
                        }();
                    var Db = /\r/g
                        , Eb = /[\x20\t\r\n\f]+/g;
                    na.fn.extend({
                        val: function(a) {
                            var b, c, d, e = this[0];
                            {
                                if (arguments.length)
                                    return d = na.isFunction(a),
                                        this.each(function(c) {
                                            var e;
                                            1 === this.nodeType && (e = d ? a.call(this, c, na(this).val()) : a,
                                                null == e ? e = "" : "number" == typeof e ? e += "" : na.isArray(e) && (e = na.map(e, function(a) {
                                                        return null == a ? "" : a + ""
                                                    })),
                                                b = na.valHooks[this.type] || na.valHooks[this.nodeName.toLowerCase()],
                                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                                        });
                                if (e)
                                    return b = na.valHooks[e.type] || na.valHooks[e.nodeName.toLowerCase()],
                                        b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                                            "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)
                            }
                        }
                    }),
                        na.extend({
                            valHooks: {
                                option: {
                                    get: function(a) {
                                        var b = na.find.attr(a, "value");
                                        return null != b ? b : na.trim(na.text(a)).replace(Eb, " ")
                                    }
                                },
                                select: {
                                    get: function(a) {
                                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                                            if (c = d[i],
                                                (c.selected || i === e) && (la.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !na.nodeName(c.parentNode, "optgroup"))) {
                                                if (b = na(c).val(),
                                                        f)
                                                    return b;
                                                g.push(b)
                                            }
                                        return g
                                    },
                                    set: function(a, b) {
                                        for (var c, d, e = a.options, f = na.makeArray(b), g = e.length; g--; )
                                            if (d = e[g],
                                                na.inArray(na.valHooks.option.get(d), f) > -1)
                                                try {
                                                    d.selected = c = !0
                                                } catch (a) {
                                                    d.scrollHeight
                                                }
                                            else
                                                d.selected = !1;
                                        return c || (a.selectedIndex = -1),
                                            e
                                    }
                                }
                            }
                        }),
                        na.each(["radio", "checkbox"], function() {
                            na.valHooks[this] = {
                                set: function(a, b) {
                                    if (na.isArray(b))
                                        return a.checked = na.inArray(na(a).val(), b) > -1
                                }
                            },
                            la.checkOn || (na.valHooks[this].get = function(a) {
                                    return null === a.getAttribute("value") ? "on" : a.value
                                }
                            )
                        });
                    var Fb, Gb, Hb = na.expr.attrHandle, Ib = /^(?:checked|selected)$/i, Jb = la.getSetAttribute, Kb = la.input;
                    na.fn.extend({
                        attr: function(a, b) {
                            return Na(this, na.attr, a, b, arguments.length > 1)
                        },
                        removeAttr: function(a) {
                            return this.each(function() {
                                na.removeAttr(this, a)
                            })
                        }
                    }),
                        na.extend({
                            attr: function(a, b, c) {
                                var d, e, f = a.nodeType;
                                if (3 !== f && 8 !== f && 2 !== f)
                                    return "undefined" == typeof a.getAttribute ? na.prop(a, b, c) : (1 === f && na.isXMLDoc(a) || (b = b.toLowerCase(),
                                        e = na.attrHooks[b] || (na.expr.match.bool.test(b) ? Gb : Fb)),
                                        void 0 !== c ? null === c ? void na.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                                            c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = na.find.attr(a, b),
                                            null == d ? void 0 : d))
                            },
                            attrHooks: {
                                type: {
                                    set: function(a, b) {
                                        if (!la.radioValue && "radio" === b && na.nodeName(a, "input")) {
                                            var c = a.value;
                                            return a.setAttribute("type", b),
                                            c && (a.value = c),
                                                b
                                        }
                                    }
                                }
                            },
                            removeAttr: function(a, b) {
                                var c, d, e = 0, f = b && b.match(Da);
                                if (f && 1 === a.nodeType)
                                    for (; c = f[e++]; )
                                        d = na.propFix[c] || c,
                                            na.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[na.camelCase("default-" + c)] = a[d] = !1 : na.attr(a, c, ""),
                                            a.removeAttribute(Jb ? c : d)
                            }
                        }),
                        Gb = {
                            set: function(a, b, c) {
                                return b === !1 ? na.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && na.propFix[c] || c, c) : a[na.camelCase("default-" + c)] = a[c] = !0,
                                    c
                            }
                        },
                        na.each(na.expr.match.bool.source.match(/\w+/g), function(a, b) {
                            var c = Hb[b] || na.find.attr;
                            Kb && Jb || !Ib.test(b) ? Hb[b] = function(a, b, d) {
                                var e, f;
                                return d || (f = Hb[b],
                                    Hb[b] = e,
                                    e = null != c(a, b, d) ? b.toLowerCase() : null,
                                    Hb[b] = f),
                                    e
                            }
                                : Hb[b] = function(a, b, c) {
                                if (!c)
                                    return a[na.camelCase("default-" + b)] ? b.toLowerCase() : null
                            }
                        }),
                    Kb && Jb || (na.attrHooks.value = {
                        set: function(a, b, c) {
                            return na.nodeName(a, "input") ? void (a.defaultValue = b) : Fb && Fb.set(a, b, c)
                        }
                    }),
                    Jb || (Fb = {
                        set: function(a, b, c) {
                            var d = a.getAttributeNode(c);
                            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                                    d.value = b += "",
                                "value" === c || b === a.getAttribute(c))
                                return b
                        }
                    },
                        Hb.id = Hb.name = Hb.coords = function(a, b, c) {
                            var d;
                            if (!c)
                                return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
                        }
                        ,
                        na.valHooks.button = {
                            get: function(a, b) {
                                var c = a.getAttributeNode(b);
                                if (c && c.specified)
                                    return c.value
                            },
                            set: Fb.set
                        },
                        na.attrHooks.contenteditable = {
                            set: function(a, b, c) {
                                Fb.set(a, "" !== b && b, c)
                            }
                        },
                        na.each(["width", "height"], function(a, b) {
                            na.attrHooks[b] = {
                                set: function(a, c) {
                                    if ("" === c)
                                        return a.setAttribute(b, "auto"),
                                            c
                                }
                            }
                        })),
                    la.style || (na.attrHooks.style = {
                        get: function(a) {
                            return a.style.cssText || void 0
                        },
                        set: function(a, b) {
                            return a.style.cssText = b + ""
                        }
                    });
                    var Lb = /^(?:input|select|textarea|button|object)$/i
                        , Mb = /^(?:a|area)$/i;
                    na.fn.extend({
                        prop: function(a, b) {
                            return Na(this, na.prop, a, b, arguments.length > 1)
                        },
                        removeProp: function(a) {
                            return a = na.propFix[a] || a,
                                this.each(function() {
                                    try {
                                        this[a] = void 0,
                                            delete this[a]
                                    } catch (a) {}
                                })
                        }
                    }),
                        na.extend({
                            prop: function(a, b, c) {
                                var d, e, f = a.nodeType;
                                if (3 !== f && 8 !== f && 2 !== f)
                                    return 1 === f && na.isXMLDoc(a) || (b = na.propFix[b] || b,
                                        e = na.propHooks[b]),
                                        void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function(a) {
                                        var b = na.find.attr(a, "tabindex");
                                        return b ? parseInt(b, 10) : Lb.test(a.nodeName) || Mb.test(a.nodeName) && a.href ? 0 : -1
                                    }
                                }
                            },
                            propFix: {
                                for: "htmlFor",
                                class: "className"
                            }
                        }),
                    la.hrefNormalized || na.each(["href", "src"], function(a, b) {
                        na.propHooks[b] = {
                            get: function(a) {
                                return a.getAttribute(b, 4)
                            }
                        }
                    }),
                    la.optSelected || (na.propHooks.selected = {
                        get: function(a) {
                            var b = a.parentNode;
                            return b && (b.selectedIndex,
                            b.parentNode && b.parentNode.selectedIndex),
                                null
                        },
                        set: function(a) {
                            var b = a.parentNode;
                            b && (b.selectedIndex,
                            b.parentNode && b.parentNode.selectedIndex)
                        }
                    }),
                        na.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                            na.propFix[this.toLowerCase()] = this
                        }),
                    la.enctype || (na.propFix.enctype = "encoding");
                    var Nb = /[\t\r\n\f]/g;
                    na.fn.extend({
                        addClass: function(a) {
                            var b, c, d, e, f, g, h, i = 0;
                            if (na.isFunction(a))
                                return this.each(function(b) {
                                    na(this).addClass(a.call(this, b, S(this)))
                                });
                            if ("string" == typeof a && a)
                                for (b = a.match(Da) || []; c = this[i++]; )
                                    if (e = S(c),
                                            d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                                        for (g = 0; f = b[g++]; )
                                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                                        h = na.trim(d),
                                        e !== h && na.attr(c, "class", h)
                                    }
                            return this
                        },
                        removeClass: function(a) {
                            var b, c, d, e, f, g, h, i = 0;
                            if (na.isFunction(a))
                                return this.each(function(b) {
                                    na(this).removeClass(a.call(this, b, S(this)))
                                });
                            if (!arguments.length)
                                return this.attr("class", "");
                            if ("string" == typeof a && a)
                                for (b = a.match(Da) || []; c = this[i++]; )
                                    if (e = S(c),
                                            d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                                        for (g = 0; f = b[g++]; )
                                            for (; d.indexOf(" " + f + " ") > -1; )
                                                d = d.replace(" " + f + " ", " ");
                                        h = na.trim(d),
                                        e !== h && na.attr(c, "class", h)
                                    }
                            return this
                        },
                        toggleClass: function(a, b) {
                            var c = typeof a;
                            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : na.isFunction(a) ? this.each(function(c) {
                                na(this).toggleClass(a.call(this, c, S(this), b), b)
                            }) : this.each(function() {
                                var b, d, e, f;
                                if ("string" === c)
                                    for (d = 0,
                                             e = na(this),
                                             f = a.match(Da) || []; b = f[d++]; )
                                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                                else
                                    void 0 !== a && "boolean" !== c || (b = S(this),
                                    b && na._data(this, "__className__", b),
                                        na.attr(this, "class", b || a === !1 ? "" : na._data(this, "__className__") || ""))
                            })
                        },
                        hasClass: function(a) {
                            var b, c, d = 0;
                            for (b = " " + a + " "; c = this[d++]; )
                                if (1 === c.nodeType && (" " + S(c) + " ").replace(Nb, " ").indexOf(b) > -1)
                                    return !0;
                            return !1
                        }
                    }),
                        na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                            na.fn[b] = function(a, c) {
                                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                            }
                        }),
                        na.fn.extend({
                            hover: function(a, b) {
                                return this.mouseenter(a).mouseleave(b || a)
                            }
                        });
                    var Ob = a.location
                        , Pb = na.now()
                        , Qb = /\?/
                        , Rb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                    na.parseJSON = function(b) {
                        if (a.JSON && a.JSON.parse)
                            return a.JSON.parse(b + "");
                        var c, d = null, e = na.trim(b + "");
                        return e && !na.trim(e.replace(Rb, function(a, b, e, f) {
                            return c && b && (d = 0),
                                0 === d ? a : (c = e || b,
                                    d += !f - !e,
                                    "")
                        })) ? Function("return " + e)() : na.error("Invalid JSON: " + b)
                    }
                        ,
                        na.parseXML = function(b) {
                            var c, d;
                            if (!b || "string" != typeof b)
                                return null;
                            try {
                                a.DOMParser ? (d = new a.DOMParser,
                                    c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
                                    c.async = "false",
                                    c.loadXML(b))
                            } catch (a) {
                                c = void 0
                            }
                            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || na.error("Invalid XML: " + b),
                                c
                        }
                    ;
                    var Sb = /#.*$/
                        , Tb = /([?&])_=[^&]*/
                        , Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
                        , Vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                        , Wb = /^(?:GET|HEAD)$/
                        , Xb = /^\/\//
                        , Yb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
                        , Zb = {}
                        , $b = {}
                        , _b = "*/".concat("*")
                        , ac = Ob.href
                        , bc = Yb.exec(ac.toLowerCase()) || [];
                    na.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: ac,
                            type: "GET",
                            isLocal: Vb.test(bc[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": _b,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": na.parseJSON,
                                "text xml": na.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(a, b) {
                            return b ? V(V(a, na.ajaxSettings), b) : V(na.ajaxSettings, a)
                        },
                        ajaxPrefilter: T(Zb),
                        ajaxTransport: T($b),
                        ajax: function(b, c) {
                            function d(b, c, d, e) {
                                var f, l, s, t, v, x = c;
                                2 !== u && (u = 2,
                                i && a.clearTimeout(i),
                                    k = void 0,
                                    h = e || "",
                                    w.readyState = b > 0 ? 4 : 0,
                                    f = b >= 200 && b < 300 || 304 === b,
                                d && (t = W(m, w, d)),
                                    t = X(m, t, w, f),
                                    f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"),
                                    v && (na.lastModified[g] = v),
                                        v = w.getResponseHeader("etag"),
                                    v && (na.etag[g] = v)),
                                        204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state,
                                            l = t.data,
                                            s = t.error,
                                            f = !s)) : (s = x,
                                    !b && x || (x = "error",
                                    b < 0 && (b = 0))),
                                    w.status = b,
                                    w.statusText = (c || x) + "",
                                    f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                                    w.statusCode(r),
                                    r = void 0,
                                j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]),
                                    q.fireWith(n, [w, x]),
                                j && (o.trigger("ajaxComplete", [w, m]),
                                --na.active || na.event.trigger("ajaxStop")))
                            }
                            "object" == typeof b && (c = b,
                                b = void 0),
                                c = c || {};
                            var e, f, g, h, i, j, k, l, m = na.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? na(n) : na.event, p = na.Deferred(), q = na.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                                readyState: 0,
                                getResponseHeader: function(a) {
                                    var b;
                                    if (2 === u) {
                                        if (!l)
                                            for (l = {}; b = Ub.exec(h); )
                                                l[b[1].toLowerCase()] = b[2];
                                        b = l[a.toLowerCase()]
                                    }
                                    return null == b ? null : b
                                },
                                getAllResponseHeaders: function() {
                                    return 2 === u ? h : null
                                },
                                setRequestHeader: function(a, b) {
                                    var c = a.toLowerCase();
                                    return u || (a = t[c] = t[c] || a,
                                        s[a] = b),
                                        this
                                },
                                overrideMimeType: function(a) {
                                    return u || (m.mimeType = a),
                                        this
                                },
                                statusCode: function(a) {
                                    var b;
                                    if (a)
                                        if (u < 2)
                                            for (b in a)
                                                r[b] = [r[b], a[b]];
                                        else
                                            w.always(a[w.status]);
                                    return this
                                },
                                abort: function(a) {
                                    var b = a || v;
                                    return k && k.abort(b),
                                        d(0, b),
                                        this
                                }
                            };
                            if (p.promise(w).complete = q.add,
                                    w.success = w.done,
                                    w.error = w.fail,
                                    m.url = ((b || m.url || ac) + "").replace(Sb, "").replace(Xb, bc[1] + "//"),
                                    m.type = c.method || c.type || m.method || m.type,
                                    m.dataTypes = na.trim(m.dataType || "*").toLowerCase().match(Da) || [""],
                                null == m.crossDomain && (e = Yb.exec(m.url.toLowerCase()),
                                    m.crossDomain = !(!e || e[1] === bc[1] && e[2] === bc[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (bc[3] || ("http:" === bc[1] ? "80" : "443")))),
                                m.data && m.processData && "string" != typeof m.data && (m.data = na.param(m.data, m.traditional)),
                                    U(Zb, m, c, w),
                                2 === u)
                                return w;
                            j = na.event && m.global,
                            j && 0 === na.active++ && na.event.trigger("ajaxStart"),
                                m.type = m.type.toUpperCase(),
                                m.hasContent = !Wb.test(m.type),
                                g = m.url,
                            m.hasContent || (m.data && (g = m.url += (Qb.test(g) ? "&" : "?") + m.data,
                                delete m.data),
                            m.cache === !1 && (m.url = Tb.test(g) ? g.replace(Tb, "$1_=" + Pb++) : g + (Qb.test(g) ? "&" : "?") + "_=" + Pb++)),
                            m.ifModified && (na.lastModified[g] && w.setRequestHeader("If-Modified-Since", na.lastModified[g]),
                            na.etag[g] && w.setRequestHeader("If-None-Match", na.etag[g])),
                            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
                                w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _b + "; q=0.01" : "") : m.accepts["*"]);
                            for (f in m.headers)
                                w.setRequestHeader(f, m.headers[f]);
                            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
                                return w.abort();
                            v = "abort";
                            for (f in {
                                success: 1,
                                error: 1,
                                complete: 1
                            })
                                w[f](m[f]);
                            if (k = U($b, m, c, w)) {
                                if (w.readyState = 1,
                                    j && o.trigger("ajaxSend", [w, m]),
                                    2 === u)
                                    return w;
                                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                                    w.abort("timeout")
                                }, m.timeout));
                                try {
                                    u = 1,
                                        k.send(s, d)
                                } catch (a) {
                                    if (!(u < 2))
                                        throw a;
                                    d(-1, a)
                                }
                            } else
                                d(-1, "No Transport");
                            return w
                        },
                        getJSON: function(a, b, c) {
                            return na.get(a, b, c, "json")
                        },
                        getScript: function(a, b) {
                            return na.get(a, void 0, b, "script")
                        }
                    }),
                        na.each(["get", "post"], function(a, b) {
                            na[b] = function(a, c, d, e) {
                                return na.isFunction(c) && (e = e || d,
                                    d = c,
                                    c = void 0),
                                    na.ajax(na.extend({
                                        url: a,
                                        type: b,
                                        dataType: e,
                                        data: c,
                                        success: d
                                    }, na.isPlainObject(a) && a))
                            }
                        }),
                        na._evalUrl = function(a) {
                            return na.ajax({
                                url: a,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                throws: !0
                            })
                        }
                        ,
                        na.fn.extend({
                            wrapAll: function(a) {
                                if (na.isFunction(a))
                                    return this.each(function(b) {
                                        na(this).wrapAll(a.call(this, b))
                                    });
                                if (this[0]) {
                                    var b = na(a, this[0].ownerDocument).eq(0).clone(!0);
                                    this[0].parentNode && b.insertBefore(this[0]),
                                        b.map(function() {
                                            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                                                a = a.firstChild;
                                            return a
                                        }).append(this)
                                }
                                return this
                            },
                            wrapInner: function(a) {
                                return na.isFunction(a) ? this.each(function(b) {
                                    na(this).wrapInner(a.call(this, b))
                                }) : this.each(function() {
                                    var b = na(this)
                                        , c = b.contents();
                                    c.length ? c.wrapAll(a) : b.append(a)
                                })
                            },
                            wrap: function(a) {
                                var b = na.isFunction(a);
                                return this.each(function(c) {
                                    na(this).wrapAll(b ? a.call(this, c) : a)
                                })
                            },
                            unwrap: function() {
                                return this.parent().each(function() {
                                    na.nodeName(this, "body") || na(this).replaceWith(this.childNodes)
                                }).end()
                            }
                        }),
                        na.expr.filters.hidden = function(a) {
                            return la.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Z(a)
                        }
                        ,
                        na.expr.filters.visible = function(a) {
                            return !na.expr.filters.hidden(a)
                        }
                    ;
                    var cc = /%20/g
                        , dc = /\[\]$/
                        , ec = /\r?\n/g
                        , fc = /^(?:submit|button|image|reset|file)$/i
                        , gc = /^(?:input|select|textarea|keygen)/i;
                    na.param = function(a, b) {
                        var c, d = [], e = function(a, b) {
                            b = na.isFunction(b) ? b() : null == b ? "" : b,
                                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                        };
                        if (void 0 === b && (b = na.ajaxSettings && na.ajaxSettings.traditional),
                            na.isArray(a) || a.jquery && !na.isPlainObject(a))
                            na.each(a, function() {
                                e(this.name, this.value)
                            });
                        else
                            for (c in a)
                                $(c, a[c], b, e);
                        return d.join("&").replace(cc, "+")
                    }
                        ,
                        na.fn.extend({
                            serialize: function() {
                                return na.param(this.serializeArray())
                            },
                            serializeArray: function() {
                                return this.map(function() {
                                    var a = na.prop(this, "elements");
                                    return a ? na.makeArray(a) : this
                                }).filter(function() {
                                    var a = this.type;
                                    return this.name && !na(this).is(":disabled") && gc.test(this.nodeName) && !fc.test(a) && (this.checked || !Oa.test(a))
                                }).map(function(a, b) {
                                    var c = na(this).val();
                                    return null == c ? null : na.isArray(c) ? na.map(c, function(a) {
                                        return {
                                            name: b.name,
                                            value: a.replace(ec, "\r\n")
                                        }
                                    }) : {
                                        name: b.name,
                                        value: c.replace(ec, "\r\n")
                                    }
                                }).get()
                            }
                        }),
                        na.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
                            return this.isLocal ? aa() : da.documentMode > 8 ? _() : /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || aa()
                        }
                            : _;
                    var hc = 0
                        , ic = {}
                        , jc = na.ajaxSettings.xhr();
                    a.attachEvent && a.attachEvent("onunload", function() {
                        for (var a in ic)
                            ic[a](void 0, !0)
                    }),
                        la.cors = !!jc && "withCredentials"in jc,
                        jc = la.ajax = !!jc,
                    jc && na.ajaxTransport(function(b) {
                        if (!b.crossDomain || la.cors) {
                            var c;
                            return {
                                send: function(d, e) {
                                    var f, g = b.xhr(), h = ++hc;
                                    if (g.open(b.type, b.url, b.async, b.username, b.password),
                                            b.xhrFields)
                                        for (f in b.xhrFields)
                                            g[f] = b.xhrFields[f];
                                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                                    for (f in d)
                                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                                    g.send(b.hasContent && b.data || null),
                                        c = function(a, d) {
                                            var f, i, j;
                                            if (c && (d || 4 === g.readyState))
                                                if (delete ic[h],
                                                        c = void 0,
                                                        g.onreadystatechange = na.noop,
                                                        d)
                                                    4 !== g.readyState && g.abort();
                                                else {
                                                    j = {},
                                                        f = g.status,
                                                    "string" == typeof g.responseText && (j.text = g.responseText);
                                                    try {
                                                        i = g.statusText
                                                    } catch (a) {
                                                        i = ""
                                                    }
                                                    f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                                }
                                            j && e(f, i, j, g.getAllResponseHeaders())
                                        }
                                        ,
                                        b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ic[h] = c : c()
                                },
                                abort: function() {
                                    c && c(void 0, !0)
                                }
                            }
                        }
                    }),
                        na.ajaxSetup({
                            accepts: {
                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                            },
                            contents: {
                                script: /\b(?:java|ecma)script\b/
                            },
                            converters: {
                                "text script": function(a) {
                                    return na.globalEval(a),
                                        a
                                }
                            }
                        }),
                        na.ajaxPrefilter("script", function(a) {
                            void 0 === a.cache && (a.cache = !1),
                            a.crossDomain && (a.type = "GET",
                                a.global = !1)
                        }),
                        na.ajaxTransport("script", function(a) {
                            if (a.crossDomain) {
                                var b, c = da.head || na("head")[0] || da.documentElement;
                                return {
                                    send: function(d, e) {
                                        b = da.createElement("script"),
                                            b.async = !0,
                                        a.scriptCharset && (b.charset = a.scriptCharset),
                                            b.src = a.url,
                                            b.onload = b.onreadystatechange = function(a, c) {
                                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                                                b.parentNode && b.parentNode.removeChild(b),
                                                    b = null,
                                                c || e(200, "success"))
                                            }
                                            ,
                                            c.insertBefore(b, c.firstChild)
                                    },
                                    abort: function() {
                                        b && b.onload(void 0, !0)
                                    }
                                }
                            }
                        });
                    var kc = []
                        , lc = /(=)\?(?=&|$)|\?\?/;
                    na.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var a = kc.pop() || na.expando + "_" + Pb++;
                            return this[a] = !0,
                                a
                        }
                    }),
                        na.ajaxPrefilter("json jsonp", function(b, c, d) {
                            var e, f, g, h = b.jsonp !== !1 && (lc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && lc.test(b.data) && "data");
                            if (h || "jsonp" === b.dataTypes[0])
                                return e = b.jsonpCallback = na.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                                    h ? b[h] = b[h].replace(lc, "$1" + e) : b.jsonp !== !1 && (b.url += (Qb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                                    b.converters["script json"] = function() {
                                        return g || na.error(e + " was not called"),
                                            g[0]
                                    }
                                    ,
                                    b.dataTypes[0] = "json",
                                    f = a[e],
                                    a[e] = function() {
                                        g = arguments
                                    }
                                    ,
                                    d.always(function() {
                                        void 0 === f ? na(a).removeProp(e) : a[e] = f,
                                        b[e] && (b.jsonpCallback = c.jsonpCallback,
                                            kc.push(e)),
                                        g && na.isFunction(f) && f(g[0]),
                                            g = f = void 0
                                    }),
                                    "script"
                        }),
                        na.parseHTML = function(a, b, c) {
                            if (!a || "string" != typeof a)
                                return null;
                            "boolean" == typeof b && (c = b,
                                b = !1),
                                b = b || da;
                            var d = wa.exec(a)
                                , e = !c && [];
                            return d ? [b.createElement(d[1])] : (d = r([a], b, e),
                            e && e.length && na(e).remove(),
                                na.merge([], d.childNodes))
                        }
                    ;
                    var mc = na.fn.load;
                    na.fn.load = function(a, b, c) {
                        if ("string" != typeof a && mc)
                            return mc.apply(this, arguments);
                        var d, e, f, g = this, h = a.indexOf(" ");
                        return h > -1 && (d = na.trim(a.slice(h, a.length)),
                            a = a.slice(0, h)),
                            na.isFunction(b) ? (c = b,
                                b = void 0) : b && "object" == typeof b && (e = "POST"),
                        g.length > 0 && na.ajax({
                            url: a,
                            type: e || "GET",
                            dataType: "html",
                            data: b
                        }).done(function(a) {
                            f = arguments,
                                g.html(d ? na("<div>").append(na.parseHTML(a)).find(d) : a)
                        }).always(c && function(a, b) {
                                g.each(function() {
                                    c.apply(this, f || [a.responseText, b, a])
                                })
                            }
                        ),
                            this
                    }
                        ,
                        na.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
                            na.fn[b] = function(a) {
                                return this.on(b, a)
                            }
                        }),
                        na.expr.filters.animated = function(a) {
                            return na.grep(na.timers, function(b) {
                                return a === b.elem
                            }).length
                        }
                        ,
                        na.offset = {
                            setOffset: function(a, b, c) {
                                var d, e, f, g, h, i, j, k = na.css(a, "position"), l = na(a), m = {};
                                "static" === k && (a.style.position = "relative"),
                                    h = l.offset(),
                                    f = na.css(a, "top"),
                                    i = na.css(a, "left"),
                                    j = ("absolute" === k || "fixed" === k) && na.inArray("auto", [f, i]) > -1,
                                    j ? (d = l.position(),
                                        g = d.top,
                                        e = d.left) : (g = parseFloat(f) || 0,
                                        e = parseFloat(i) || 0),
                                na.isFunction(b) && (b = b.call(a, c, na.extend({}, h))),
                                null != b.top && (m.top = b.top - h.top + g),
                                null != b.left && (m.left = b.left - h.left + e),
                                    "using"in b ? b.using.call(a, m) : l.css(m)
                            }
                        },
                        na.fn.extend({
                            offset: function(a) {
                                if (arguments.length)
                                    return void 0 === a ? this : this.each(function(b) {
                                        na.offset.setOffset(this, a, b)
                                    });
                                var b, c, d = {
                                    top: 0,
                                    left: 0
                                }, e = this[0], f = e && e.ownerDocument;
                                if (f)
                                    return b = f.documentElement,
                                        na.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                                            c = ba(f),
                                            {
                                                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                                                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                                            }) : d
                            },
                            position: function() {
                                if (this[0]) {
                                    var a, b, c = {
                                        top: 0,
                                        left: 0
                                    }, d = this[0];
                                    return "fixed" === na.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                                        b = this.offset(),
                                    na.nodeName(a[0], "html") || (c = a.offset()),
                                        c.top += na.css(a[0], "borderTopWidth", !0),
                                        c.left += na.css(a[0], "borderLeftWidth", !0)),
                                        {
                                            top: b.top - c.top - na.css(d, "marginTop", !0),
                                            left: b.left - c.left - na.css(d, "marginLeft", !0)
                                        }
                                }
                            },
                            offsetParent: function() {
                                return this.map(function() {
                                    for (var a = this.offsetParent; a && !na.nodeName(a, "html") && "static" === na.css(a, "position"); )
                                        a = a.offsetParent;
                                    return a || nb
                                })
                            }
                        }),
                        na.each({
                            scrollLeft: "pageXOffset",
                            scrollTop: "pageYOffset"
                        }, function(a, b) {
                            var c = /Y/.test(b);
                            na.fn[a] = function(d) {
                                return Na(this, function(a, d, e) {
                                    var f = ba(a);
                                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? na(f).scrollLeft() : e, c ? e : na(f).scrollTop()) : a[d] = e)
                                }, a, d, arguments.length, null)
                            }
                        }),
                        na.each(["top", "left"], function(a, b) {
                            na.cssHooks[b] = F(la.pixelPosition, function(a, c) {
                                if (c)
                                    return c = pb(a, b),
                                        lb.test(c) ? na(a).position()[b] + "px" : c
                            })
                        }),
                        na.each({
                            Height: "height",
                            Width: "width"
                        }, function(a, b) {
                            na.each({
                                padding: "inner" + a,
                                content: b,
                                "": "outer" + a
                            }, function(c, d) {
                                na.fn[d] = function(d, e) {
                                    var f = arguments.length && (c || "boolean" != typeof d)
                                        , g = c || (d === !0 || e === !0 ? "margin" : "border");
                                    return Na(this, function(b, c, d) {
                                        var e;
                                        return na.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? na.css(b, c, g) : na.style(b, c, d, g)
                                    }, b, f ? d : void 0, f, null)
                                }
                            })
                        }),
                        na.fn.extend({
                            bind: function(a, b, c) {
                                return this.on(a, null, b, c)
                            },
                            unbind: function(a, b) {
                                return this.off(a, null, b)
                            },
                            delegate: function(a, b, c, d) {
                                return this.on(b, a, c, d)
                            },
                            undelegate: function(a, b, c) {
                                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                            }
                        }),
                        na.fn.size = function() {
                            return this.length
                        }
                        ,
                        na.fn.andSelf = na.fn.addBack;
                    var nc = a.jQuery
                        , oc = a.$;
                    return na.noConflict = function(b) {
                        return a.$ === na && (a.$ = oc),
                        b && a.jQuery === na && (a.jQuery = nc),
                            na
                    }
                        ,
                    b || (a.jQuery = a.$ = na),
                        na
                })
            }(a("process"))
        }),
        System.registerDynamic("npm:jquery@1.12.4.js", ["npm:jquery@1.12.4/dist/jquery.js"], !0, function(a, b, c) {
            this || self;
            c.exports = a("npm:jquery@1.12.4/dist/jquery.js")
        }),
        System.registerDynamic("app/main.js", ["../feature/search/main", "../feature/searchFacets/main", "../feature/filterableList/main", "../feature/clipboardButtons/main", "../feature/codeSidebar/main", "../feature/stsImport/main", "../feature/mobileSupport/main", "../feature/infoPopups/main", "../feature/platformDownloads/main", "../feature/formWidgets/main", "../feature/prettify/main", "../feature/map/main", "../feature/timeAgo/main", "../feature/hide-show-guide/main", "../feature/heroBanner/main", "most", "jquery"], !0, function(a, b, c) {
            function d(a, b) {
                return e(a, b).map(function(b) {
                    return a[b]()
                }).reduce(function(a, b) {
                    return a.push(b),
                        a
                }, [])
            }
            function e(a, b) {
                return v.fromArray(x.call(b.documentElement.attributes)).map(function(a) {
                    var b = a.name;
                    return y.test(b) && b.slice(5)
                }).filter(function(b) {
                    return b && b in a
                })
            }
            function f(a) {
                a.forEach(function(a) {
                    a.destroy()
                })
            }
            var g = (this || self,
                a("../feature/search/main"))
                , h = a("../feature/searchFacets/main")
                , i = a("../feature/filterableList/main")
                , j = a("../feature/clipboardButtons/main")
                , k = a("../feature/codeSidebar/main")
                , l = a("../feature/stsImport/main")
                , m = a("../feature/mobileSupport/main")
                , n = a("../feature/infoPopups/main")
                , o = a("../feature/platformDownloads/main")
                , p = a("../feature/formWidgets/main")
                , q = a("../feature/prettify/main")
                , r = a("../feature/map/main")
                , s = a("../feature/timeAgo/main")
                , t = a("../feature/hide-show-guide/main")
                , u = a("../feature/heroBanner/main")
                , v = a("most")
                , w = a("jquery")
                , x = Array.prototype.slice
                , y = /^data-/i
                , z = {
                search: g,
                "search-facets": h,
                "filterable-list": i,
                "clipboard-buttons": j,
                "code-sidebar": k,
                "sts-import": l,
                "mobile-support": m,
                "info-popups": n,
                "platform-downloads": o,
                "form-widgets": p,
                "code-prettify": q,
                map: r,
                timeago: s,
                "hide-show-guide": t,
                "hero-banner": u
            };
            d(z, document).each(function(a) {
                w(window).unload(function() {
                    f(a)
                })
            })
        });
})(System, System);
