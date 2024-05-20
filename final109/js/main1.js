/* 
glTF import:
- glTF loader imported + enabled
-Global variable added to store dog gltf
-Two directional lights added to view glTF
- Added HELPERS to debug light position (disable after you place them)
-glTF imported from blender (not it is an *embedded* .glTF file, not .glb)
-Changed material on ball from BASIC to STANDARD so that the geometry catches light
*/


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, ball, dog, ball2, ball3, ball4, ball5, ball6, ball7, ball8;

//animation variables
let actionPant, actionTail;

let mixer;

// Raycaster
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();


function intersect(pointerPos) {
    raycaster.setFromCamera(pointerPos, camera);
    return raycaster.intersectObjects(scene.children);
  }

// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x03333);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // ~~~~~~ Add Lights ~~~~~~
    // Add helpers to debug the lights' position - COMMENT OUT WHEN DONE placing the light! https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper

    // ~~ add directional light 
    const lightRight = new THREE.DirectionalLight(0xffff000, 3);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    const helperRight = new THREE.DirectionalLightHelper(lightRight, 5);
    scene.add(helperRight); // comment out when done placing light


    // ~~ add directional light 
    const lightLeft = new THREE.DirectionalLight(0xff00000, 3);
    lightLeft.position.set(-3, 4, 5);
    scene.add(lightLeft);

    const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    scene.add(helperLeft); // comment out when done placing light






    // ~~~~~~ Initiate add-ons ~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models



    // ~~~~~~ Create Geometry ~~~~~~

    // ---> create capsule
 

    // CREATE cube6

    
    const geometry7 = new THREE.BoxGeometry(4, .5, 3);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture5 = new THREE.TextureLoader().load('assets/frag.png');
    const material6 = new THREE.MeshStandardMaterial({ map: texture5 });
    texture5.minFilter = THREE.LinearFilter;
    ball6 = new THREE.Mesh(geometry7, material6);
    scene.add(ball6);




    

    

    // //plane
    // const geometry3 = new THREE.PlaneGeometry( 1, 1 );
    // const material3 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    // const plane = new THREE.Mesh(geometry3, material3);
    // scene.add(plane);

    // //ring
    // const geometry4 = new THREE.RingGeometry( 1, 2, 32 ); 
    // const material4 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    // const mesh = new THREE.Mesh( geometry4, material4 ); 
    // scene.add(mesh);

    // const geometry5 = new THREE.CircleGeometry( 5, 32 ); 
    // const material5 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    // const circle = new THREE.Mesh( geometry5, material5 ); scene.add( circle );  


    // --> Load glTF

    // load dog model
    // loader.load('assets/dog_shiny.gltf', function (gltf) {
    //     dog = gltf.scene;
    //     scene.add(dog);
    //     dog.scale.set(2, 2, 2); // scale your model
    //     dog.position.y = -2; // set initial position
        

    //     //animation
    //     mixer = new THREE.AnimationMixer(dog);
    //     const clips = gltf.animations;

    //     //load + play animation
    //     const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
    //     actionPant = mixer.clipAction(clipPant);
    //     // actionPant.play();
        
    //     const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
    //     actionTail = mixer.clipAction(clipTail);
    //     actionTail.play();
        
        
    //     // clips.forEach(function(clip) {
    //     //     const action = mixer.clipAction(clip);
    //     //     action.play();
    //     // })
        
    // })




    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 5;


}


// ~~~~~~~~~~~~~~~~ Event Listener ~~~~~~~~~~~~~~~~


// let mouseIsDown = false;


// document.querySelector("body").addEventListener("mousedown", () => {
//     actionPant.play();
//     actionPant.paused = false;
//     mouseIsDown = true;
//     console.log("mousedown");
// })

// document.querySelector("body").addEventListener("mouseup", () => {
//     // actionPant.stop();
//     actionPant.paused = true;
//     mouseIsDown = false;
//     console.log("mouseup");
// })

// document.querySelector("body").addEventListener("mousemove", () => {
//     if(mouseIsDown == true){
//     console.log("mousemove");
//     ball.rotation.x += .5;
//     }
// })

// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓
    

    //ball6
    
    ball6.rotation.x += 0.005;
    
    

   
   
    
    
    

    

    // plane
    // plane.rotation.x += 0.105;
    // plane.rotation.y += 0.015;
    
    // plane.position.x = Math.sin(Date.now() / 1100) * 6;
    // plane.position.y = Math.sin(Date.now() / 6100) * 8;
    // plane.position.z = Math.sin(Date.now() / 2100) * 8;
    
    //ring
    // mesh.rotation.x += 0.105;
    // mesh.rotation.y += 0.015;
    
    // mesh.position.x = Math.sin(Date.now() / 1100) * 6;
    // mesh.position.y = Math.sin(Date.now() / 6100) * 8;
    // mesh.position.z = Math.sin(Date.now() / 2100) * 8;

    //CIRCLE
    // circle.rotation.x += 0.105;
    // circle.rotation.y += 0.015;
    
    // circle.position.x = Math.sin(Date.now() / 1100) * 6;
    // circle.position.y = Math.sin(Date.now() / 6100) * 8;
    // circle.position.z = Math.sin(Date.now() / 2100) * 8;
   

    
    

    


    // console.log(ball.position.x);

    // dog.rotation.x += 0.007;
    // dog.rotation.y += 0.007;

    // if (dog) {
    //     // dog.rotation.x += 0.007;
    //     // dog.rotation.y += 0.007;
    //     dog.rotation.y = Math.sin(Date.now() / 500) * .5;
    // }


    // always end animation loop with renderer
    if(mixer) 
    mixer.update(clock.getDelta());
    renderer.render(scene, camera);

    window.addEventListener("click", (event) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
        const intersectedObjects = intersect(pointer);
        if (intersectedObjects.length > 0) {
          window.open("./index.html", "_blank");
        }
    
      });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);


init(); // execute initialize function
animate(); // execute animation function

