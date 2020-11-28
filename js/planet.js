var earth_rt_speed = 0;

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


var sunPosition = 0;
var mercuryPosition = 40;
var venusPosition = 55;
var earthPosition = 75;
var marsPosition = 95;
var jupiterPosition = 115;
var saturnPosition = 150;
var uranusPosition = 180;
var neptunePosition = 200;
var plutoPosition = 220


//
// Set Mesh
//
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)

const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

const sunMesh = new THREE.Mesh( geometry, sunMaterial );
sunMesh.position.set(0, 0, 0);
sunMesh.scale.setScalar(20); // 21.8
scene.add(sunMesh);

// Mercury
const mercuryGroup = new THREE.Group();
const mercuryMesh = new THREE.Mesh(geometry, mercuryMaterial);
mercuryMesh.rotation.x = -0.4998*Math.PI;
createPlanet(scene, mercuryMesh, mercuryGroup, 40, 3);

var mercuryTorusGeometry = new THREE.TorusGeometry(40, 0.03,50,100);
const mercuryTorus = new THREE.Mesh( mercuryTorusGeometry, torusMaterial );
mercuryTorus.rotation.x = 0.5*Math.PI;
mercuryTorus.position.x = 0;
mercuryTorus.add(mercuryMesh);
scene.add(mercuryTorus);

// Venus
const venusGroup = new THREE.Group();
const venusMesh = new THREE.Mesh(geometry, venusMaterial);
venusMesh.rotation.x = 0.49*Math.PI;
createPlanet(scene, venusMesh, venusGroup, 55, 5);

var venusTorusGeometry = new THREE.TorusGeometry(55, 0.03, 50, 100);
const venusTorus = new THREE.Mesh( venusTorusGeometry, torusMaterial );
venusTorus.rotation.x = 0.5*Math.PI;
venusTorus.position.x = 0;
venusTorus.add(venusMesh);
scene.add(venusTorus);

// Earth & Monn
const earthGroup = new THREE.Group();
const earthMesh = new THREE.Mesh(geometry, earthMaterial);
earthMesh.rotation.x = -0.37*Math.PI; // 0.37
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
moonMesh.rotation.x = -0.446*Math.PI;
createPlanet(scene, moonMesh, moonGroup, 10, 1.2);

var moonTorusGeometry = new THREE.TorusGeometry(10, 0.03,50,100);
const moonTorus = new THREE.Mesh( moonTorusGeometry, torusMaterial );
moonTorus.rotation.x = -0.04*Math.PI;
moonTorus.position.x=75;
moonTorus.add(moonMesh);
earthTorus.add(moonTorus);

// Mars
const marsGroup = new THREE.Group();
const marsMesh = new THREE.Mesh(geometry, marsMaterial);
marsMesh.rotation.x = -0.36*Math.PI;
createPlanet(scene, marsMesh, marsGroup, 95, 4);

var marsTorusGeometry = new THREE.TorusGeometry(95, 0.03,50,100);
const marsTorus = new THREE.Mesh( marsTorusGeometry, torusMaterial );
marsTorus.rotation.x = 0.5*Math.PI;
marsTorus.position.x = 0;
marsTorus.add(marsMesh);
scene.add(marsTorus);

// Jupiter
const jupiterGroup = new THREE.Group();
const jupiterMesh = new THREE.Mesh(geometry, jupiterMaterial);
jupiterMesh.rotation.x = -0.483*Math.PI;
createPlanet(scene, jupiterMesh, jupiterGroup, 115, 10);


const jupiterCloudMesh = new THREE.Mesh(geometry, cloudMaterial);
createPlanet(scene, jupiterCloudMesh, jupiterGroup, 0, 1.01 );
jupiterCloudMesh.rotation.y = 6;
jupiterMesh.add(jupiterCloudMesh);

var jupiterTorusGeometry = new THREE.TorusGeometry(115, 0.03,50,100);
const jupiterTorus = new THREE.Mesh( jupiterTorusGeometry, torusMaterial );
jupiterTorus.rotation.x = 0.5*Math.PI;
jupiterTorus.position.x = 0;
jupiterTorus.add(jupiterMesh);
scene.add(jupiterTorus);

