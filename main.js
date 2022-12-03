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

const loader = new GLTFLoader();
 loader.load( 'globus.glb', function ( gltf ) {
 	scene.add( gltf.scene );
 }, undefined, function ( error ) {
 	console.error( error );
 } );
loader.load( 'stecknadel.glb', function ( gltf ) {
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
animate()

//  window.addEventListener( 'pointerup', function () {

//     this.alert("Deutschland Hauptstadt: Berlin") ;
 
//   } );