<template>
  <div v-html="toHtmlString()"></div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful'

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'article',
        'fields.id': params.id
      })
      .then((entries) => {
        return {
          article: entries.items[0]
        }
      })
      .catch((e) => console.log(e))
  },
  methods: {
    toHtmlString() {
      return documentToHtmlString(this.article.fields.body)
    }
  }
}
</script>
