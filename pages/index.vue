<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        MERCAIRUN
      </h1>
      <h2 class="subtitle">
        Reparto a domicilio durante la cuarentena:
      </h2>
      <div class="tiendas">
        <ul>
          <li>Bakailuak <a href="tel:+34943637117"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 637117</button></a></li>
          <li>Charcutería Carlos Zubikoa <a href="tel:+34943634023"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 634023</button></a></li>
          <li>Charcutería Genoveva <a href="tel:+34943621360"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 621360</button></a></li>
          <li>Charcutería Josimiri <a href="tel:+34943621782"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 621782</button></a></li>
          <li>Charcutería Benages <a href="tel:+34943620818"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 620818</button></a></li>
          <li>Fruta y verdura Pilartxo <a href="tel:+34943624564"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 624564</button></a></li>
          <li>Verduras Juncal <a href="tel:+34943632636"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 632636</button></a></li>
          <li>Pescadería Arkaitz <a href="tel:+34943637849"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 637849</button></a></li>
          <li>Pescadería La Marea <a href="tel:+34943621819"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 621819</button></a></li>
          <li>Arrain Txoko <a href="tel:+34943625961"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 625961</button></a></li>
          <li>Corderos Juan Mari <a href="tel:+34943623581"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 623581</button></a></li>
          <li>Carnicería Iñaki Pikabea <a href="tel:+34943621039"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 621039</button></a></li>
          <li>Carnicería Olasagasti <a href="tel:+34943631157"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">943 631157</button></a></li>
        </ul>
      </div>
      <div class="more-info">
        <p>El pasado 23 de marzo, se redujo el horario del mercado, que durante estos días está abriendo de 9.00 a 13.30 y de 16.30 a 19.00.</p>
        <p>Más información, en el teléfono del C.C. Mendibil <a href="tel:+34943638394"> 943 638394.</a></p>
      </div>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 50px auto;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  padding-bottom: 15px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.tiendas {
  padding:30px 0;
  text-align: left;
  display: flex;
  justify-content: center;

}
.tiendas li {
  padding: 10px 0;
}
.more-info {
  padding: 10px;
}
.more-info a {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .title {
    font-size: 70px;
  }
  .subtitle {
    font-size: 21px;
  }
}
</style>
