const earth_rt_speed = 0.0005;

// Set width, height size
var width  = 1333,
		height = window.innerHeight;

// Create scene
const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000 );
camera.position.set(50, 10, 50);

// TrackballControls for view control
var controls = new THREE.TrackballControls(camera);
controls.update();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

// Control Speed
var speed=0.001;

document.getElementById("Speedup").onclick = function (event) {
  speed = speed*10;
};
document.getElementById("Speeddown").onclick = function (event) {
  speed = speed*0.1;
};
document.getElementById("Speedreset").onclick = function (event) {
  speed = 0.001;
};

// Set Texture
const loader = new THREE.TextureLoader();

// Planet
const sunTexture = loader.load("./images/sun.jpg");
const mercuryTexture = loader.load("./images/mercury.jpg");
const venusTexture = loader.load("./images/venus.jpg");
const earthTexture = loader.load("./images/earth.jpg");
const marsTexture = loader.load("./images/mars.jpg");
const jupiterTexture = loader.load("./images/jupiter.jpg");
const saturnTexture = loader.load("./images/saturn.jpg");
const uranusTexture = loader.load("./images/uranus.jpg");
const neptuneTexture = loader.load("./images/neptune.jpg");

// etc
const plutoTexture = loader.load("./images/pluto.jpeg");
const moonTexture = loader.load("./images/moon.jpg");
const cloudTexture = loader.load("./images/clouds.png");
const saturnRingTexture = loader.load("./images/saturn_ring.jpg");
const uranusRingTexture = loader.load("./images/uranus_ring.png");


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

const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
const cloudMaterial = new THREE.MeshStandardMaterial({ map: cloudTexture, transparent: true });
const saturnRingMaterial = new THREE.MeshStandardMaterial({ map: saturnRingTexture });
const uranusRingMaterial = new THREE.MeshStandardMaterial({ map: uranusRingTexture });

//
// Set Mesh
//
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)

const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

const sunMesh = new THREE.Mesh( geometry, sunMaterial );
sunMesh.position.set(0, 0, 0);
sunMesh.scale.setScalar(17); // 21.8
scene.add(sunMesh);

// Mercury
const mercuryGroup = new THREE.Group();
const mercuryMesh = new THREE.Mesh(geometry, mercuryMaterial);
createPlanet(scene, mercuryMesh, mercuryGroup, 40, 3);

var mercuryTorusGeometry = new THREE.TorusGeometry(40, 0.03,50,100);
const mercuryTorus = new THREE.Mesh( mercuryTorusGeometry, torusMaterial );
mercuryTorus.rotation.x = 0.5*Math.PI;
mercuryTorus.position.x=0;
mercuryTorus.add(mercuryMesh);
scene.add(mercuryTorus);


// Venus
const venusGroup = new THREE.Group();
const venusMesh = new THREE.Mesh(geometry, venusMaterial);
createPlanet(scene, venusMesh, venusGroup, 55, 5);

var venusTorusGeometry = new THREE.TorusGeometry(55, 0.03, 50, 100);
const venusTorus = new THREE.Mesh( venusTorusGeometry, torusMaterial );
venusTorus.rotation.x = 0.5*Math.PI;
venusTorus.position.x=0;
venusTorus.add(venusMesh);
scene.add(venusTorus);

// Earth & Monn
const earthGroup = new THREE.Group();
const earthMesh = new THREE.Mesh(geometry, earthMaterial);
createPlanet(scene, earthMesh, earthGroup, 75, 6);

const earthCloudMesh = new THREE.Mesh(geometry, cloudMaterial);
createPlanet(scene, earthCloudMesh, earthGroup, 75, 6.01 );
earthCloudMesh.rotation.y = 6;

var earthTorusGeometry = new THREE.TorusGeometry(75, 0.03,50,100);
const earthTorus = new THREE.Mesh( earthTorusGeometry, torusMaterial );
earthTorus.rotation.x = 0.5*Math.PI;
earthTorus.position.x=0;
earthTorus.add(earthMesh);
earthTorus.add(earthCloudMesh);
scene.add(earthTorus);


