import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { useIsMobile } from '~/composables/breakpoints'

export const useSidebarStore = defineStore('sidebar', () => {
  const isMobile = useIsMobile()

  /**
   * Свернуть ли боковую панель, по умолчанию она не свернута
   */
  const isCollapse = ref(false)

  /**
   * Отображать ли боковую панель, отображаемую по умолчанию
   */
  const isDisplay = ref(!isMobile.value)

  /**
   * Изменить сложенное состояние
   */
  function setIsCollapse(value: boolean) {
    isCollapse.value = value
  }

  /**
   * Переключить сложенное состояние
   */
  function toggleCollapse() {
    isCollapse.value = !isCollapse.value
  }

  /**
   * Изменить статус отображения
   */
  function setIsDisplay(value: boolean) {
    isDisplay.value = value
  }

  /**
   * Переключить статус дисплея
   */
  function toggleDisplay() {
    isDisplay.value = !isDisplay.value
  }

  return {
    isCollapse,
    isDisplay,
    setIsCollapse,
    toggleCollapse,
    setIsDisplay,
    toggleDisplay,
  }
})

/**
 * HMR
 * @see https://pinia.vuejs.org/zh/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSidebarStore, import.meta.hot))
