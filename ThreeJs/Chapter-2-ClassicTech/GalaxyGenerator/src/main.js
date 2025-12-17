import './style.css'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'lil-gui'

// canvas
const canvas = document.querySelector('.webGl')

const gui = new GUI()

// dimensions of screen
const dimensions = {
  width : window.innerWidth,
  height : window.innerHeight
}

// scene
const Scene = new Three.Scene()

const parameters = {
  count : 1000,
  size : 0.02,
  radius : 3,
  branches : 3,
  spinAngle : 3,
  randomness : 0.2,
  randomnessPower : 3,
  insideColor : 0xff6030,
  outsideColor : 0x1b3984
}

let galaxyGeometry = null
let galaxyMaterial = null
let galaxyPoints = null

const galaxyGenerator = ()=>{

  if(galaxyPoints !== null){
    galaxyGeometry.dispose()
    galaxyMaterial.dispose()
    Scene.remove(galaxyPoints)
  }

  galaxyGeometry = new Three.BufferGeometry()

  const positions = new Float32Array(parameters.count * 3)
  const colors = new Float32Array(parameters.count * 3)

  const colorInside = new Three.Color(parameters.insideColor)
  const colorOutside = new Three.Color(parameters.outsideColor)

  for(let i = 0; i< parameters.count; i++){
    const i3 = i * 3
    const radius = Math.random() * parameters.radius
    const spinAngle = radius * parameters.spinAngle
    const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

    const mixedColor = colorInside.clone()
    mixedColor.lerp(colorOutside, radius / parameters.radius)

    colors[i3] = mixedColor.r
    colors[i3 + 1] = mixedColor.g
    colors[i3 + 2] = mixedColor.b

    const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius
    const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius
    const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius

    if(i < 20){
      console.log(branchAngle)
    }

    positions[i3] = Math.sin(branchAngle + spinAngle) * radius + randomX
    positions[i3 + 1] = randomY
    positions[i3 + 2] = Math.cos(branchAngle + spinAngle) * radius + randomZ
  }
  galaxyGeometry.setAttribute('position', new Three.BufferAttribute(positions, 3))
  galaxyGeometry.setAttribute('color', new Three.BufferAttribute(colors, 3))


  galaxyMaterial = new Three.PointsMaterial({
    size : parameters.size,
    sizeAttenuation : true,
    depthWrite : false,
    blending : Three.AdditiveBlending,
    vertexColors : true
  })

  galaxyPoints = new Three.Points(galaxyGeometry, galaxyMaterial)
  Scene.add(galaxyPoints)

}

galaxyGenerator()

gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(galaxyGenerator)
gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(galaxyGenerator)
gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(galaxyGenerator)
gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(galaxyGenerator)
gui.add(parameters, 'spinAngle').min(-5).max(5).step(0.001).onFinishChange(galaxyGenerator)
gui.add(parameters, 'randomness').min(0).max(1).step(0.001).onFinishChange(galaxyGenerator)
gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(galaxyGenerator)
gui.addColor(parameters, 'insideColor').onFinishChange(galaxyGenerator)
gui.addColor(parameters, 'outsideColor').onFinishChange(galaxyGenerator)

// camera
const camera = new Three.PerspectiveCamera(45, dimensions.width / dimensions.height)
camera.position.z = 4
Scene.add(camera)

const controls = new OrbitControls(camera, canvas)

// renderer
const renderer = new Three.WebGLRenderer({
  canvas : canvas
})
renderer.setSize(dimensions.width, dimensions.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(Scene, camera)

window.addEventListener('resize', ()=>{
  dimensions.width = window.innerWidth
  dimensions.height = window.innerHeight
  camera.aspect = dimensions.width / dimensions.height
  camera.updateProjectionMatrix()
  renderer.setSize(dimensions.width, dimensions.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const animation = ()=>{
  controls.update()

  renderer.render(Scene, camera)

  window.requestAnimationFrame(animation)
}

animation()
