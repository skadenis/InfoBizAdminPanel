<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input />
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input type="file" id="file" ref="file" />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary">Сохранить</a-button>
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger">Удалить</a-button>
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-col>
    </a-row>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.bottom-buttons {
  width: 100%;

  .button {
    width: 100%;
  }
}
</style>
