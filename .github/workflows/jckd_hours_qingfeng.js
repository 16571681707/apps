name: jckd_hours_qingfeng

on:
  workflow_dispatch:
  schedule:
     - cron: '25 3-23/1 * * *'
  watch:
    types: book

jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        run: |
          npm install
          npm install got #tough-cookie
          npm install node-fetch
      - name: '运行 【jckd_hours】'
        run: |
          node jckd/jckd_qingfeng_sdjl.js
        env:
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          ycbtxbody: ${{ secrets.ycbtxbody }}
          fhxzhd: ${{ secrets.fhxzhd }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
