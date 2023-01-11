<template>
  <nav class="w-full  p-5 bg-transparent" style="font-family: 'Montserrat', sans-serif !important;">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div class="h-10">
        <NuxtLogo />
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-5 text-sm font-sans" style="font-family: 'Montserrat', sans-serif !important;">
          <li>
            <NuxtLink to="/" class="active border-b-2 border-blue-500 pb-1">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product">
              Tickets
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/login" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold">
              Log
              In
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sign" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold">
              Sign
              Up
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="isOpen = false">
          <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="isOpen = false" />
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <span class="flex w-full items-center p-4 border-b" @click="isOpen = false">
          <Tailwind />
        </span>

        <ul class="divide-y font-sans">
          <li>
            <NuxtLink to="/" class="my-4 inline-block" @click="isOpen = false">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="my-4 inline-block" @click="isOpen = false">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product" class="my-4 inline-block" @click="isOpen = false">
              Products
            </NuxtLink>
          </li>
          <li><a href="#" class="my-4 inline-block" @click="isOpen = false">Contact</a></li>
          <li>
            <NuxtLink
              to="/login"
              class="my-8 w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
              @click="isOpen = false"
            >Login</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/sign"
              class="w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
              @click="isOpen = false"
            >Sign Up</NuxtLink>
          </li>
        </ul>

        <div class="follow my-8">
          <p class="italic font-sans text-sm">
            follow us:
          </p>
          <div class="social flex space-x-5 mt-4 ">
            <a href="#">
              <img src="/svg.svg" alt="twitter"  class="w-8 h-5"/>
            </a>
            <a href="#">
              <img src="/facebook.svg" alt="facebook"  class="w-8 h-5"/>
            </a>
            <a href="#">
              <img src="/instagram.svg" alt="instagram" class="w-8 h-5"/>
            </a>
            <a href="#">
              <img src="/youtube.svg" alt="youtube"  class="w-8 h-5"/>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue'

export default {
  name: 'NavBar',
  components: { NuxtLogo },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.isOpen) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) {
        this.isOpen = false
      }
    })
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
