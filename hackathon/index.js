//we always need scene, camera and renderer
import * as THREE from 'three';
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamer(
    75,
    window.innerHeight / window.innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)