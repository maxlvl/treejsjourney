import * as THREE from "three";
import { MeshPhongMaterial } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");
console.log(canvas);

const scene = new THREE.Scene();
const myGeometry = new THREE.BoxGeometry(1, 1, 1);
const myMaterial = new THREE.MeshPhongMaterial({
  color: "turquoise",
});
const myMesh = new THREE.Mesh(myGeometry, myMaterial);
scene.add(myMesh);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Add a point light to the scene
const pointLight = new THREE.PointLight("#0xffffff", 75);
pointLight.position.set(1, 2, 8);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  myMesh.rotation.x += 0.005;
  myMesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