// Saturn
const saturnGroup = new THREE.Group();
const saturnMesh = new THREE.Mesh(geometry, saturnMaterial);
saturnMesh.rotation.x = -0.352*Math.PI;
createPlanet(scene, saturnMesh, saturnGroup, 150, 8);

// Ring
var saturnRingGeometry = new THREE.RingGeometry( 1.3, 1.8, 40 );
const saturnRing1 = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
const saturnRing2 = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing1.rotation.x = 0.5 * Math.PI;
saturnRing2.rotation.x = -0.5 * Math.PI;
saturnMesh.add(saturnRing1);
saturnMesh.add(saturnRing2);

var saturnTorusGeometry = new THREE.TorusGeometry(150, 0.03,50,100);
const saturnTorus = new THREE.Mesh( saturnTorusGeometry, torusMaterial );
saturnTorus.rotation.x = 0.5*Math.PI;
saturnTorus.position.x = 0;
saturnTorus.add(saturnMesh);
scene.add(saturnTorus);


// Uranus
const uranusGroup = new THREE.Group();
const uranusMesh = new THREE.Mesh(geometry, uranusMaterial);
uranusMesh.rotation.x = 0.04*Math.PI;
createPlanet(scene, uranusMesh, uranusGroup, 180, 7);

// Ring
var uranusRingGeometry = new THREE.RingGeometry( 1.3, 1.8, 40 );
const uranusRing1 = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
const uranusRing2 = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
uranusRing1.rotation.x = 0.5*Math.PI;
uranusRing2.rotation.x = -0.5*Math.PI;
uranusMesh.add(uranusRing1);
uranusMesh.add(uranusRing2);

var uranusTorusGeometry = new THREE.TorusGeometry(180, 0.03,50,100);
const uranusTorus = new THREE.Mesh( uranusTorusGeometry, torusMaterial );
uranusTorus.rotation.x = 0.5*Math.PI;
uranusTorus.position.x = 0;
uranusTorus.add(uranusMesh);
scene.add(uranusTorus);


// Neptune
const neptuneGroup = new THREE.Group();
const neptuneMesh = new THREE.Mesh(geometry, neptuneMaterial);
neptuneMesh.rotation.x = -0.34*Math.PI;
createPlanet(scene, neptuneMesh, neptuneGroup, 200, 6.5);

var neptuneTorusGeometry = new THREE.TorusGeometry(200, 0.03,50,100);
const neptuneTorus = new THREE.Mesh( neptuneTorusGeometry, torusMaterial );
neptuneTorus.rotation.x = 0.5*Math.PI;
neptuneTorus.position.x = 0;
neptuneTorus.add(neptuneMesh);
scene.add(neptuneTorus);

// Pluto
const plutoGroup = new THREE.Group();
const plutoMesh = new THREE.Mesh(geometry, plutoMaterial);
plutoMesh.rotation.x = 0.16*Math.PI;
createPlanet(scene, plutoMesh, plutoGroup, 220, 2);

var plutoTorusGeometry = new THREE.TorusGeometry(220, 0.03,50,100);
const plutoTorus = new THREE.Mesh( plutoTorusGeometry, torusMaterial );
plutoTorus.rotation.x = 0.5*Math.PI;
plutoTorus.position.x = 0;
plutoTorus.add(plutoMesh);
scene.add(plutoTorus);

// Background
var stars = createStars(300, 64);
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

// Close up taget
var closeUpPlanet = 0

document.getElementById("SunBtn").onclick = function (event) {
        camera.position.set(0, 30, 50);
        closeUpPlanet = 'sun'
        init_position();

    };
