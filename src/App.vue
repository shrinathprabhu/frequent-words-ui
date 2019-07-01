<template>
  <v-app :dark="dark">
    <v-toolbar app>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Frequent Words</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-switch
          v-model="dark"
          :label="dark ? `Dark Theme` : `Light Theme`"
          color="success"
        >
        </v-switch>
      </v-container>
      <SubmitValues/>
      <FrequencyTable/>
      <v-snackbar
        v-model="snackbar"
        :color="color"
        multi-line=true
        :timeout="snackbarTimeout"
      >
        {{ message }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import SubmitValues from './components/Submit';
import FrequencyTable from './components/FrequencyTable';

export default {
  name: 'App',
  components: {
    SubmitValues,
    FrequencyTable
  },
  data () {
    return {
      dark: false,
      snackbarTimeout: 3000
    }
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.state.showSnackbar;
      },
      set(value) {
        this.$store.state.showSnackbar = value;
      }
    },
    color: {
      get() {
        return this.$store.state.snackBarColor;
      }
    },
    message: {
      get() {
        return this.$store.state.snackBarMessage;
      }
    },
    ...mapGetters(["snackBarState", "snackBarColorState", "snackBarMessageState"])
  }
}
</script>
