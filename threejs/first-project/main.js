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


/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function createSphere(x, y) {
    const geometry = new THREE.SphereGeometry(15, 32, 16);

    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = x;
    sphere.position.x = y;

    return sphere;
}

const spheres = [
    createSphere(0, 0),
    createSphere(0, 50),
    createSphere(0, 100),
    createSphere(0, 150)
]

spheres.forEach(s => scene.add(s));

function animate() {
    spheres.forEach(s => {
        s.rotation.x += 0.01;
        s.rotation.y += 0.01;
    });

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


function doSomething(scrollPos) {
    // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
