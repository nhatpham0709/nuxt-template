<template>
  <div>
    <LayoutsMobileNav v-if="visibleMobileNav" />
    <div
      class="flex justify-between items-center border-b-2 border-gray-100 py-6 px-6 md:px-10 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <NuxtLink :to="localePath('/')">
          <span class="sr-only">Nuxt</span>
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
          @click="visibleMobileNav = !visibleMobileNav"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <NuxtLink
          :to="localePath('/')"
          :class="{
            '!text-blue-500': $route.fullPath.startsWith(localePath('/')),
          }"
          class="nav-link"
        >
          Menu 1
        </NuxtLink>
        <NuxtLink
          :to="localePath('/')"
          :class="{
            '!text-blue-500': $route.fullPath.startsWith(localePath('/')),
          }"
          class="nav-link"
        >
          Menu 2
        </NuxtLink>
        <NuxtLink
          :to="localePath('/')"
          :class="{
            '!text-blue-500': $route.fullPath.startsWith(localePath('/')),
          }"
          class="nav-link"
        >
          Menu 3
        </NuxtLink>

        <div
          class="relative"
          @mouseover="visibleMoreMenu = true"
          @mouseleave="visibleMoreMenu = false"
        >
          <button
            class="nav-link"
            aria-expanded="false"
            @click="visibleMoreMenu = !visibleMoreMenu"
          >
            <span>More</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="flex-shrink-0 w-5 h-5 ml-1"
            >
              <path
                :class="{ 'rotate-180': visibleMoreMenu }"
                class="transition duration-300 ease-in-out origin-center transform"
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="-translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div
              v-show="visibleMoreMenu"
              class="pt-3 absolute z-10 left-1/2 transform -translate-x-1/2 px-2 w-screen max-w-md sm:px-0"
            >
              <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/support -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Help Center
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get all of your questions answered in our forums or
                        contact support.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/bookmark-alt -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Guides</p>
                      <p class="mt-1 text-sm text-gray-500">
                        Learn how to maximize our platform to get the most out
                        of it.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/calendar -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Events</p>
                      <p class="mt-1 text-sm text-gray-500">
                        See what meet-ups and other events we might be planning
                        near you.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Security
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Understand how we take your privacy seriously.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                  <div>
                    <h3
                      class="text-sm tracking-wide font-medium text-gray-500 uppercase"
                    >
                      Recent Posts
                    </h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          Boost your conversion rate
                        </a>
                      </li>

                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          How to use search engine optimization to drive traffic
                          to your site
                        </a>
                      </li>

                      <li class="text-base truncate">
                        <a
                          href="#"
                          class="font-medium text-gray-900 hover:text-gray-700"
                        >
                          Improve your customer experience
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-5 text-sm">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all posts <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <div
          v-if="$auth.loggedIn"
          class="relative inline-block"
          @mouseover="visibileProfile = true"
          @mouseleave="visibileProfile = false"
        >
          <button class="nav-link" @click="visibileProfile = !visibileProfile">
            <span class="flex-shrink-0">{{ $auth.user.name }}</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="flex-shrink-0 w-5 h-5 ml-1"
            >
              <path
                :class="{ 'rotate-180': visibileProfile }"
                class="transition duration-300 ease-in-out origin-center transform"
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="-translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div v-show="visibileProfile" class="absolute w-full pt-2">
              <div
                class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl"
              >
                <div
                  class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
                ></div>
                <div class="relative">
                  <NuxtLink
                    :to="localePath('/profile')"
                    class="block text-center w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                    >Profile</NuxtLink
                  >
                  <button
                    class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                    @click="logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div v-else>
          <NuxtLink
            :to="localePath('/login')"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Login
          </NuxtLink>
          <NuxtLink
            :to="localePath('/register')"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Register
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibileProfile: false,
      visibleMoreMenu: false,
      visibleMobileNav: false,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        this.$router.push(this.localePath('/login'))
      } catch (e) {}
    },
  },
}
</script>
