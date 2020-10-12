"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    //   class Header {
    //     constructor() {
    //       const elem = document.createElement('div');
    //       elem.innerText = 'This is Header';
    //       document.body.appendChild(elem);
    //     }
    //   }
    //   class Content {
    //     constructor() {
    //       const elem = document.createElement('div');
    //       elem.innerText = 'This is Content';
    //       document.body.appendChild(elem);
    //     }
    //   }
    //   class Footer {
    //     constructor() {
    //       const elem = document.createElement('div');
    //       elem.innerText = 'This is Footer';
    //       document.body.appendChild(elem);
    //     }
    //   }
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
