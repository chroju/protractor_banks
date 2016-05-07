exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },

  params: {
    jpbank: {
      id1: process.env.JPBANK_ID1,
      id2: process.env.JPBANK_ID2,
      id3: process.env.JPBANK_ID3,
      aikotoba_haha: process.env.JPBANK_HAHA,
      aikotoba_movie: process.env.JPBANK_MOVIE,
      aikotoba_anime: process.env.JPBANK_ANIME,
      pass: process.env.JPBANK_PASS
    },
    sbisec: {
      id: process.env.SBIS_ID,
      pass: process.env.SBIS_PASS
    }
  }
}
