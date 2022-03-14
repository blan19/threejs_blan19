import * as THREE from "three";

export default function example() {
  // Canvas
  const canvas = document.querySelector("#App");

  // Scene
  const scene = new THREE.Scene();

  // Renderer
  const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(1, 2, 5);
  scene.add(camera);

  // Mesh
  const geometary = new THREE.BoxBufferGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "#ff0000",
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
}
