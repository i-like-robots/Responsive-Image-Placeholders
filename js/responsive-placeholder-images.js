(function() {

    // Only load images if the browser 'cuts the mustard' <http://responsivenews.co.uk/post/18948466399/cutting-the-mustard/>
    if ( ! document.addEventListener || ! document.querySelector) {
        return alert("This page is \"cutting the mustard\" and your browser didn't make it.");
    }

    var deferImage = function(element) {
        var i, len, attr;
        var img = new Image();
        var placehold = element.children[0];

        element.className+= ' is-loading';

        img.onload = function() {
            element.className = element.className.replace('is-loading', 'is-loaded');
            element.replaceChild(img, placehold);
        };

        for (i = 0, len = placehold.attributes.length; i < len; i++) {
            attr = placehold.attributes[i];

            console.log(attr.name);

            if (attr.name.match(/^data-/)) {
                img.setAttribute(attr.name.replace('data-', ''), attr.value);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var placeholders = document.querySelectorAll('.defer-image');

        for (var i = 0, len = placeholders.length; i < len; i++) {
            deferImage(placeholders[i]);
        }
    });

})();