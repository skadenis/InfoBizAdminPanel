<template>
  <div>
    <a-menu>
      <a-menu-item class="menu__item">
        <router-link to="/marketing/push">
          <p class="label">Push - уведомления</p>
          <span class="sublabel">Пуш - важнейший инструмент маркетинга.</span>
        </router-link>
      </a-menu-item> 

      <a-menu-item class="menu__item">
        <router-link to="/marketing/offers">
          <p class="label">Специальные предложения</p>
          <span class="sublabel">Специальные предложения</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.menu__item {
  height: auto;
  min-height: 100px;
  background-color: #fafafa;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover .label {
    text-decoration: underline;
  }

  .label {
    font-size: 1.4em;
    font-weight: 600;
    color: black;
  }
}
</style>
