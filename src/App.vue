<template>
  <transition name="fade">
    <div v-show="pageLoaded">
      <v-app>
        <v-navigation-drawer persistent clipped light enable-resize-watcher mini-variant id="navDrawer" v-model="navDrawer.open">
          <v-list>
            <!-- <v-list-tile> -->
            <router-link tag="v-list-tile" v-for="item in navDrawer.items" :key="item.name" replace :to="{ path: item.path }">
              <v-list-tile-action v-tooltip:right="{ html: item.name}">
                <v-icon>{{ item.meta.icon }}</v-icon>
              </v-list-tile-action>
            </router-link>
            <!--  </v-list-tile> -->
          </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed dark class="teal">
          <!-- <v-icon>menu</v-icon> -->
          <v-toolbar-title>Web Application</v-toolbar-title>
        </v-toolbar>
        <main>
          <v-container>
            <router-view></router-view>
          </v-container>
          <v-bottom-nav class="transparent hidden-md-and-up" value=true id="navDrawerBottom">
            <v-btn flat light class="gray" v-for="item in navDrawer.items" :key="item.name">
              <router-link replace tag="div" :to="{ path: item.path }">
                <v-icon>{{ item.meta.icon }}</v-icon>
                <br/>
                <span>{{ item.name }}</span>
              </router-link>
            </v-btn>
          </v-bottom-nav>
        </main>
        <!-- 
    <v-bottom-nav absolute class=" transparent " id="navDrawerBottom ">
      <div v-for="item in navDrawer.items " :key="item.name ">
      <router-link replace tag="div " :to="{ path: item.path } ">
        <v-btn flat light class="gray ">
          <span>{{ item.name }}</span>
          <v-icon>{{ item.meta.icon }}</v-icon>
        </v-btn>
      </router-link>
        </div>
    </v-bottom-nav>
-->
      </v-app>
    </div>
  </transition>

</template>


<script>
  export default {
    name: 'app',
    data: function () {
      var routerRoutes = this.$router.options.routes.filter(function (route) {
        return route.meta.topLevel
      })
      return {
        pageLoaded: false,
        navDrawer: {
          open: true,
          items: routerRoutes
        }
      }
    },
    mounted: function () {
      this.$data.pageLoaded = true
    }
  }
  /**

  **/
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    -webkit-animation-delay: 2s; /* Safari 4.0 - 8.0 */
    animation-delay: 2s;
    transition: opacity 1s
  }
  
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */
  
  {
    opacity: 0
  }
  
  [v-cloak] {
    display: 0;
  }
  
  #navDrawer {
    overflow: visible
  }
  /**
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
  **/
</style>