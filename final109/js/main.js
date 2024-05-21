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
let scene, camera, renderer, ball, dog, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9,  plane, mesh, circle;

//animation variables
let actionPant, actionTail;

let mixer;

const geometries = [];
const urls = ["https://johnjsantos91.github.io/glitchart.html", "https://johnjsantos91.github.io/minecraft.html", "https://johnjsantos91.github.io/netart/index.html", "https://johnjsantos91.github.io/runwayml.html", "https://johnjsantos91.github.io/sketch.html", "https://johnjsantos91.github.io/index.html", "https://johnjsantos91.github.io/final.html", "https://johnjsantos91.github.io/video.html", "https://johnjsantos91.github.io/bio.html"];

const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


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
    const geometry = new THREE.BoxGeometry(1, 1, .5);

    // -> change material from Basic to standard for geometry to capture lights
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture = new THREE.TextureLoader().load('assets/ga.jpg');

    const material = new THREE.MeshStandardMaterial({ map: texture });
    texture.minFilter = THREE.LinearFilter; 
    // makes image sharper but aliased

    ball = new THREE.Mesh(geometry, material);
    scene.add(ball);
    geometries.push(ball);

    //CREATE cube2
    const geometry2 = new THREE.BoxGeometry(1, 1, 4);
    // const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    
    const texture1 = new THREE.TextureLoader().load('assets/pac.jpg');
    const material2 = new THREE.MeshStandardMaterial({ map: texture1 });
    texture1.minFilter = THREE.LinearFilter;
    ball2 = new THREE.Mesh(geometry2, material2);
    scene.add(ball2);
    geometries.push(ball2);

    //CREATE cube3
    const geometry6 = new THREE.BoxGeometry(1, 1, 1);
    // const material6 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    
    const texture2 = new THREE.TextureLoader().load('assets/RFTS.jpg');
    const material3 = new THREE.MeshStandardMaterial({ map: texture2 });
    texture2.minFilter = THREE.LinearFilter;
    ball3 = new THREE.Mesh(geometry6, material3);
    scene.add(ball3);
    geometries.push(ball3);
    
    // CREATE cube4
    const geometry4 = new THREE.BoxGeometry(.5, .5, .5);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture3 = new THREE.TextureLoader().load('assets/run.jpg');
    const material4 = new THREE.MeshStandardMaterial({ map: texture3 });
    texture3.minFilter = THREE.LinearFilter;
    ball4 = new THREE.Mesh(geometry4, material4);
    scene.add(ball4);
    geometries.push(ball4);

    // CREATE cube5
    const geometry5 = new THREE.BoxGeometry(.75, .75, 2);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture4 = new THREE.TextureLoader().load('assets/sc1.png');
    const material5 = new THREE.MeshStandardMaterial({ map: texture4 });
    texture4.minFilter = THREE.LinearFilter;
    ball5 = new THREE.Mesh(geometry5, material5);
    scene.add(ball5);
    geometries.push(ball5);

    // CREATE cube6
    const geometry7 = new THREE.BoxGeometry(4, .5, 3);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture5 = new THREE.TextureLoader().load('assets/port.jpg');
    const material6 = new THREE.MeshStandardMaterial({ map: texture5 });
    texture5.minFilter = THREE.LinearFilter;
    ball6 = new THREE.Mesh(geometry7, material6);
    scene.add(ball6);
    geometries.push(ball6);

    // CREATE cube7
    const geometry8 = new THREE.BoxGeometry(.1, 1, 1);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture6 = new THREE.TextureLoader().load('assets/nat.jpg');
    const material7 = new THREE.MeshStandardMaterial({ map: texture6 });
    texture6.minFilter = THREE.LinearFilter;
    ball7 = new THREE.Mesh(geometry8, material7);
    scene.add(ball7);
    geometries.push(ball7);


    // CREATE cube8
    const geometry9 = new THREE.BoxGeometry(1, 1, 1);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture7 = new THREE.TextureLoader().load('assets/vid.jpg');
    const material8 = new THREE.MeshStandardMaterial({ map: texture7 });
    texture7.minFilter = THREE.LinearFilter;
    ball8 = new THREE.Mesh(geometry9, material8);
    scene.add(ball8);
    geometries.push(ball8);
    

    // CREATE cube9
    const geometry10 = new THREE.BoxGeometry(1, 1, 1);
    // const material4 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture8 = new THREE.TextureLoader().load('assets/bio.jpg');
    const material9 = new THREE.MeshStandardMaterial({ map: texture8 });
    texture8.minFilter = THREE.LinearFilter;
    ball9 = new THREE.Mesh(geometry10, material9);
    scene.add(ball9);
    geometries.push(ball9);

 

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

function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(geometries);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        const index = geometries.indexOf(clickedObject);
        if (index !== -1) {
            const url = urls[index];
            window.open(url, '_blank');
        }
    }
}

window.addEventListener('click', onMouseClick, false);
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
    //interview
    ball.rotation.x += 0.007;
    ball.rotation.y += 0.007;
    
    ball.position.x = -10;
    ball.position.y =  -4;
    ball.position.z = -4;

    //xpo
    ball2.rotation.z += 0.005;
    
    
    ball2.position.x = -8;
    ball2.position.y = 5;
    ball2.position.z = -8;

    //bear
    ball3.rotation.x += 0.0555;
    ball3.rotation.y += 0.0055;
    
    ball3.position.x = 5;
    ball3.position.y = 5;
    ball3.position.z = -3;

    //nightmare
    ball4.rotation.x += 0.010;
    ball4.rotation.y += 0.022;
    
    ball4.position.x = 5;
    ball4.position.y = -1;
    ball4.position.z = 1;

    //bio
    ball5.rotation.x += 0.102;
    ball5.rotation.y += 0.0200;
    
    ball5.position.x =  1;
    ball5.position.y =  -5;
    ball5.position.z =  -2;

    //title
    ball6.rotation.x += 0.000;
    ball6.rotation.y += 0.000;
    ball6.rotation.z += 0.002;
    
    // ball6.position.x = Math.sin(Date.now() / 1100) * 1;
    // ball6.position.y = Math.sin(Date.now() / 6100) * -5;
    ball6.position.z = -5;

    //ball7
    ball7.rotation.x += 0.100;
    ball7.rotation.y += 0.010;
    ball7.rotation.z += 0.002;
    
    ball7.position.x =  -10;
    ball7.position.y =  -2;
    ball7.position.z = -7;

    //robot
    ball8.rotation.x += 0.001;
    ball8.rotation.y += 0.001;
    ball8.rotation.z += 0.002;
    
    ball8.position.x =  3;
    ball8.position.y =  6;
    ball8.position.z =  -13;

    //black
    ball9.rotation.x += 0.001;
    ball9.rotation.y += 0.001;
    ball9.rotation.z += 0.002;
    
    ball9.position.x =  1;
    ball9.position.y =  7;
    ball9.position.z =  -5;

    

    //plane
    
    
  
    
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

   
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function

