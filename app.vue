<script>
import 'primevue/resources/themes/aura-light-green/theme.css';

import 'primeicons/primeicons.css'; // Agrega esta línea si estás utilizando iconos de PrimeIcons
import { Button } from 'primevue/button'; // Importa el componente Button de PrimeVue


export default {
  components: {
    Button // Registra el componente Button para su uso en tu plantilla
  }
}
</script>

<template>
  <div>
    <p>Hola desde Nuxt3</p>

    <Button label="Check" icon="pi pi-check" />
  </div>
</template>