const moonGroup = new THREE.Group();
const moonMesh = new THREE.Mesh(geometry, moonMaterial);
createPlanet(scene, moonMesh, moonGroup, 85, 1.2);

var moonTorusGeometry = new THREE.TorusGeometry(10, 0.03,50,100);
const moonTorus = new THREE.Mesh( moonTorusGeometry, torusMaterial );
moonTorus.rotation.x = 0.03*Math.PI;
moonTorus.position.x=75;
//moonTorus.add(moonMesh);
scene.add(moonTorus);

// Mars
const marsGroup = new THREE.Group();
const marsMesh = new THREE.Mesh(geometry, marsMaterial);
createPlanet(scene, marsMesh, marsGroup, 95, 4);

var marsTorusGeometry = new THREE.TorusGeometry(95, 0.03,50,100);
const marsTorus = new THREE.Mesh( marsTorusGeometry, torusMaterial );
marsTorus.rotation.x = 0.5*Math.PI;
marsTorus.position.x=0;
marsTorus.add(marsMesh);
scene.add(marsTorus);

// Jupiter
const jupiterGroup = new THREE.Group();
const jupiterMesh = new THREE.Mesh(geometry, jupiterMaterial);
createPlanet(scene, jupiterMesh, jupiterGroup, 115, 10);

const jupiterCloudMesh = new THREE.Mesh(geometry, cloudMaterial);
createPlanet(scene, jupiterCloudMesh, jupiterGroup, 115, 10.01 );
jupiterCloudMesh.rotation.y = 6;

var jupiterTorusGeometry = new THREE.TorusGeometry(115, 0.03,50,100);
const jupiterTorus = new THREE.Mesh( jupiterTorusGeometry, torusMaterial );
jupiterTorus.rotation.x = 0.5*Math.PI;
jupiterTorus.position.x=0;
jupiterTorus.add(jupiterMesh);
jupiterTorus.add(jupiterCloudMesh);
scene.add(jupiterTorus);

// Saturn
const saturnGroup = new THREE.Group();
const saturnMesh = new THREE.Mesh(geometry, saturnMaterial);
createPlanet(scene, saturnMesh, saturnGroup, 150, 8);

// Ring
var saturnRingGeometry = new THREE.RingGeometry( 1.3, 1.8, 40 );
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing.rotation.z=Math.PI;
saturnMesh.add(saturnRing);

var saturnTorusGeometry = new THREE.TorusGeometry(150, 0.03,50,100);
const saturnTorus = new THREE.Mesh( saturnTorusGeometry, torusMaterial );
saturnTorus.rotation.x = 0.5*Math.PI;
saturnTorus.position.x=0;
saturnTorus.add(jupiterMesh);
scene.add(saturnTorus);


// Uranus
const uranusGroup = new THREE.Group();
const uranusMesh = new THREE.Mesh(geometry, uranusMaterial);
createPlanet(scene, uranusMesh, uranusGroup, 170, 7);

// Ring
var uranusRingGeometry = new THREE.RingGeometry( 1.3, 1.8, 40 );
const uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
uranusRing.rotation.z=Math.PI;
uranusMesh.add(uranusRing);

var uranusTorusGeometry = new THREE.TorusGeometry(170, 0.03,50,100);
const uranusTorus = new THREE.Mesh( uranusTorusGeometry, torusMaterial );
uranusTorus.rotation.x = 0.5*Math.PI;
uranusTorus.position.x=0;
uranusTorus.add(uranusMesh);
scene.add(uranusTorus);


// Neptune
const neptuneGroup = new THREE.Group();
const neptuneMesh = new THREE.Mesh(geometry, neptuneMaterial);
createPlanet(scene, neptuneMesh, neptuneGroup, 190, 6.5);

var neptuneTorusGeometry = new THREE.TorusGeometry(190, 0.03,50,100);
const neptuneTorus = new THREE.Mesh( neptuneTorusGeometry, torusMaterial );
neptuneTorus.rotation.x = 0.5*Math.PI;
neptuneTorus.position.x=0;
neptuneTorus.add(neptuneMesh);
scene.add(neptuneTorus);

