import * as THREE from "three";

export default function example() {
  // Canvas
  const canvas = document.querySelector("#App");

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("black");

  // Renderer
  const renderer = new THREE.WebGL1Renderer({
    canvas,
    antialias: true,
    // alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setClearColor("#00ff00");
  // renderer.setClearAlpha(0.5);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(2, 2, 5);
  scene.add(camera);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 1;
  light.position.y = 1;
  light.position.z = 2;
  scene.add(light);

  // Mesh
  const geometary = new THREE.BoxBufferGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: "red",
  });
  const mesh = new THREE.Mesh(geometary, material);
  scene.add(mesh);

  // Render
  renderer.render(scene, camera);

  // Event
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  window.addEventListener("resize", setSize);

  // Animation
  const clock = new THREE.Clock();
  function animation() {
    const delta = clock.getDelta();
    mesh.rotation.y += delta;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animation);
  }
  animation();
}