document.getElementById("MercuryBtn").onclick = function (event) {

        if (closeUpPlanet != 'mercury')
        {
          closeUpPlanet = 'mercury';
          init_position();

          sunMesh.position.x -= 1.5*mercuryPosition;
          mercuryTorus.position.x -= mercuryPosition;
          venusTorus.position.x -= mercuryPosition;
          earthTorus.position.x -= mercuryPosition;
          marsTorus.position.x -= mercuryPosition;
          jupiterTorus.position.x -= mercuryPosition;
          saturnTorus.position.x -= mercuryPosition;
          uranusTorus.position.x -= mercuryPosition;
          neptuneTorus.position.x -= mercuryPosition;
          plutoTorus.position.x -= mercuryPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("VenusBtn").onclick = function (event) {

        if (closeUpPlanet != 'venus')
        {
          closeUpPlanet = 'venus';
          init_position();

          sunMesh.position.x -= venusPosition;
          mercuryTorus.position.x -= venusPosition;
          venusTorus.position.x -= venusPosition;
          earthTorus.position.x -= venusPosition;
          marsTorus.position.x -= venusPosition;
          jupiterTorus.position.x -= venusPosition;
          saturnTorus.position.x -= venusPosition;
          uranusTorus.position.x -= venusPosition;
          neptuneTorus.position.x -= venusPosition;
          plutoTorus.position.x -= venusPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("EarthBtn").onclick = function (event) {

        if (closeUpPlanet != 'earth')
        {
          closeUpPlanet = 'earth';
          init_position();

          sunMesh.position.x -= earthPosition;
          mercuryTorus.position.x -= earthPosition;
          venusTorus.position.x -= earthPosition;
          earthTorus.position.x -= earthPosition;
          marsTorus.position.x -= earthPosition;
          jupiterTorus.position.x -= earthPosition;
          saturnTorus.position.x -= earthPosition;
          uranusTorus.position.x -= earthPosition;
          neptuneTorus.position.x -= earthPosition;
          plutoTorus.position.x -= earthPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("MarsBtn").onclick = function (event) {

        if (closeUpPlanet != 'mars')
        {
          closeUpPlanet = 'mars';
          init_position();

          sunMesh.position.x -= marsPosition;
          mercuryTorus.position.x -= marsPosition;
          venusTorus.position.x -= marsPosition;
          earthTorus.position.x -= marsPosition;
          marsTorus.position.x -= marsPosition;
          jupiterTorus.position.x -= marsPosition;
          saturnTorus.position.x -= marsPosition;
          uranusTorus.position.x -= marsPosition;
          neptuneTorus.position.x -= marsPosition;
          plutoTorus.position.x -= marsPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("JupiterBtn").onclick = function (event) {

        if (closeUpPlanet != 'jupiter')
        {
          closeUpPlanet = 'jupiter';
          init_position();

          sunMesh.position.x -= jupiterPosition;
          mercuryTorus.position.x -= jupiterPosition;
          venusTorus.position.x -= jupiterPosition;
          earthTorus.position.x -= jupiterPosition;
          marsTorus.position.x -= jupiterPosition;
          jupiterTorus.position.x -= jupiterPosition;
          saturnTorus.position.x -= jupiterPosition;
          uranusTorus.position.x -= jupiterPosition;
          neptuneTorus.position.x -= jupiterPosition;
          plutoTorus.position.x -= jupiterPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("SaturnBtn").onclick = function (event) {

        if (closeUpPlanet != 'saturn')
        {
          closeUpPlanet = 'saturn';
          init_position();

          sunMesh.position.x -= saturnPosition;
          mercuryTorus.position.x -= saturnPosition;
          venusTorus.position.x -= saturnPosition;
          earthTorus.position.x -= saturnPosition;
          marsTorus.position.x -= saturnPosition;
          jupiterTorus.position.x -= saturnPosition;
          saturnTorus.position.x -= saturnPosition;
          uranusTorus.position.x -= saturnPosition;
          neptuneTorus.position.x -= saturnPosition;
          plutoTorus.position.x -= saturnPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("UranusBtn").onclick = function (event) {

        if (closeUpPlanet != 'uranus')
        {
          closeUpPlanet = 'uranus';
          init_position();

          sunMesh.position.x -= uranusPosition;
          mercuryTorus.position.x -= uranusPosition;
          venusTorus.position.x -= uranusPosition;
          earthTorus.position.x -= uranusPosition;
          marsTorus.position.x -= uranusPosition;
          jupiterTorus.position.x -= uranusPosition;
          saturnTorus.position.x -= uranusPosition;
          uranusTorus.position.x -= uranusPosition;
          neptuneTorus.position.x -= uranusPosition;
          plutoTorus.position.x -= uranusPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("NeptuneBtn").onclick = function (event) {

        if (closeUpPlanet != 'neptune')
        {
          closeUpPlanet = 'neptune';
          init_position();

          sunMesh.position.x -= neptunePosition;
          mercuryTorus.position.x -= neptunePosition;
          venusTorus.position.x -= neptunePosition;
          earthTorus.position.x -= neptunePosition;
          marsTorus.position.x -= neptunePosition;
          jupiterTorus.position.x -= neptunePosition;
          saturnTorus.position.x -= neptunePosition;
          uranusTorus.position.x -= neptunePosition;
          neptuneTorus.position.x -= neptunePosition;
          plutoTorus.position.x -= neptunePosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };
document.getElementById("PlutoBtn").onclick = function (event) {

        if (closeUpPlanet != 'pluto')
        {
          closeUpPlanet = 'pluto';
          init_position();

          sunMesh.position.x -= plutoPosition;
          mercuryTorus.position.x -= plutoPosition;
          venusTorus.position.x -= plutoPosition;
          earthTorus.position.x -= plutoPosition;
          marsTorus.position.x -= plutoPosition;
          jupiterTorus.position.x -= plutoPosition;
          saturnTorus.position.x -= plutoPosition;
          uranusTorus.position.x -= plutoPosition;
          neptuneTorus.position.x -= plutoPosition;
          plutoTorus.position.x -= plutoPosition;
        }
        camera.position.set(0, 30, 50);
        controls.update();
    };


// Speed control buttons
document.getElementById("SpeedResetBtn").onclick = function (event) {
        earth_rt_speed = 0.0005;
    };
document.getElementById("SpeedUpBtn").onclick = function (event) {
        earth_rt_speed += 0.005;
    };
document.getElementById("SpeedDownBtn").onclick = function (event) {
        if(earth_rt_speed > 0)
          earth_rt_speed -= 0.005;
    };
document.getElementById("PlanetPositionResetBtn").onclick = function (event) {
        earth_rt_speed = 0;
        mercuryTorus.rotation.z = 0;
        venusTorus.rotation.z = 0;
        earthTorus.rotation.z = 0;
        moonTorus.rotation.z = 0;
        marsTorus.rotation.z = 0;
        jupiterTorus.rotation.z = 0;
        saturnTorus.rotation.z = 0;
        uranusTorus.rotation.z = 0;
        neptuneTorus.rotation.z = 0;
        plutoTorus.rotation.z = 0;
    };


const animate = function () {
  requestAnimationFrame( animate );

  // Use trackball
  controls.update();

  // rotation
  sunMesh.rotation.y += earth_rt_speed * 4;
  mercuryMesh.rotation.y += earth_rt_speed * 0.1;
  venusMesh.rotation.y += earth_rt_speed * 0.4;
  earthMesh.rotation.y += earth_rt_speed;
  earthCloudMesh.rotation.z += earth_rt_speed * 2;
  moonMesh.rotation.y += earth_rt_speed * 40;
  marsMesh.rotation.y += earth_rt_speed * 0.5;
  jupiterMesh.rotation.y += earth_rt_speed * 30;
  jupiterCloudMesh.rotation.z += earth_rt_speed * 30;
  saturnMesh.rotation.y += earth_rt_speed * 20;
  uranusMesh.rotation.y += earth_rt_speed * 5;
  neptuneMesh.rotation.y += earth_rt_speed * 0.3;
  plutoMesh.rotation.y += earth_rt_speed * 0.1;

  // revolution
  mercuryTorus.rotation.z -= 1.6*earth_rt_speed;
  venusTorus.rotation.z -= 1.2*earth_rt_speed;
  earthTorus.rotation.z -= earth_rt_speed;
  moonTorus.rotation.z -=0.1*earth_rt_speed;
  marsTorus.rotation.z -= 0.8*earth_rt_speed;
  jupiterTorus.rotation.z -= 0.4*earth_rt_speed;
  saturnTorus.rotation.z -= 0.3*earth_rt_speed;
  uranusTorus.rotation.z -= 0.2*earth_rt_speed;
  neptuneTorus.rotation.z -= 0.1*earth_rt_speed;
  plutoTorus.rotation.z -= 0.1*earth_rt_speed;

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

function init_position(){

        sunMesh.position.x = sunPosition;
        mercuryTorus.position.x = 0;
        venusTorus.position.x = 0;
        earthTorus.position.x = 0;
        marsTorus.position.x = 0;
        jupiterTorus.position.x = 0;
        saturnTorus.position.x = 0;
        uranusTorus.position.x = 0;
        neptuneTorus.position.x = 0;
        plutoTorus.position.x = 0;

}

