// Overlord, Aotian 2019.10.10
$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if ($(window).width() <= 600) {
            p.style.fontSize = "14px"; // Smaller font size on iPhones
            p.style.lineHeight = "1.4"; // Adjust line height for better spacing
        }
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    if ($(window).width() <= 600) {
        $(".btn").css({
            "font-size": "12px", // Smaller font size
            "padding": "8px 10px", // Adjust padding
        });
    }
});
$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
$(document).ready(function () {
    // Detect screen width
    var screenWidth = $(window).width();

    // Set different animation speeds for iPhones
    var balloonAnimationSpeed = (screenWidth <= 600) ? 3000 : 1500; // Slow speed for iPhones

    // Balloons flying animation when the button is clicked
    $('#balloons_flying').on('click', function () {
        // Ensure balloons become visible when button is clicked
        $('#b1, #b2, #b3, #b4, #b5, #b6, #b7').css({
            'opacity': '1',       // Set balloons visible only when the button is clicked
            'z-index': '10'       // Ensure they appear in front
        });

        // Balloons flying animation (with staggered delay)
        $('#b1').animate({ top: '-500px' }, balloonAnimationSpeed);
        $('#b2').animate({ top: '-500px' }, balloonAnimationSpeed + 200); // Slight delay
        $('#b3').animate({ top: '-500px' }, balloonAnimationSpeed + 400); // More delay for staggered effect
        $('#b4').animate({ top: '-500px' }, balloonAnimationSpeed + 600);
        $('#b5').animate({ top: '-500px' }, balloonAnimationSpeed + 800);
        $('#b6').animate({ top: '-500px' }, balloonAnimationSpeed + 1000);
        $('#b7').animate({ top: '-500px' }, balloonAnimationSpeed + 1200);
    });
});


