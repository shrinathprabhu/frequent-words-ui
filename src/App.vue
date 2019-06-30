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
    </v-content>
  </v-app>
</template>

<script>
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
      dark: false
    }
  }
}
</script>
