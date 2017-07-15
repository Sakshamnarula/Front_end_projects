
$(function () {
    /*  Write a new test suite named "RSS Feeds" */
    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined(); /*allFeeds object defined*/
            expect(allFeeds.length).not.toBe(0); /*allFeeds is notempty*/
        });

        it('url length not zero', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined(); /*ensures allFeeds object has a URL defined*/
                expect(allFeeds[i].url.length).not.toBe(0); /*ensures allFeeds object has a URL is not empty*/
            }
        });

        it('all names defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined(); /*ensures allFeeds object has a name defined*/
                expect(allFeeds[i].name.length).not.toBe(0); /*ensures allFeeds object has a name and it is not empty*/
            }
        });
    });

    /*  Write a new test suite named "The menu" */
    describe('The Menu', function () {
        it('the menu is hidden', function () {
            expect($("body").hasClass("menu-hidden")).toBe(true); /*menu element is hidden by default*/
        });
        it('change in visibility when clicked', function () {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false); /*hiding/showing of the menu element.*/
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });
    /*  Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) { /*asynchronous function*/
            loadFeed(0, function () {
                done();
            });
        });
        it('having minmum entry of 1', function (done) {
            expect($(".feed .entry").length > 0).toBe(true); /*there is at least  a single .entry element within the .feed container*/
            done();
        });
    });
    /*  Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        var previousfeed;
        var nextfeed;
        beforeEach(function (done) { /*asynchronous functions chained*/
            loadFeed(0, function () {
                previousfeed = $(".feed").html();
                loadFeed(1, function () {
                    nextfeed = $(".feed").html();
                    done();
                });
            });
        });
        it('previousfeed is not equal to nextfeed', function () {
            expect(previousfeed).not.toEqual(nextfeed); /*checking that the content actually changes.*/
        });
    });
}());