// Pluto
const plutoGroup = new THREE.Group();
const plutoMesh = new THREE.Mesh(geometry, plutoMaterial);
createPlanet(scene, plutoMesh, plutoGroup, 210, 2);

var plutoTorusGeometry = new THREE.TorusGeometry(210, 0.03,50,100);
const plutoTorus = new THREE.Mesh( plutoTorusGeometry, torusMaterial );
plutoTorus.rotation.x = 0.5*Math.PI;
plutoTorus.position.x=0;
plutoTorus.add(plutoMesh);
scene.add(plutoTorus);

// Background
var stars = createStars(90, 64);
scene.add(stars);

// Set a source of light
const light = new THREE.PointLight("white", 1.25); //(color, intensity, distance)
light.position.set(0, 0, 0);
scene.add(light);

// Set a sub light
createSubLigt(240, 240, 0);
createSubLigt(240, -240, 0);
createSubLigt(-240, 240, 0);
createSubLigt(-240, -240, 0);
createSubLigt(240, 0, 240);
createSubLigt(-240, 0 ,240);
createSubLigt(-240, 0, -240);
createSubLigt(240, 0, -240);


// Illuminate the sun
createSpotlights(scene);

const animate = function () {
  requestAnimationFrame( animate );

  controls.update();

  sunMesh.rotation.y += earth_rt_speed * 4;
  mercuryMesh.rotation.y += earth_rt_speed * 0.001;
  venusMesh.rotation.y += earth_rt_speed * 0.0004;
  earthMesh.rotation.y += earth_rt_speed;
  earthCloudMesh.rotation.z += earth_rt_speed * 2;
  moonMesh.rotation.y += earth_rt_speed * 40;
  marsMesh.rotation.y += earth_rt_speed * 0.5;
  jupiterMesh.rotation.y += earth_rt_speed * 30;
  jupiterCloudMesh.rotation.z += earth_rt_speed * 30;
  saturnMesh.rotation.y += earth_rt_speed * 20;
  uranusMesh.rotation.y += earth_rt_speed * 5;
  neptuneMesh.rotation.y += earth_rt_speed * 0.003;
  plutoMesh.rotation.y += earth_rt_speed * 0.001;

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

  addSpotlight(color, intensity, distance, angle, -25, 25, 0); // 1
  addSpotlight(color, intensity, distance, angle, 25, 25, 0); // 2
  addSpotlight(color, intensity, distance, angle, 25, -25, 0); // 3
  addSpotlight(color, intensity, distance, angle, -25, -25, 0); // 4
  addSpotlight(color, intensity, distance, angle, 0, 0, 40); // 5
  addSpotlight(color, intensity, distance, angle, 0, 0, -40); // 6
  addSpotlight(color, intensity, distance, angle, 25, 0, 25); // 7
  addSpotlight(color, intensity, distance, angle, 25, 0, -25); // 8
  addSpotlight(color, intensity, distance, angle, -25, 0, -25); // 9
  addSpotlight(color, intensity, distance, angle, -25, 0, 25); // 10
  addSpotlight(color, intensity, distance, angle, 0, 25, 25); // 11
  addSpotlight(color, intensity, distance, angle, 0, 25, -25); // 12
  addSpotlight(color, intensity, distance, angle, 0, -25, 25); // 13
  addSpotlight(color, intensity, distance, angle, 0, -25, -25); // 14

}

function addSpotlight(c, i ,d, a, x, y, z){
  var spotlight = new THREE.SpotLight(c, i, d, a);
  spotlight.position.set(x, y, z);
  scene.add( spotlight );
}

function createSubLigt(x, y, z){
  const subLight = new THREE.PointLight("white", 0.05, 0); //(color, intensity, distance)
  subLight.position.set(x, y, z);
  scene.add(subLight);
}

function createStars(radius, segments) {
  return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, segments),
      new THREE.MeshBasicMaterial({
        map:  THREE.ImageUtils.loadTexture('images/galaxy.png'),
        side: THREE.BackSide
      })
  );
}