<template>
  <div class="container">
    <div>
      <div class="article">
        <ul
          v-for="article in articles"
          :key="article.fields.title"
          @click="openLink(article.fields.id)"
        >
          <li>{{ article.fields.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'article',
        order: '-sys.createdAt'
      })
      .then((entries) => {
        return { articles: entries.items }
      })
      .catch((e) => console.log(e))
  },
  methods: {
    openLink(articleId) {
      this.$router.push(`/${articleId}`)
    }
  }
}
</script>
