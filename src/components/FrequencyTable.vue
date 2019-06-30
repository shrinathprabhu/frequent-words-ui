<template>
    <v-container>
        <v-layout>
            <v-flex md3></v-flex>
            <v-flex xs12 sm12 md6>
                <v-data-table
                    :headers="tableHeaders"
                    :items="frequency"
                    :loading="tableLoadState"
                    hide-actions>
                    <template v-slot:items="props">
                        <td>{{ props.item.word }}</td>
                        <td class="text-xs-right">{{ props.item.weight }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            tableHeaders: [
                {
                    text: "Words",
                    sortable: false,
                    align: "left"
                }, {
                    text: "Frequency",
                    value: "frequency",
                    align: "center",
                    sortable: false
                }
            ]
        }
    },
    computed: {
        tableLoadState: {
            get() {
                return this.$store.state.tableLoadState
            }
        },
        frequency: {
            get() {
                return this.$store.state.frequency
            }
        },
        ...mapGetters(["loadState", "frequencyData"])
    }
}
</script>
