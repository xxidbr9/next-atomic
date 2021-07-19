# Hello Welcome Aboard 👋

Selamat Datang di Ella Skin Care Development Team, sebelum kamu memulai development, disini [@xxidbr9](https://github.com/xxidbr9) akan menjelaskan alur development di ella

### Tentang Repo

Di repo ini (Frontend-User) kami di Ella menggunakan Next.js sebagai core frontend framework, untuk kamu yang belum tahu apa itu next js, coba lihat [disini](https://nextjs.org/docs) <br/>

##### List Stack Core Kami

- React 17
- Emotion js / css / styled-components
- Tailwind
- Redux

### Architecture

Kami menggunakan konsep Atomic Design Pattern untuk Struckture, dimana tiap pengerjaan component harus bermodul atau DRY (Don't Repeat YourSelf), untuk lebih lanjut, kamu bisa baca [disini](https://atomicdesign.bradfrost.com/chapter-2/), untuk lebih detailnya bisa ditanyakan ke @xxidbr9.

### Commit

Cara penulisan commit kami cukup unik, bila kamu seorang FOSS(Free Open Source) Contributor, pasti kamu sudah tahu beberapa cara penulisan commit yang umum, tapi apabila belum pernah, kami akan jelaskan.

#### List commit prefix Message

- feat : Pembuatan / Develope sebuah fitur baru
- fix : Membenarkan Bug di fitur yang sudah ada
- perf : Peningkatan / Meningkatkan performa dalam kode
- refactor : Mengganti full code yang sudah ada
- style : Merubah / Menambah Base Style System
- docs : Penambahan Documentasi file (.md)
- build : Merubah / Mengganti sesuatu yang mempengaruhi build (webpack,tailwind.config,postCss)
- ci : Commit yang mempengaruhi CICD
- test : Penambahan testing code seperti, Unit-test, Intregation Test, User Test

#### Cara Penulisan

Setelah kamu tahu kegunaan prefix commit message diatas, mulailah membuat commit dengan cara seperti \*nb: selalu menggunakan bahasa inggris dalam membuat commit

##### Commit message dengan description

```shell
feat: allow provided config object to extend other configs
```

##### Commit message dengan description dan body

```shell
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

##### Commit message dengan scope

```shell
feat(blog): added blog pages
```

##### Commit message dengan issue number.

```shell
fix: remove unused #25
```

Untuk membantu mu untuk menulis commit, kamu bisa menulis secara manual atau dengan cata memakai beberapa tools dibawah

- [yargs](https://github.com/yargs/yargs)
- [parse-commit-message](https://github.com/tunnckoCoreLabs/parse-commit-message)
- [istanbuljs](https://github.com/istanbuljs/istanbuljs)
- [standard-version](https://github.com/conventional-changelog/standard-version)

### Tugas Kamu

Sekarang untuk tugas kamu sendiri, kamu akan kami beri tugas dengan melihat [Issues](https://github.com/Ella-Skin-Care/ella-official-website/issues) di github

### Lainya

Untuk informasi lebih lanjut, bisa ditanyakan ke [@xxidbr9](https://github.com/xxidbr9)
