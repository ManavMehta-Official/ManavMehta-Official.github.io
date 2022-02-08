//IMPORTS
import './style.css'
import * as THREE from 'three';   


//SCENEE, CAMERA, RENDER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true
camera.position.setZ(30);


renderer.render( scene, camera );


//GEOMETERY
const geometery = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe:true } );
const torus = new THREE.Mesh( geometery, material );
scene.add(torus)









//ANIMATE
function animate() {
    requestAnimationFrame( animate );

    torus.rotation.z += 0.01


    renderer.render(scene, camera);
}

animate()
