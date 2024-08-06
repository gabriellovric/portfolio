import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 80;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);


function createSphere() {
    const s_geometry = new THREE.SphereGeometry(15, 32, 16);
    const s_material = new THREE.MeshNormalMaterial({ wireframe: true });
    // const s_material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    return new THREE.Mesh(s_geometry, s_material);
}

const sphere1 = createSphere();
scene.add(sphere1);
const sphere2 = createSphere();
sphere2.position.x = 30;
sphere2.position.y = 30;
scene.add(sphere2);


function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;


    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);


window.addEventListener('resize', onWindowResize, false);
window.addEventListener('keydown', (e) => {
    console.log(e.code)
    if (e.code == 'ArrowUp') {
        console.log("up")
        camera.position.y += 1
    }
    if (e.code == 'ArrowDown') {
        camera.position.y -= 1
    }
    if (e.code == 'ArrowLeft') {
        camera.position.x -= 1
    }
    if (e.code == 'ArrowRight') {
        camera.position.x += 1
    }
});

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
