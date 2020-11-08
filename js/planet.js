// Set width, height size
var width  = 1333,
		height = window.innerHeight;

// Create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000 );
// camera.position.z = 10;
 camera.position.set(0, 30, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

// Set Texture
const loader = new THREE.TextureLoader();

const sunTexture = loader.load("./images/sun.jpg");
const mercuryTexture = loader.load("./images/mercury.jpg");
const venusTexture = loader.load("./images/venus.jpg");
const earthTexture = loader.load("./images/earth.jpg");
const marsTexture = loader.load("./images/mars.jpg");
const jupiterTexture = loader.load("./images/jupiter.jpg");
const saturnTexture = loader.load("./images/saturn.jpg");
const uranusTexture = loader.load("./images/uranus.jpg");
const neptuneTexture = loader.load("./images/neptune.jpg");
const plutoTexture = loader.load("./images/pluto.jpeg");

// Set Materials
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture});
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const plutoMaterial = new THREE.MeshStandardMaterial({ map: plutoTexture });

// Set Mesh
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)

const sunMesh = new THREE.Mesh( geometry, sunMaterial );
sunMesh.position.set(0, 0, 0);
sunMesh.scale.setScalar(21.8); // 21.8
scene.add(sunMesh);

const mercuryGroup = new THREE.Group();
const mercuryMesh = new THREE.Mesh(geometry, mercuryMaterial);
createPlanet(scene, mercuryMesh, mercuryGroup, 31.2,0.08);

const venusGroup = new THREE.Group();
const venusMesh = new THREE.Mesh(geometry, venusMaterial);
createPlanet(scene, venusMesh, venusGroup, 32.1, 0.18);

const earthGroup = new THREE.Group();
const earthMesh = new THREE.Mesh(geometry, earthMaterial);
createPlanet(scene, earthMesh, earthGroup, 33, 0.2);

const marsGroup = new THREE.Group();
const marsMesh = new THREE.Mesh(geometry, marsMaterial);
createPlanet(scene, marsMesh, marsGroup, 34.5, 0.1);

const jupiterGroup = new THREE.Group();
const jupiterMesh = new THREE.Mesh(geometry, jupiterMaterial);
createPlanet(scene, jupiterMesh, jupiterGroup, 45, 2.24);

const saturnGroup = new THREE.Group();
const saturnMesh = new THREE.Mesh(geometry, saturnMaterial);
createPlanet(scene, saturnMesh, saturnGroup, 60, 1.88);

const uranusGroup = new THREE.Group();
const uranusMesh = new THREE.Mesh(geometry, uranusMaterial);
createPlanet(scene, uranusMesh, uranusGroup, 90, 0.8);

const neptuneGroup = new THREE.Group();
const neptuneMesh = new THREE.Mesh(geometry, neptuneMaterial);
createPlanet(scene, neptuneMesh, neptuneGroup, 120, 0.78);

const plutoGroup = new THREE.Group();
const plutoMesh = new THREE.Mesh(geometry, plutoMaterial);
createPlanet(scene, plutoMesh, plutoGroup, 130, 0.036);


// Set a source of light
const light = new THREE.PointLight("white", 1.25); //(color, intensity, distance)
light.position.set(0, 0, 0);
scene.add(light);

// Illuminate the sun
createSpotlights(scene);

const animate = function () {
  requestAnimationFrame( animate );

  sunMesh.rotation.y += 0.02;

  renderer.render( scene, camera );
};

animate();

function createPlanet(scene, mesh, group, x, scale) {
  mesh.position.set(x, 0, 0);
  mesh.scale.setScalar(scale);
  group.add(mesh);
  scene.add(group);
}


function createSpotlights(scene) {
  var color = 'white';
  var intensity = 3;
  var distance = 35;
  var angle = Math.PI/4;
/*
  new Array(6).fill('').forEach((item, i) => {
    var spotlight = new THREE.SpotLight(color, intensity, distance, angle);
    var value = i % 2 === 0 ? 25 : -25;

    spotlight.position.set(
      i < 2 ? value : 0,
      i >= 2 && i < 4 ? value : 0,
      i >= 4 ? value : 0
    ); */

    var spotlight1 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight1.position.set(-25, 25, 0);
    scene.add( spotlight1 );
    var spotlight2 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight2.position.set(25, 25, 0);
    scene.add( spotlight2 );
    var spotlight3 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight3.position.set(25, -25, 0);
    scene.add( spotlight3 );
    var spotlight4 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight4.position.set(-25, -25, 0);
    scene.add( spotlight4 );
    var spotlight5 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight5.position.set(0, 0, 40);
    scene.add( spotlight5 );
    var spotlight6 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight6.position.set(0, 0, -40);
    scene.add( spotlight6 );
    var spotlight7 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight7.position.set(25, 0, 25);
    scene.add( spotlight7 );
    var spotlight8 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight8.position.set(25, 0, -25);
    scene.add( spotlight8 );
    var spotlight9 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight9.position.set(-25, 0, -25);
    scene.add( spotlight9 );
    var spotlight10 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight10.position.set(-25, 0, 25);
    scene.add( spotlight10 );
    var spotlight11 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight11.position.set(0, 25, 25);
    scene.add( spotlight11 );
    var spotlight12 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight12.position.set(0, 25, -25);
    scene.add( spotlight12 );
    var spotlight13 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight13.position.set(0, -25, 25);
    scene.add( spotlight13 );
    var spotlight14 = new THREE.SpotLight(color, intensity, distance, angle);
    spotlight14.position.set(0, -25, -25);
    scene.add( spotlight14 );



//    });
}



