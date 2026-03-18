import * as three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cannon from 'cannon';
import {GUI} from 'lil-gui'

const gui = new GUI();

const dimensions = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new three.Scene();

/**
 * Textures
 */
const textureLoader = new three.TextureLoader()
const cubeTextureLoader = new three.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.png',
  '/textures/environmentMaps/0/nx.png',
  '/textures/environmentMaps/0/py.png',
  '/textures/environmentMaps/0/ny.png',
  '/textures/environmentMaps/0/pz.png',
  '/textures/environmentMaps/0/nz.png'
])
const physicsWorld = new cannon.World()
physicsWorld.gravity.set(0, -9.82, 0)


const plasticMaterial = new cannon.Material('plastic')
const concreteMaterial = new cannon.Material('concrete')

const plasticConcreteContactMaterial = new cannon.ContactMaterial(
  plasticMaterial,
  concreteMaterial,
  {
    friction: 0.1,
    restitution: 0.7
  }
)

physicsWorld.addContactMaterial(plasticConcreteContactMaterial)

const shpereShape = new cannon.Sphere(0.5)
const sphereBody = new cannon.Body({
  mass: 1,
  position: new cannon.Vec3(0, 3, 0),
  shape: shpereShape
})
sphereBody.material = plasticMaterial
physicsWorld.addBody(sphereBody)

const floorShape = new cannon.Plane()
const floorBody = new cannon.Body({
  mass: 0,
  position: new cannon.Vec3(0, 0, 0),
  shape: floorShape
})
floorBody.material = concreteMaterial
physicsWorld.addBody(floorBody)
floorBody.quaternion.setFromAxisAngle(new cannon.Vec3(-1, 0, 0), Math.PI * 0.5)

/**
 * Test sphere
 */
const sphere = new three.Mesh(
  new three.SphereGeometry(0.5, 32, 32),
  new three.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
  })
)
sphere.castShadow = true
sphere.position.y = 0.5
scene.add(sphere)

/**
 * Floor
 */
const floor = new three.Mesh(
  new three.PlaneGeometry(10, 10),
  new three.MeshStandardMaterial({
    color: '#777777',
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
  })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new three.AmbientLight(0xffffff, 2.1)
scene.add(ambientLight)

const directionalLight = new three.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const camera = new three.PerspectiveCamera(45, dimensions.width / dimensions.height, 0.1, 1000);
camera.position.set(0, 5, 10);

const renderer = new three.WebGLRenderer({
  canvas: document.querySelector('.webGl')
});
renderer.shadowMap.enabled = true
renderer.shadowMap.type = three.PCFSoftShadowMap
renderer.setSize(dimensions.width, dimensions.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


const clock = new three.Clock()
let oldTime = 0

const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldTime
  oldTime = elapsedTime

  // Update physics world
  physicsWorld.step(1/60, deltaTime, 3)

  // Update sphere
  sphere.position.copy(sphereBody.position)

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()

