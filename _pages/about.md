---
permalink: /
layout: null
redirect_from:
  - /about/
  - /about.html
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hongzhan Lin</title>
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg?v=3">
    <script>
      (function () {
        var variant;

        try {
          variant = sessionStorage.getItem("siteVariant");
          if (variant !== "classic" && variant !== "editorial") {
            var randomValue = window.crypto && window.crypto.getRandomValues
              ? window.crypto.getRandomValues(new Uint32Array(1))[0]
              : Math.floor(Math.random() * 4294967296);
            variant = randomValue % 2 === 0 ? "classic" : "editorial";
            sessionStorage.setItem("siteVariant", variant);
          }
        } catch (error) {
          variant = Math.random() < 0.5 ? "classic" : "editorial";
        }

        window.location.replace("/" + variant + "/");
      }());
    </script>
    <noscript><meta http-equiv="refresh" content="0;url=/classic/"></noscript>
  </head>
  <body></body>
</html>

