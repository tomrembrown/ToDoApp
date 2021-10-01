<template>
  <nav class="site-header__buttons">
    <ul class="site-header__buttons-menu">
      <li class="site-header__buttons-menu-link" key="login" v-if="!isSignedIn">
        <button class="button" @click="showLogin">Login</button>
      </li>
      <li
        class="site-header__buttons-menu-link"
        key="signup"
        v-if="!isSignedIn"
      >
        <button class="button" @click="showSignup">Sign Up</button>
      </li>
      <li
        class="site-header__buttons-menu-link"
        key="signout"
        v-if="isSignedIn"
      >
        <button class="button" @click="signout">Sign Out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderButtons',
  data() {
    return {
      isSignedIn: false,
    }
  },
  methods: {
    showLogin() {
      this.isSignedIn = true
    },
    showSignup() {
      this.isSignedIn = true
    },
    signout() {
      this.isSignedIn = false
    },
  },
}
</script>

<style>
.site-header__buttons-menu {
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  font-size: 0.875rem;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.site-header__buttons-menu-link {
  display: inline;
}

.button {
  text-decoration: none;
  display: block;
  border: 1px solid #c5d8dd;
  padding: 0.5em 1em;
  font-size: 0.8em;
  width: 8em;
  margin: 0.3em;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0px;
  cursor: pointer;
  background-color: #fafafa;
  color: #6559e8;
  transition: background-color 0.2s, color 0.2s, top 0.1s, box-shadow 0.1s;
}

.button.disabled,
.button:disabled {
  border-color: #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  pointer-events: none;
}

.button:focus,
.button:hover {
  background-color: #a846e0;
  color: #b19bb6;
}

.button:active,
.button.active {
  top: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
