import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

// const light = new THREE.AmbientLight( 0x404040,5 ); // soft white light
// scene.add( light );
// const directionalLightup = new THREE.DirectionalLight( 0xffffff, 30 );
// scene.add( directionalLightup );
// const directionalLightdown = new THREE.DirectionalLight( 0xffffff, 50 );
// directionalLightdown.position.set(new THREE.Vector3 (0,-1,0))
// scene.add( directionalLightdown );
// const directionalLightright = new THREE.DirectionalLight( 0xffffff, 30 );
// directionalLightright.position.set(new THREE.Vector3 (-4,0,0))
// scene.add( directionalLightright );
// const directionalLightleft = new THREE.DirectionalLight( 0xffffff, 50 );
// directionalLightleft.position.set(new THREE.Vector3 (-4,0,0))
// scene.add( directionalLightleft );
const lightl = new THREE.PointLight( 0xffffff, 15, 1000 );
lightl.position.set( 180, 0, 50 );
const lightr = new THREE.PointLight( 0xffffff, 15, 1000 );
lightr.position.set( -180, -75, 50 );
const lightu = new THREE.PointLight( 0xffffff, 15, 1000 );
lightu.position.set( 0, 180, -50 );
scene.add( lightl,lightr,lightu );

// const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light );

const color5 = new THREE.Color( 'skyblue' );
scene.background=color5

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth-100, window.innerHeight-100 );
document.body.appendChild( renderer.domElement );

let mesh;
const intersection = {
	intersects: false,
	point: new THREE.Vector3(),
	normal: new THREE.Vector3()
};

const loader = new GLTFLoader();
 loader.load( 'globus.glb', function ( gltf ) {
 	scene.add( gltf.scene );
	 mesh = gltf.scene;
 }, undefined, function ( error ) {
 	console.error( error );
 } );
 const mouse = new THREE.Vector2();
 let raycaster = new THREE.Raycaster();
 const intersects = [];
loader.load( 'stecknadel deutschland.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel japan.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel Mexiko.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel Ägypten.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel Irland.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel Italien.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
loader.load( 'stecknadel Vereinigtes Königreich.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );



const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
// camera.position.set( -2, 8, -10);
camera.position.set( -2, 8, -10);
controls.update();

function animate() {
    requestAnimationFrame( animate );
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
	renderer.render( scene, camera );
}
animate();
 window.addEventListener( 'pointerup', function () {
let modal = document.getElementById("myModal");
	modal.style.display = "block";

 });
	function checkIntersection( x, y ) {
	if ( mesh === undefined ) return;
	mouse.x = ( x / window.innerWidth ) * 2 - 1;
	mouse.y = - ( y / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );
	const intersectedObjects = raycaster.intersectObjects( scene.children);
	console.log("intersected objects: " + intersectedObjects.length);
	if(intersectedObjects.length > 0) {
		for(let i = 0; i < intersectedObjects.length; i++) {
			console.log("intersect " + intersectedObjects[i].Vector3 + "\n")
		}
	}

}
window.addEventListener( 'mousemove', function ( event ) {

			checkIntersection( event.clientX, event.clientY );

		if ( intersection.intersects ) popup();



} );


// Image popup:
function popup() {
	alert("platzhalter");
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal = document.getElementById("myModal");
var canvas = document.getElementById("c")
var captionText = document.getElementById("caption");
canvas.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

