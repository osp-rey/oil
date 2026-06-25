(() => {
    "use strict";
    function brandsChange() {
        const buttons = document.querySelectorAll("[data-brand]");
        if (buttons.length) {
            const title = document.querySelector("#modal-offer .modal-b__title");
            const titleBrand = title.querySelector("._brand");
            const titlePrice = title.querySelector("._price");
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    titleBrand.textContent = btn.dataset.brand;
                    titlePrice.textContent = btn.dataset.price;
                });
            });
        }
    }
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerOpen = document.querySelector("#burger-open");
            const burgerClose = document.querySelector("#burger-close");
            const burgerOverlay = document.querySelector("#burger-overlay");
            const header = document.querySelector(".header");
            const burgerAnchors = burger.querySelectorAll("a[href^='/#']");
            burgerAnchors.forEach(anchor => {
                anchor.addEventListener("click", () => {
                    handleClose();
                });
            });
            burgerOverlay.addEventListener("click", handleClose);
            burgerOpen.addEventListener("click", () => {
                handleOpen();
            });
            burgerClose.addEventListener("click", () => {
                handleClose();
            });
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            function handleOpen() {
                document.body.classList.add("body-hidden");
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                updateHeightBurger();
            }
            function handleClose() {
                document.body.classList.remove("body-hidden");
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function buttonsNote() {
        const butons = document.querySelectorAll("[data-btn-note]");
        if (butons.length) {
            butons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const selectorTarget = btn.dataset.targetNote;
                    const target = document.querySelector(selectorTarget);
                    const value = btn.dataset.btnNote;
                    if (target) {
                        target.value = value;
                    }
                });
            });
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header && window.matchMedia("(min-width: 992px)").matches) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop > lastScrollTop && scrollTop > header.clientHeight) {
                        header.classList.add("_scroll");
                    } else {
                        header.classList.remove("_scroll");
                    }
                    lastScrollTop = scrollTop;
                }
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) {
                resolve(script);
            } else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) {
                    htmlScript.type = type;
                }
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function createEl(tag, classes = "") {
        const item = document.createElement(tag);
        if (classes) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        }
        return item;
    }
    function map() {
        const maps = document.querySelectorAll(".map");
        if (maps.length) {
            maps.forEach(map => {
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => handlerCreateMap(target));
                            observer.unobserve(target);
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                observer.observe(map);
            });
            function handlerCreateMap(map) {
                const center = JSON.parse(map.dataset.center);
                const zoom = Number(map.dataset.zoom);
                const iconHref = map.dataset.icon;
                let iconSize = [ 250, 105 ];
                let iconPosition = [ -122, -107 ];
                if (window.matchMedia("(max-width: 1365ox)")) {
                    iconSize = [ 185, 80 ];
                    iconPosition = [ -90, -85 ];
                }
                let objectMark = {};
                if (iconHref) {
                    objectMark = {
                        iconLayout: "default#image",
                        iconImageHref: iconHref,
                        iconImageSize: iconSize,
                        iconImageOffset: iconPosition
                    };
                }
                function init() {
                    const htmlMap = new ymaps.Map(map, {
                        center,
                        zoom
                    });
                    const placemark = new ymaps.Placemark(center, {}, objectMark);
                    htmlMap.geoObjects.add(placemark);
                    htmlMap.controls.remove("geolocationControl");
                    htmlMap.controls.remove("searchControl");
                    htmlMap.controls.remove("trafficControl");
                    htmlMap.controls.remove("typeSelector");
                    htmlMap.controls.remove("fullscreenControl");
                    htmlMap.controls.remove("rulerControl");
                }
                ymaps.ready(init);
            }
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) {
            containers.forEach(container => {
                const btn = container.querySelector("[data-more-btn]");
                const count = +container.dataset.countShow;
                const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
                if (hideItems.length === 0) btn.remove();
                btn.addEventListener("click", () => {
                    const items = container.querySelectorAll("[data-more-item]");
                    const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                    hideItems.splice(0, count).forEach(item => {
                        item.classList.add("_active");
                        setTimeout(() => {
                            item.classList.add("_show");
                        });
                    });
                    if (hideItems.length <= 0) btn.remove();
                });
            });
        }
    }
    function handlerSelect() {
        const selects = document.querySelectorAll(".select");
        if (selects.length) {
            document.body.addEventListener("click", handlerCloseAll);
            selects.forEach(select => {
                const btn = select.querySelector(".select-btn");
                const input = btn.querySelector(".input");
                const items = select.querySelectorAll(".select-item");
                const body = select.querySelector(".select-body");
                select.addEventListener("click", e => e.stopPropagation());
                btn.addEventListener("click", () => {
                    if (select.classList.contains("_open")) handlerClose(select); else handlerOpen(select);
                });
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        input.value = item.textContent;
                        select.classList.remove("_open");
                    });
                });
                input.addEventListener("input", e => {
                    const value = e.target.value.toLowerCase();
                    let hideCount = 0;
                    items.forEach(item => {
                        const valueItem = item.textContent.toLowerCase();
                        if (valueItem.includes(value)) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                            hideCount++;
                        }
                    });
                    if (hideCount === items.length) {
                        select.classList.remove("_open");
                    } else {
                        select.classList.add("_open");
                    }
                });
            });
            function handlerOpen(select) {
                handlerCloseAll();
                select.classList.add("_open");
            }
            function handlerClose(select) {
                select.classList.remove("_open");
            }
            function handlerCloseAll() {
                const openSelects = document.querySelectorAll(".select._open");
                if (openSelects.length) openSelects.forEach(s => s.classList.remove("_open"));
            }
        }
    }
    function sliders() {
        const heroSlider = document.querySelector(".s-hero__slider");
        if (heroSlider) {
            const swiper = new Swiper(heroSlider, {
                speed: 900,
                spaceBetween: 20,
                autoplay: {
                    delay: 6e3
                },
                navigation: {
                    prevEl: ".s-hero .slider-arrow._prev",
                    nextEl: ".s-hero .slider-arrow._next"
                },
                pagination: {
                    el: ".s-hero .slider-pagination",
                    clickable: true
                }
            });
        }
        const produtsSlider = document.querySelector(".s-products__slider");
        if (produtsSlider) {
            const swiper = new Swiper(produtsSlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                autoplay: {
                    delay: 5500
                },
                navigation: {
                    prevEl: ".s-products .slider-arrow._prev",
                    nextEl: ".s-products .slider-arrow._next"
                },
                scrollbar: {
                    el: ".s-products .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 40,
                        slidesPerView: 4
                    },
                    1200: {
                        spaceBetween: 25,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    }
                }
            });
        }
        const gallerySlider = document.querySelector(".s-gallery__slider");
        if (gallerySlider) {
            const swiper = new Swiper(gallerySlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".s-gallery .slider-arrow._prev",
                    nextEl: ".s-gallery .slider-arrow._next"
                },
                scrollbar: {
                    el: ".s-gallery .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 25,
                        slidesPerView: "auto"
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) {
                initSpollers(spollersRegular);
            }
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) {
                mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            }
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) {
                document.addEventListener("click", function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) {
                        spollersClose.forEach(spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        });
                    }
                });
            }
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) {
                    return item.dataset[dataSetValue].split(",")[0];
                }
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) {
                                return true;
                            }
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    class WidgetCalc {
        constructor(selector) {
            this.widget = typeof selector === "string" ? document.querySelector(selector) : selector;
            if (!this.widget) {
                throw Error("widget not found");
            }
            this.windows = this.widget.querySelectorAll(".widget-calc-window");
            this.navItems = this.widget.querySelectorAll(".widget-calc-nav-item");
            this.form = this.widget.querySelector(".widget-calc-form");
            this.formNote = null;
            this.currentIndex = 0;
            this.init();
            if (this.form) {
                this.formNote = this.form.querySelector(".input-note");
            }
        }
        init() {
            this.windows.forEach(window => {
                const btnNext = window.querySelector(".widget-calc-next");
                if (!btnNext) return;
                btnNext.addEventListener("click", () => {
                    this.changeWindow();
                });
            });
        }
        changeWindow() {
            const currentWindow = this.windows[this.currentIndex];
            const currentItem = this.navItems[this.currentIndex];
            const nextWindow = this.windows[this.currentIndex + 1];
            const nextItem = this.navItems[this.currentIndex + 1];
            if (nextWindow) {
                const input = currentWindow.querySelector(".input");
                const isValid = this.isValid(input);
                if (!isValid) {
                    return;
                }
                currentItem.classList.remove("_active");
                nextItem.classList.add("_active");
                currentWindow.classList.remove("_show");
                setTimeout(() => {
                    currentWindow.classList.remove("_active");
                    nextWindow.classList.add("_active");
                    setTimeout(() => {
                        nextWindow.classList.add("_show");
                    }, 150);
                }, 150);
                if (this.formNote) {
                    this.formNote.value += `${currentItem.textContent.trim()}: ${input.value.trim()}\n`;
                }
                console.log(this.formNote.value);
                this.currentIndex++;
            }
        }
        isValid(input) {
            let valid = true;
            if (!input) {
                return valid;
            }
            if (!input.value) {
                input.classList.add("_not-valid");
                valid = false;
            } else {
                input.classList.remove("_not-valid");
            }
            return valid;
        }
    }
    function widgetCalc() {
        const widget = document.querySelector("#widget-calc");
        if (widget) {
            const widgetCalc = new WidgetCalc(widget);
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        burger();
        buttonsNote();
        sliders();
        handlerSelect();
        inputmask();
        widgetCalc();
        brandsChange();
        more();
        spoller();
        map();
        headerScroll();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false,
            on: {
                destroy: instance => {
                    const id = instance.getSlide().src;
                    if (id.includes("#modal")) {
                        const inputNote = document.querySelector(id).querySelector(".input-note");
                        if (inputNote) inputNote.value = "";
                    }
                }
            }
        });
    });
})();