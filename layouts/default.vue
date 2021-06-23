<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li><nuxt-link to="/"><i class="fas fa-home"></i>&nbsp; 홈으로</nuxt-link></li>
        <li>
          <nuxt-link to = "/stock"><i class="fas fa-file-signature"></i>&nbsp;코스피</nuxt-link>
        </li>
        <li>
          <nuxt-link to = "/stock2"><i class="far fa-calendar-plus"></i>&nbsp;코스닥</nuxt-link>
        </li>
         <li>
          <nuxt-link to = "/stockchart"><i class="far fa-chart-bar"></i>&nbsp;주식 차트 분석</nuxt-link>
        </li>
        <li>
          <nuxt-link to = "/stockStudy"><i class="fas fa-user-graduate"></i>&nbsp;주식공부</nuxt-link>
        </li>
      </ul>
      </nav>
      <nuxt/>
      <footer class="footer">
        <div class="content has-text-centered">
          <i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은 <strong>js</strong>에 있습니다.
        </div>
      </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

