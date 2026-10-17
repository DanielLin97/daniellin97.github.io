(function () {
  "use strict";

  var section = document.querySelector(".scholar-service");
  var canvas = section && section.querySelector(".scholar-particle-field");

  if (!section || !canvas) {
    return;
  }

  var context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var particles = [];
  var pointer = { active: false, x: 0, y: 0 };
  var width = 0;
  var height = 0;
  var pixelRatio = 1;
  var frame = null;
  var visible = false;

  function seededRandom(seed) {
    var value = seed >>> 0;

    return function () {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function rebuild() {
    var bounds = section.getBoundingClientRect();
    var random = seededRandom(1739);
    var spacing;
    var row = 0;

    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    spacing = width < 700 ? 48 : 58;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    particles = [];

    for (var y = 18; y < height; y += spacing) {
      var offset = row % 2 ? spacing * 0.48 : 0;

      for (var x = 4 - offset; x < width; x += spacing) {
        var homeX = x + offset + (random() - 0.5) * 13;
        var homeY = y + (random() - 0.5) * 12;

        particles.push({
          color: random() > 0.76 ? "rgba(215, 154, 58, 0.82)" : "rgba(242, 234, 216, 0.72)",
          homeX: homeX,
          homeY: homeY,
          phase: random() * Math.PI * 2,
          radius: 0.75 + random() * 0.85,
          vx: 0,
          vy: 0,
          x: homeX,
          y: homeY
        });
      }

      row += 1;
    }

    draw(0, true);
  }

  function draw(time, staticFrame) {
    var influenceRadius = 125;
    var influenceRadiusSquared = influenceRadius * influenceRadius;

    context.clearRect(0, 0, width, height);

    particles.forEach(function (particle) {
      if (!staticFrame) {
        var driftX = Math.cos(time * 0.00038 + particle.phase) * 0.45;
        var driftY = Math.sin(time * 0.00044 + particle.phase) * 0.45;
        var targetX = particle.homeX + driftX;
        var targetY = particle.homeY + driftY;

        if (pointer.active) {
          var dx = particle.x - pointer.x;
          var dy = particle.y - pointer.y;
          var distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < influenceRadiusSquared && distanceSquared > 0.01) {
            var distance = Math.sqrt(distanceSquared);
            var force = Math.pow(1 - distance / influenceRadius, 1.65) * 34;
            targetX += dx / distance * force;
            targetY += dy / distance * force;
          }
        }

        particle.vx = (particle.vx + (targetX - particle.x) * 0.075) * 0.82;
        particle.vy = (particle.vy + (targetY - particle.y) * 0.075) * 0.82;
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();
    });
  }

  function animate(time) {
    draw(time, false);
    frame = window.requestAnimationFrame(animate);
  }

  function start() {
    if (!visible || reduceMotion || !finePointer || frame !== null) {
      return;
    }

    frame = window.requestAnimationFrame(animate);
  }

  function stop() {
    if (frame !== null) {
      window.cancelAnimationFrame(frame);
      frame = null;
    }
  }

  function updatePointer(event) {
    var bounds = section.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
  }

  if (finePointer && !reduceMotion) {
    section.addEventListener("pointermove", updatePointer, { passive: true });
    section.addEventListener("pointerleave", function () {
      pointer.active = false;
    });
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(rebuild).observe(section);
  } else {
    window.addEventListener("resize", rebuild, { passive: true });
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;

      if (visible) {
        start();
      } else {
        stop();
      }
    }, { rootMargin: "120px 0px" }).observe(section);
  } else {
    visible = true;
  }

  rebuild();
  start();
}());
