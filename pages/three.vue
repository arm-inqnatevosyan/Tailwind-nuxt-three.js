<template>
  <div>
    <NavBar />
    <div class="main">
      <div>
        <canvas class="webgl" />
      </div>
      <div id="two">
        <h1>H'i From Italy</h1>
        <p>U.S. citizens may travel to Italy for any reason</p>
        <p>including tourism. English-language guidance on current entry and exit requirements is</p>
        <p>maintained on the Italian Ministry of Foreign Affairs' website.</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'THREETest',
  components: { NavBar },
  mounted: function () {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#141414')

    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 5000)
    camera.position.set(0, -10, 250)

    scene.add(camera)

    const canvas = document.querySelector('.webgl')
    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(500, 500)

    const controls = new OrbitControls(camera, canvas)

    controls.rotateSpeed = 0.5
    controls.zoomSpeed = 0.5

    controls.minDistance = 7
    controls.maxDistance = 11.500

    controls.minPolarAngle = 0
    controls.maxPolarAngle = Math.PI / 2

    controls.enableRotate = true
    controls.dampingFactor = 0.5

    const light = new THREE.PointLight('CHARCOAL', 5, 50)
    light.position.set(4, 30, -20)
    scene.add(light)

    const light2 = new THREE.AmbientLight('black', 20, 100)
    light2.position.set(310, -10, 30)
    scene.add(light2)

    const loader = new GLTFLoader()

    loader.load('http://192.168.1.6:1003/scene.gltf', function (gltf) {
      const mesh = gltf.scene.children[0]
      mesh.position.y = -2
      mesh.position.z = -5
      mesh.position.x = 0.800
      const dirLight = new THREE.DirectionalLight(0xFFFFFF)
      dirLight.position.set(20, 30, 50)
      scene.add(dirLight)
      scene.add(mesh)
    })

    const clock = new THREE.Clock()
    const mixers = []
    function animate () {
      const delta = clock.getDelta()

      for (let i = 0; i < mixers.length; i++) {
        mixers[i].update(delta)
      }

      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    };

    animate()
  }
}
</script>
<style scoped>

.main{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: red;
  background:linear-gradient(to left,aqua,grey 60%);
  margin-top: 50px;
}
.main div{
  width: 500px;
  display: flex;
  justify-content: center;
}
#two{
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
}
#two p{
  font-size: 20px;
}
@media (max-width:768px){
  .main{
    display: flex;
    flex-direction: column;
  }
  canvas{
    width: 400px !important;
  }
  #two{
    padding: 10px;
    width: 400px;
    padding-bottom: 30px;
  }
}
@media (max-width:500px) {
  .main div{
    width: 370px;
  }
  #two{
    padding: 10px;
    width: 370px;
    padding-bottom: 30px;
  }
  canvas{
    width: 375px !important;
  }
}
</style>
