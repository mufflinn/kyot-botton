<!-- GSAP Core -->
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<!-- ScrollTrigger Plugin -->
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

<script>
  // Register the plugin
  gsap.registerPlugin(ScrollTrigger);

  // Example animation for your .title
  gsap.to(".title", {
    x: 150, 
    rotation: 360,
    duration: 2,
    scrollTrigger: {
      trigger: ".title",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true // <- shows start/end points (remove later)
    }
  });
</script>
