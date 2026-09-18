<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { sections } from '../navigation'
const { page, lang } = useData()
const crumbs = computed(() => {
  const pl = lang.value === 'pl'
  const locale = pl ? 'pl' : 'en'
  const prefix = pl ? '/pl/' : '/'
  const path = page.value.relativePath.replace(/^pl\//, '').replace(/\.md$/, '')
  const [slug, name = 'index'] = path.split('/')
  const section = sections.find(item => item.slug === slug)
  if (!section) return []
  const result = [{ text: pl ? 'Strona główna' : 'Home', href: prefix }]
  if (name !== 'index') result.push({ text: section[locale], href: `${prefix}${slug}/` })
  result.push({ text: name === 'index' ? section[locale] : page.value.title, href: '' })
  return result
})
</script>
<template>
  <nav v-if="crumbs.length" class="breadcrumbs" :aria-label="lang === 'pl' ? 'Ścieżka nawigacji' : 'Breadcrumb'">
    <ol><li v-for="(crumb, index) in crumbs" :key="index">
      <span v-if="index" aria-hidden="true" class="separator">/</span>
      <a v-if="crumb.href" :href="withBase(crumb.href)">{{ crumb.text }}</a>
      <span v-else aria-current="page">{{ crumb.text }}</span>
    </li></ol>
  </nav>
</template>
