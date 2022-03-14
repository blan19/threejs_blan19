import * as THREE from "three";

export default function example() {
  // Canvas
  const canvas = document.querySelector("#App");

  // Scene
  const scene = new THREE.Scene();

  // Renderer
  const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Camera
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight), // left
    window.innerWidth / window.innerHeight, // right
    1,
    -1,
    0.1,
    1000
  );
  camera.position.set(1, 2, 5);
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.5;
  camera.updateProjectionMatrix();
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
}
