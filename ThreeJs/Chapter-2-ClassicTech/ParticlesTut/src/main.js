import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'lil-gui'
import './style.css'

// Texture Loader
const textureLoader = new Three.TextureLoader()

// textures
const particleTexture = textureLoader.load('../static/textures/particles/2.png')

// GUI Contols
const gui = new GUI()

const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight
}

const canvas = document.querySelector('.webGl')

//Scene
const scene = new Three.Scene()

// BaseMesh
// const boxMesh = new Three.Mesh(
//     new Three.BoxGeometry(1, 1, 1),
//     new Three.MeshStandardMaterial()
// )
// scene.add(boxMesh)

// Particles
const bufferGeometry = new Three.BufferGeometry()
const particleMaterial = new Three.PointsMaterial({color: 'white'})
particleMaterial.size = 0.1
particleMaterial.sizeAttenuation = true
particleMaterial.alphaMap = particleTexture
particleMaterial.transparent = true
// particleMaterial.alphaTest = 0.001
// particleMaterial.depthTest = true
particleMaterial.depthWrite = false
particleMaterial.blending = Three.AdditiveBlending
particleMaterial.vertexColors = true

const particlesCount = 20000
const positionArray = new Float32Array(particlesCount * 3)
const colorArray = new Float32Array(particlesCount * 3)

for(let i=0; i<particlesCount * 3; i++){
    positionArray[i] = (Math.random() - 0.5) * 10
    colorArray[i] = Math.random()
}

bufferGeometry.setAttribute('position', new Three.BufferAttribute(positionArray, 3))
bufferGeometry.setAttribute('color', new Three.BufferAttribute(colorArray, 3))
const particle = new Three.Points(bufferGeometry, particleMaterial)
scene.add(particle)

// Lights
// const ambientLight = new Three.AmbientLight("White", 1)
// scene.add(ambientLight)

//Camera
const camera = new Three.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 100)
camera.position.set(0, 0, 10)
scene.add(camera)

//Renderer
const renderer = new Three.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(dimensions.width, dimensions.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

window.addEventListener('resize', ()=>{
  //Update Dimensions
  dimensions.width = window.innerWidth
  dimensions.height = window.innerHeight

  //Update Camera
  camera.aspect = dimensions.width / dimensions.height
  camera.updateProjectionMatrix()

  //Update Renderer
  renderer.setSize(dimensions.width, dimensions.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new Three.Clock()

// Animation Function
const animation = ()=>{

  const elapsedTime = clock.getElapsedTime()

  for(let i=0; i < particlesCount; i++){
    const i3 = i * 3
    const x = bufferGeometry.attributes.position.array[i3 + 0]
    bufferGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x)
  }

  bufferGeometry.attributes.position.needsUpdate = true

  controls.update()

  renderer.render(scene, camera)

  window.requestAnimationFrame(animation)

}

animation()