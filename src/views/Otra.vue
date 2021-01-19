<template>
  <div>
      Otra vista
      <br>
      <ul v-for="curso in cursos" v-bind:key="curso.id">
          <li>{{curso.nivel}} {{curso.letra}}</li>
          <ul v-for="alumno in curso.alumnos" v-bind:key="alumno.id">
              <li>{{alumno.nombre}}</li>
          </ul>
      </ul>
      <b-button type="is-primary"  @click="mostrar">Mostrar mensaje hermoso</b-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Otra',
    data() {
        return {
            cursos: [],
            loading: false
        }
    },
    methods: {
        getCursos() {
            axios.get('/api/cursos').then((res) => {
                this.cursos = res.data;
            })
        },
        mostrar() {
            this.$buefy.toast.open({
                message: 'Este es un mensaje bonito',
                type: 'is-success'
            })
        }
    },
    mounted() {
        this.getCursos()
    }
}
</script>
