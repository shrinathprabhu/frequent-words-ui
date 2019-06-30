<template>
    <v-container>
        <v-layout row wrap>
            <v-flex sm2 md3></v-flex>
            <v-flex xs8 sm6 md4>
                <v-text-field
                    v-model="textFieldValue"
                    type="number"
                    label="Number of results"
                    hint="Enter Number"
                    outline
                    v-on:input="textFieldValue && textFieldValue > -1 ? submitButtonState=false : submitButtonState=true"
                ></v-text-field>
            </v-flex>
            <v-flex xs4 sm2 md2>
                <v-btn 
                    depressed 
                    large color="success" 
                    :disabled="submitButtonState"
                    v-on:click="fetch(textFieldValue, insensitivity)"
                    >Search</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex sm2 md3></v-flex>
            <v-flex xs12 sm4 md4>
                <v-switch
                    v-model="insensitivity"
                    :label="insensitivity ? `Case Insensitive` : `Case Sensitive`"
                    color="red"
                    :value="insensitivity"
                    v-on:change="textFieldValue && textFieldValue > -1 ? fetch(textFieldValue, insensitivity) : textFieldValue"
                ></v-switch>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {FETCH_DATA} from '../store';
  export default {
    data () {
      return {
        insensitivity: true,
        submitButtonState: true,
        textFieldValue: undefined
      }
    },
    methods: {
        fetch(topN, isCaseInsensitive) {
            this.$store.dispatch(FETCH_DATA, {topN, isCaseInsensitive});
        }

    }
  }
</script>